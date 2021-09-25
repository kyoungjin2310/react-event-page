import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({ location: [] });
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios(
          "https://60a86644-548d-4cef-8618-9aaf8f8e8dbd.mock.pstmn.io/trips"
        );
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <ul>
      {isError && <div>Something went wrong ...</div>}
      {data.location.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default App;
