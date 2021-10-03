import React, { useEffect, useState } from "react";
import "./assets/css/main.scss";
import axios from "axios";
import TripsMap from "./components/TripsMap";
import TitlePage from "./components/TitlePage";
import ThemeList from "./components/ThemeList";
import LocationList from "./components/LocationList";

function App() {
  const [data, setData] = useState({ location: [], themes: [] });
  const [isError, setIsError] = useState(false);
  const { location, themes } = data;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios.get("/trips");
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrap">
      {isError && <div>Something went wrong ...</div>}
      <TitlePage />
      <TripsMap />
      <LocationList list={location} />
      <ThemeList list={themes} />
    </div>
  );
}

export default App;
