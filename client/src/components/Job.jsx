import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useSelector, useDispatch } from "react-redux";
import JobInfo from "./JobInfo";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";
import { getSingleJob } from "../features/allJobs/allJobsSlice";

// This component is for each individual job result that shows up within the JobContainer.

const Job = ({
  index,
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  createdBy,
  status,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { jobInView } = useSelector((store) => store.allJobs);

  const jobOwner = createdBy === user._id;

  const date = moment(createdAt).format("MM-DD-YYYY");

  return (
    <Wrapper
      onClick={() => {
        dispatch(getSingleJob(_id));
      }}
    >
      <div className={jobInView._id === _id && "active"}>
        <header>
          <div className="main-icon">{company.charAt(0)}</div>
          <div className="info">
            <h5>
              <Link to={`../${_id}`}>{position}</Link>
            </h5>
            <p>{company}</p>
          </div>
        </header>
        <div className="content">
          <div className="content-center">
            <JobInfo
              icon={<FaLocationArrow />}
              text={jobLocation}
            />
            <JobInfo
              icon={<FaCalendarAlt />}
              text={date}
            />
            <JobInfo
              icon={<FaBriefcase />}
              text={jobType}
            />
            <div className={`status ${status}`}>{status}</div>
          </div>

          {jobOwner && (
            <footer>
              <div className="actions">
                <Link
                  to="/add-job"
                  className="btn edit-btn"
                  onClick={() => {
                    dispatch(
                      setEditJob({
                        editJobId: _id,
                        position,
                        company,
                        jobLocation,
                        jobType,
                        status,
                      })
                    );
                  }}
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn delete-btn"
                  onClick={() => {
                    dispatch(deleteJob(_id));
                  }}
                >
                  Delete
                </button>
              </div>
            </footer>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Job;
