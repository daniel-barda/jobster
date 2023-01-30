import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const { searchStatus, searchType, sort, page, search } =
      thunkAPI.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

    if (search) {
      url += `&${search}`;
    }

    const res = await customFetch.get(url);

    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStateThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats");

    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
