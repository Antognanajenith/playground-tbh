import "./App.css";
import Axios from "axios";

import { useState, useEffect } from "react";

const App = () => {
  const [barray, setBarray] = useState([]);
  const [baren, setBaren] = useState("");
  const [age, setAge] = useState("");

  const [title, setTitle] = useState("");
  const [objdata, setObjdata] = useState({});
  const [mgdata, setMgdata] = useState({});
  const clickfunc1 = (btopush) => {
    setBarray((barray) => [...barray, btopush]);
  };

  const fetchdata = async () => {
    try {
      const resd = await Axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      // setTitle(resd.data.title);
      // setObjdata(resd.data);
      setObjdata((objdata) => ({ ...objdata, ...resd.data }));
      console.log(objdata);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchmongodb = async () => {
    try {
      const resd = await Axios.get(
        "http://localhost:4003/api/userdata"
      );
      // setTitle(resd.data.title);
      // setObjdata(resd.data);
      setMgdata((mgdata) => ({ ...mgdata, ...resd.data }));
      console.log(mgdata);
    } catch (e) {
      console.log(e);
    }
  };

  const sendmanualmongo = async()=>{
    try{
      const sendmanmg = await Axios.post("http://localhost:4003/api/userdata",{
        username:"kavin thambi",
        title:"puthupayyan",
        age:12,
      })
      console.log("sent_data_via_manual",sendmanmg.data)
    }catch(e){
      console.log("error=",e)
    }
  }
  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1 className="h1styler">Hello CodeSandbox</h1>
      <div>
        <input
          alt="inputplacer"
          onChange={(event) => setBaren(event.target.value)}
        />
        <button onClick={() => clickfunc1(baren)}>change baren </button>
        <input
          alt="inputplacer"
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      {baren}-{age}
      <h4>all array of input </h4>
      {barray.map((i) => (
        <h6>{i}</h6>
      ))}
      <div>
        <button onClick={fetchdata}>click-fetch</button>
        <button onClick={fetchmongodb}>fetchmongo</button>
        <button onClick={sendmanualmongo}>sendmanualmongo</button>
        {/* {title} */}
      </div>
    </div>
  );
};

export default App;
