import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from "moment";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const grabJobsRequest = async (req, res, user) => {
  const { status, jobType, sort, search, page } = req.query;

  let queryObject = {};

  if (user) {
    queryObject = {
      createdBy: req.user.userId,
    };
  }

  if (status && status !== "all") {
    queryObject.status = status;
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  // NO AWAIT
  let result = Job.find(queryObject);

  // chain sort conditions

  switch (sort) {
    case "latest":
      result = result.sort("-createdAt");
      break;
    case "oldest":
      result = result.sort("createdAt");
      break;
    case "a-z":
      result = result.sort("position");
      break;
    case "z-a":
      result = result.sort("-position");
      break;
    default:
      result = result.sort("-createdAt");
      break;
  }

  const limit = 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};

const getAllJobs = async (req, res) => {
  return grabJobsRequest(req, res, false);
};

const getMyJobs = async (req, res) => {
  return grabJobsRequest(req, res, true);
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError("Please Provide All Values");
  }

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  //check permissions
  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  console.log(req.params);
  const { jobId } = req.params;

  if (!jobId) {
    throw new BadRequestError("Missing job ID");
  }

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  await job.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Job removed" });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      // accepts 0-11
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ stats: defaultStats, monthlyApplications });
};

const getJobListing = async (req, res) => {
  const { jobId } = req.params;

  let queryObject = { _id: jobId };

  let job = await Job.findOne(queryObject);
  console.log(job);

  res.status(StatusCodes.OK).json({job});
};

export { createJob, deleteJob, getAllJobs, getMyJobs, updateJob, showStats, getJobListing };
