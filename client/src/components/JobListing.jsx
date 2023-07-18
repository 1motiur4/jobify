import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobListing";
import { getSingleJob } from "../features/allJobs/allJobsSlice";

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
        <h5>{company}</h5>
        <p>Will fill out the rest of this component later</p>
      </div>
    </Wrapper>
  );
};
export default JobListing;
