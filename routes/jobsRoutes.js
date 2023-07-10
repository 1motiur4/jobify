import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getMyJobs,
  updateJob,
  showStats,
  getJobListing,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJobs);
router.route("/myJobs").get(getMyJobs);
// remember about :id
router.route("/stats").get(showStats);
router.route("/:jobId").delete(deleteJob).patch(updateJob);

router.route("/all-jobs/:jobId").get(getJobListing);

export default router;
