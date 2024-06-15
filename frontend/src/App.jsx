
import './App.css'
import axios from "axios"
import {useEffect,useState} from 'react'
function App() {
  const [data, setData] = useState("")

  function dataChange(e) {
    setData(e.target.value)
  }
  async function getData(){
    var res=await axios.get("http://localhost:8080/")
    console.log(res);
  }
  async function submit(){
    alert("data submitted: "+data);
    var res=await axios.post("http://localhost:8080/",{
      data:data
    }) 
    console.log(res);
  }
  useEffect(()=>{
    getData();
  },[])
 
  return (
    <>
      <input onChange={dataChange} />
      <button onClick={submit}>Submit</button>
    </>
  )
}

export default App
