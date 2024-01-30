import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = async (URL) => {
  const res = await fetch(URL);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ISSTracker() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("data: ", data);

  if (isLoading)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...</h1>
    );
  if (error)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>
        {error.message}
      </h1>
    );

  // const [data, setdata] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSdata() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setdata({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSdata();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        // onRefresh={getISSdata}
      />
    </main>
  );
}
