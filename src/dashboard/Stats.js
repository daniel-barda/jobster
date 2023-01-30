import { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { showState } from "../features/allJobs/allJobsSlice";

export const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const disptach = useDispatch();

  useEffect(() => {
    disptach(showState());
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
