const BreedList = (props) => {
  if (!props.breeds || !props.breeds.data) {
    return <p>Loading...</p>;
  }

  const listItems = props.breeds.data.map((breed) => (
    <li key={breed.id}>{breed.breed}</li>
  ));

  return (
    <div className="breed_list">
      <p>Dog breeds</p>
      <input type="text" />
      <ul> {listItems}</ul>
    </div>
  );
};

export default BreedList;
