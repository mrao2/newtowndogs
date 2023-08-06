import "./Homepage.css";
import { useState } from "react";

const project = {
  title: "Welcome to Newtown Dogs",
};

const breeds = [
  { title: "Newfie", id: 1 },
  { title: "Golden", id: 2 },
  { title: "Lab", id: 3 },
  { title: "Mix", id: 4 },
  { title: "Husky", id: 5 },
];

const listItems = breeds.map((breed) => <li key={breed.id}>{breed.title}</li>);

function Homepage() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="homepage">
      <h1>{project.title}!</h1>
      <p>Add your favorite dog breed to the list!</p>
      <input type="text" />
      <ul> {listItems}</ul>
      {/* 
      <div className="image-container">
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/dog-canine_VGA72SHHYQ.jpg"
          alt="border collie"
        />
        <p>This is a cool border collie!</p>
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/husky-animal_TFSKPZTEPD.jpg"
          alt="husky"
        />
      </div> */}

      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default Homepage;
