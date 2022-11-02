import { render } from '@testing-library/react'
import React,{useState} from 'react'
import './suggest.css'
import loading from './../../images/loading.gif'
const wiki = require('wikipedia');

const Home = () => {
  const [disp,setDisp]=useState(false)
  const [data,setData]=useState({
    N:"",
    P:"",
    K:"",
    temp:"",
    humi:"",
    ph:"",
    rainfall:""
  })
  const [crop,setCrop]=useState()
  const [info,setInfo]=useState(null)
  const PostData=async (e)=>{
    e.preventDefault()
    setDisp(true)
    const data2=new FormData()
    data2.append('N',Math.round(data.N))
    data2.append('P',Math.round(data.P))
    data2.append('K',Math.round(data.K))
    data2.append('temp',Math.round(data.temp))
    data2.append('humi',Math.round(data.humi))
    data2.append('ph',Math.round(data.ph))
    data2.append('rainfall',Math.round(data.rainfall))


    const res=await fetch("https://annadata-ml-api.herokuapp.com/suggest",{
      method:"POST",
      body:data2
    })
    const result=await res.json()
    if(res.status!==200||!result){
      setDisp(false)
      window.alert("Invalid request!!Check your connection or check the details provided")
    }
    else{
      setDisp(false)
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
        const summary = await wiki.summary(crop.toString().toLowerCase());
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
        <h1 style={{textAlign:"center",fontWeight:"bolder"}}>Enter Soil health and Weather statistics</h1> 
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
  <div style={{display:disp?"block":"none",alignSelf:"center",color:"black"}}>
  <img src={loading} height="70px" width="120px" />
  <h3 >Loading...</h3> 
  </div>
  
</form>
{/* Information on Crop */}


<h1 class="crop">{crop}</h1>
<p class="Info">{info}</p>

        </>
    )
}
export default Home