import { useEffect, useState } from "react";
import Message from "./Message";
import "./style.css";

export default function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("email has changed");
  }, [email]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  const handleClick = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="elon@spacex.com"
          onChange={handleChange}
          value={email}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleClick}>Logout</button>
      {isUserLoggedIn && <Message />}
    </div>
  );
}
