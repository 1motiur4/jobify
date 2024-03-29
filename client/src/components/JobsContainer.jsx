import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Job, JobList, JobListing } from "./";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import PageBtnContainer from "./PageBtnContainer";
import PropTypes from "prop-types";
import { getSingleJob } from "../features/allJobs/allJobsSlice";

// This component contains the Job component (left) and JobListing component (right).

const JobsContainer = ({ getJobsFunc }) => {
  const dispatch = useDispatch();
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
    jobInView,
  } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getJobsFunc());
  }, [search, searchStatus, searchType, sort, page]);

  useEffect(() => {
    if (jobs.length > 0) {
      dispatch(getSingleJob(jobs[0]._id));
    }
  }, [jobs]);

  if (isLoading) {
    return <Loading />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} <span />
      </h5>
      <div className="jobs-container">
        <JobList jobs={jobs} />
        <JobListing job={jobInView} />
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

JobsContainer.propTypes = {
  getJobsFunc: PropTypes.func,
};

export default JobsContainer;
