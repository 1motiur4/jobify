import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobListing";

const JobListing = ({ job }) => {
  const {
    company,
    position,
    status,
    jobType,
    jobLocation,
    createdAt,
    updatedAt,
  } = job;

  return (
    <Wrapper>
      <div className="job-listing-container">
        <h3>{position}</h3>
      </div>
    </Wrapper>
  );
};
export default JobListing;
