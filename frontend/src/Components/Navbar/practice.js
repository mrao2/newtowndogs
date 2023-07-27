const project = {
  name: "New Town Dogs!",
  imageUrl: "https://www.w3schools.com/images/w3schools_green.jpg",
  imageSize: 45,
};

function MyButton() {
  return <button>Click me...</button>;
}

export default function MyApp() {
  return (
    <>
      <h1>{project.name}</h1>
      <img
        className="avatar"
        src={project.imageUrl}
        alt={"Photo of " + project.name}
        style={{ width: project.imageSize, height: project.imageSize }}
      />
      <br />
      <MyButton />
    </>
  );
}
