// src/UserDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="App user">
      <div className="user-profile-pic"></div>
      <div className="user-details-name">
        <h4>{user.name}</h4>
        <div>@{user.username}</div>
      </div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
      <h4>Address</h4>
      <div>
        {" "}
        {user.address.city},{user.address.street}, {user.address.suite},{" "}
        {user.address.zipcode}
      </div>
      <h4>Company</h4>
      <h4>{user.company.name}</h4>
      <div>{user.company.catchPhrase}</div>
    </div>
  );
};

export default UserDetails;
