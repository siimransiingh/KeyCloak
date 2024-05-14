import React, { useEffect, useRef,useState } from "react";
import axios from "axios";

const LoggedIn = ({ token }) => {
  const [data, setData] = useState(null);
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    
    axios
      .get("/vegetables",config)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data ? ( 
        <div>
          {data.map((rec, i) => (
            <h3 key={i}>{rec.Vegetable}</h3> 
          ))}
        </div>
      ) : (
        <div>Fetching data...</div> 
      )}
    </div>
  );
};

export default LoggedIn;
