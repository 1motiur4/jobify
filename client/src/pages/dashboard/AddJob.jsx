import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "../../components/FormRowSelect";

const AddJob = () => {
  const {
    isEditing,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useSelector((store) => store.job);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("You're missing something..");
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };

  return (
    <Wrapper>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job type & status */}

          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          <FormRowSelect
            name="jobType"
            labelText={`job type`}
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
