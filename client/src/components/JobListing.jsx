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
      <h3>{position}</h3>
    </Wrapper>
  );
};
export default JobListing;
