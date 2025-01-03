import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  
  const [getusers, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">User List</header>
      <section className="App-section">
        <ul>
          {getusers.map((user) => (
            <li key={user.id}>
              {user.name}
              <Link className="App-link" to={`/userDetails/${user.id}`}>
                <button className="user-button">
                  <div className="link-profile">View Details</div>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
