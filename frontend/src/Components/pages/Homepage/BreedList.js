import "./BreedList.css";

const BreedList = (props) => {
  if (!props.breeds || !props.breeds.data) {
    return <p>Loading...</p>;
  }

  const handleDelete = (breed) => {
    fetch("/api/breeds/" + breed.breedid, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting breed:", error);
      });
  };

  const updateBreed = (breed) => {
    fetch("api/breeds" + breed.breedid, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(breed),
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error updating breed:", error);
      });
  };

  const listItems = props.breeds.data.map((breed) => (
    <li key={breed.breedid}>
      {breed.breed}
      <button className="deleteButton" onClick={() => handleDelete(breed)}>
        <i className="bi bi-trash"></i>
      </button>
      <button className="updateButton" onClick={() => updateBreed(breed)}>
        <i className="bi bi-pen"></i>
      </button>
    </li>
  ));

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const enteredBreed = { breed: event.target.value };
      fetch("api/home", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enteredBreed),
      })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error adding breed:", error);
        });
      event.target.value = "";
    }
  };

  return (
    <div className="breed_list">
      <p>Enter your favorite dog breed!</p>
      <input onKeyDown={handleKeyDown} type="text" />
      <ul className="breeds"> {listItems}</ul>
    </div>
  );
};

export default BreedList;
