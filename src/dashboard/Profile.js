import React, { useState } from "react";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../features/user/userSlice";

export const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setuserData] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    lastName: user?.lastName ?? "",
    location: user?.location ?? "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Please Fill Out All Fields");
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <h1>Profile</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          {/* Name */}
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />

          {/* lastName */}
          <FormRow
            type="text"
            labelText="lastName"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />

          {/* email */}
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />

          {/* location */}
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
