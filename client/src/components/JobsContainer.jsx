import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, page, totalJobs } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return <div>JobsContainer</div>;
};
export default JobsContainer;
