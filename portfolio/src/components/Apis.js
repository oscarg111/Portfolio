import logo from "../logo.svg";
import "../App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

export const Apis = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const [excuse, setExcuse] = useState("");

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  const fetchExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then(
      (res) => {
        console.log(res.data[0].excuse);
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <input
        placeholder="Ex. Oscar..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      {/* the ? means only access data from if there is value */}
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuse("party")}> Party </button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <h1>{excuse}</h1>
    </div>
  );
};
