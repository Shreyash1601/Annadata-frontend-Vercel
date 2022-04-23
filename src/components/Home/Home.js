import { render } from '@testing-library/react'
import React,{useState} from 'react'
import './home.css'
const wiki = require('wikipedia');
const axios = require("axios");

const Home = () => {
  const [data,setData]=useState({
    N:0,
    P:0,
    K:0,
    temp:0,
    humi:0,
    ph:0,
    rainfall:0
  })
  const [crop,setCrop]=useState()
  const [info,setInfo]=useState(null)
  const PostData=async (e)=>{
    e.preventDefault()
    const data2=new FormData()
    data2.append('N',data.N)
    data2.append('P',data.P)
    data2.append('K',data.K)
    data2.append('temp',data.temp)
    data2.append('humi',data.humi)
    data2.append('ph',data.ph)
    data2.append('rainfall',data.rainfall)


    const res=await fetch("https://annadata-ml-api.herokuapp.com/suggest",{
      method:"POST",
      body:data2
    })
    const result=await res.json()
    if(res.status!=200||!result){
      window.alert("Invalid request!!Check your connection or check the details provided")
    }
    else{
      console.log(result)
      setCrop(result.suggestion.toUpperCase())
    }
  }
  let name,value;
  const handleInputs=(e)=>{
    name=e.target.name
    value=e.target.value
    setData({...data,[name]:value})
    }



    (async () => {
      try {
        const summary = await wiki.summary(crop.toString());
        setInfo(summary.extract)
        //Response of type @wikiSummary - contains the intro and the main image
      } catch (error) {
        console.log(error);
        //=> Typeof wikiError
      }
    })();


    return (
        <>
        <br/>
        <br/>
        <br/>
        <h1>Welcome to Annadata</h1> 
        <form class="form-body">
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Nitrogen content</label>
    <input value={data.N} name="N" onChange={handleInputs}type="number" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Nitrogen"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Phosphorous content</label>
    <input type="number" name="P" value={data.P} onChange={handleInputs}class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phosphorous"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Potassium content</label>
    <input type="number"value={data.K} name="K"onChange={handleInputs} class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Potassium"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter temperatue in degree Celcius</label>
    <input name="K" type="number" name="temp" value={data.temp} onChange={handleInputs}class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter temperatue in degree Celcius"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter humidity%</label>
    <input name="humi"type="number" value={data.humi} onChange={handleInputs}class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter humidity%"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">pH level of Soil</label>
    <input type="number" name="ph" value={data.ph} onChange={handleInputs}class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="pH level of Soil"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter annual rainfall</label>
    <input name="rainfall" type="number" value={data.rainfall} onChange={handleInputs}class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter annual rainfall in cm"/>
  </div>
  <button class="btn btn-primary" onClick={PostData}>Suggest</button>
</form>
{/* Information on Crop */}
<h1 class="crop">{crop}</h1>
<p class="Info">{info}</p>

        </>
    )
}
export default Home