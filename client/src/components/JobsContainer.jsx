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

  if (isLoading) {
    return <Loading />
  }

  if (jobs.length === 0) {
    return <Wrapper>
      <h2>No jobs to display...</h2>
    </Wrapper>
  }

  return <Wrapper>
    <h5>{totalJobs} job{jobs.length > 1 && 's'}</h5>
    <div className="jobs">
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />
      })}
    </div>
  </Wrapper>;
};
export default JobsContainer;
