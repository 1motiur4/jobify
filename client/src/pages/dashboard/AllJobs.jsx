import { SearchContainer, JobsContainer } from "../../components";
import { getAllJobs } from "../../features/allJobs/allJobsSlice";

const AllJobs = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer getJobsFunc={getAllJobs} />
    </>
  );
};
export default AllJobs;
