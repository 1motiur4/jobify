import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Job, JobListing } from "./";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import PageBtnContainer from "./PageBtnContainer";
import PropTypes from "prop-types";

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
    currentListing,
  } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getJobsFunc());
    
  }, [search, searchStatus, searchType, sort, page]);

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

  const test = {"_id": "649a51c40b7500b88b49f6ac",
  "company": "Stamm-Shanahan",
  "position": "Assistant Manager",
  "status": "interview",
  "jobType": "remote",
  "jobLocation": "Cartagena",
  "createdBy": "647e0caee2f0a7c0cd9c4cf6",
  "createdAt": "2023-03-22T20:39:55.000Z",
  "updatedAt": "2023-03-22T20:39:55.000Z",
  "__v": 0}

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} <span />
      </h5>
      <div className="jobs-container">
        <div className="jobs">
          {jobs.map((job) => {
            return (
              <Job
                key={job._id}
                {...job}
              />
            );
          })}
        </div>
        <JobListing job={test}/>
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

JobsContainer.propTypes = {
  getJobsFunc: PropTypes.func,
};

export default JobsContainer;
