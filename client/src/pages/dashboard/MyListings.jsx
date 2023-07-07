import { SearchContainer, JobsContainer } from "../../components"
import { getMyJobs } from "../../features/allJobs/allJobsSlice"

const MyListings = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer getJobsFunc={getMyJobs} />
    </>
  )
}
export default MyListings