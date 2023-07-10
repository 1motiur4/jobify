import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobListing";
import { useEffect } from "react";
import { getJobListing } from "../features/job/jobSlice";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const dispatch = useDispatch();
  const { job } = useSelector((store) => store.job);
  const { id } = useParams();
  // console.log(useParams())

  useEffect(() => {
    dispatch(getJobListing(id))
  }, [])

  // console.log(job);

  return <Wrapper>hi</Wrapper>;
};
export default JobPage;
