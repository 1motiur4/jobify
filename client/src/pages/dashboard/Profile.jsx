import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { updateUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !lastName || !location) {
      return toast.error("Please fill out all fields!");
    }

    dispatch(updateUser({ name, lastName, email, location }));

    console.log("update user handlesubmit");
  };

  return (
    <Wrapper>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="Name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="Location"
            name="Location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="btn btn-block"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Please Wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
