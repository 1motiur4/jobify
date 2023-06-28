import { useSelector, useDispatch } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { useEffect } from "react";
import { ChartsContainer, Loading, StatsContainer } from "../../components";

const Stats = () => {
  const { isLoading, stats, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
