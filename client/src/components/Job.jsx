import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import { deleteJob, setEditJob } from "../features/job/jobSlice";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import JobInfo from "./JobInfo";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const { editJobId } = useSelector((store) => store.job);

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
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
        <footer>
          <div className="actions">
            <Link
              className="btn edit-btn"
              to="/add-job"
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
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
