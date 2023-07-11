import { useEffect, useState } from "react";


// This component is used as a generic fetch function to be used with many variables
const useFetch = (url) => {

// Declaring a data object, with its setter, and making is have the useState property
  const [data, setData] = useState(null);
// Declaring a isPending object, with its setter, and making is have the useState property, to check if data is still being loaded
  const [isPending, setIsPending] = useState(true);
 // Declaring a error object, with its setter, and making is have the useState property, to catch any errors thrown using the fetch
  const [error, setError] = useState(null);


// A useEffect function that covers the whole fetch. When loading the fetch, then redirected, IE(User clicks a different page), it will abort the fetch as to not throw an error
  useEffect(() => {
    const abortCont = new AbortController();

    // A setTimeout function that covers the fetch. I have it delay the load by 1 second so you can see the loading icon as a test
    setTimeout(() => {
        // Fetching a URL named url, and finding the AbortController I made earlier
      fetch(url, { signal: abortCont.signal })
        // then it is taking in the response, and checking to see if the data has been found, if not it throws an error
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        // if the response has been recieved, it then assigns the json file date into a object named data. isPending is set to false since its now loaded, and setError is null due to successful load.
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
