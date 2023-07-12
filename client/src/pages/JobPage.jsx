import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobListing";
import { useEffect } from "react";
import { getJobListing } from "../features/job/jobSlice";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const dispatch = useDispatch();
  const { job } = useSelector((store) => store.job);
  const { jobId } = useParams();

  useEffect(() => {
    dispatch(getJobListing(jobId))
  }, [])

  return <Wrapper>{job._id}</Wrapper>;
};
export default JobPage;
