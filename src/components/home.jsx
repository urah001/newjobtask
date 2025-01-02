// this is the home directory
import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [getUsers, setgetUsers] = useState();
  useEffect(() => {
    const fecthUsers = async () => {
      const resq = await fetch("https://jsonplaceholder.typicode.com/users");
      const resp = await resq.json();
      setgetUsers(resp);
    };
    fecthUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Home</header>
      <section className="App-section">
        <h1>user list</h1>
        <ul>
          {getUsers.map((user) => (
            <li>
              <Link to={`/user/${user.id}`}> view detail</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
