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
