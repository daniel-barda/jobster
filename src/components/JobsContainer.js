import { useEffect } from "react";
import { Job } from "../components/Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "./Loading";
import PageBtnContainer from "./PageBtnContainer";

export const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    totalJobs,
    numOfPages,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) return <Loading center />;

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
        {numOfPages > 1 && <PageBtnContainer />}
      </div>
    </Wrapper>
  );
};
