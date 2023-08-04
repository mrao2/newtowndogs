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
    <>
      <h1>{project.title}!</h1>
      <p>All breeds welcome! Add yours to the list!</p>
      <input type="text" />
      <ul> {listItems}</ul>

      <img
        src="https://cdn.stocksnap.io/img-thumbs/960w/dog-canine_VGA72SHHYQ.jpg"
        alt="border collie"
      />

      <img
        src="https://cdn.stocksnap.io/img-thumbs/960w/husky-animal_TFSKPZTEPD.jpg"
        alt="husky"
      />

      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default Homepage;
