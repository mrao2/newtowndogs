import useFetch from "../../useFetch";
import "./Homepage.css";
import { useState } from "react";
import BreedList from "./BreedList";

function Homepage() {
  const [count, setCount] = useState(0);
  const project = {
    title: "Newtown Dogs Pet Sitting",
  };

  const { data: breeds, isPending, error } = useFetch("/api/home");

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="homepage">
      {error && <div>{error}</div>}
      {isPending && <div>Loading... </div>}
      <br />
      <br />
      <br />
      <br />
      <h1 className="title">{project.title}</h1>
      <p>Located at 4811 Delmar Blvd, St. Louis, MO 63108</p>
      <p>Phone number: 555-444-1234</p>
      {/* <BreedList breeds={breeds} />
      <MyButton count={count} onClick={handleClick} /> */}
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default Homepage;
