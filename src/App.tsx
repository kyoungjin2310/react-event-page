import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({ location: [], triptype: [] });
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
      {data.triptype.map((item: any) => (
        <div key={item.id}>
          <h2>{item.tag}</h2>
          {item.data.map((item: any) => (
            <div>
              <h3>
                <span>{item.category}</span>
                <span>{item.title}</span>
              </h3>
              <p>{item.reservation}</p>
              <p>{item.discount}</p>
              <p>
                <span>{item.price}</span>
                <span>{item.discountprice}</span>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
