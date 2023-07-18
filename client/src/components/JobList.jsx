import Job from "./Job";

const JobList = ({ jobs }) => {
  return (
    <div className="jobs">
      {jobs.map((job, index) => {
        return (
          <Job
            index={index}
            key={job._id}
            {...job}
          />
        );
      })}
    </div>
  );
};
export default JobList;
