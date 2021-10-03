import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

function App() {
  const [data, setData] = useState({ location: [], themes: [] });
  const [isError, setIsError] = useState(false);
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
      {data.location.map((item: any) => (
        <div key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>추천명소 : {item.sights}</p>
          </div>
        </div>
      ))}
      {data.themes.map((item: any) => (
        <div key={item.id}>
          <h2>{item.tag}</h2>
          {item.data.map((item: any) => (
            <div>
              <h3>
                <span>{item.category}</span>
                <span>{item.title}</span>
              </h3>
              <p>{item.ticket_type}</p>
              <p>{item.discount_percent}</p>
              <p>
                <span>{item.ticket_price}</span>
                <span>{item.discount_price}</span>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
