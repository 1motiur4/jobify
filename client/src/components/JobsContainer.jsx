import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Job, JobListing } from "./";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import PageBtnContainer from "./PageBtnContainer";
import PropTypes from "prop-types";
import { toggleListing } from "../features/allJobs/allJobsSlice";

const JobsContainer = ({ getJobsFunc }) => {
  const [showListing, setShowListing] = useState(true);

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
    listing,
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

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} <span />
        <button
          className="btn"
          onClick={() => {
            dispatch(toggleListing());
          }}
        >
          Toggle Listing
        </button>
      </h5>
      <div className={`jobs-container ${listing ? "show-listing" : null}`}>
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
        {listing ? <JobListing /> : null}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

JobsContainer.propTypes = {
  getJobsFunc: PropTypes.func,
};

export default JobsContainer;
