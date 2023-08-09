const BreedList = (props) => {
  if (!props.breeds || !props.breeds.data) {
    return <p>Loading...</p>;
  }

  const listItems = props.breeds.data.map((breed) => (
    <li key={breed.id}>{breed.title}</li>
  ));

  return (
    <div className="breed_list">
      <p>Add your favorite dog breed to the list!</p>
      <input type="text" />
      <ul> {listItems}</ul>
    </div>
  );
};

export default BreedList;
