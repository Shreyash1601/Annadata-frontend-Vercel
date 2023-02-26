import React,{useState} from 'react'
import axios from 'axios';
import loader from '../../images/loading.gif'
import './Prices.css'
const Prices=()=>{
    const [data,setData]=useState(null)
    const [load,setLoad]=useState(null)
    const getData=async (id)=>{
        setLoad(true)
        setData(null)
    const result=await axios.get('https://api.data.gov.in/resource/14389871-c2f4-4348-b4ca-b55391d4ea0b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json').then((res)=>{
        setLoad(null)
        console.log(res.data.records[id].minimum_support_prices__rs__per_quintal____2022_23
    )
    setData(res.data.records[id].minimum_support_prices__rs__per_quintal____2022_23)
        }
    ).catch((e)=>{
        setLoad(null)
        window.alert("Error Check you Connection and Retry")
        console.log(e)
    })


    }
    return(
        <>
        <div className='container'>
           <div>
           <button onClick={()=>getData(0)}>
               Wheat
           </button>
           <button onClick={()=>getData(5)}>
           Safflower
           </button>
           </div>
           <div>
           <button onClick={()=>getData(1)}>
           Barley
           </button>
           <button onClick={()=>{getData(2)}}>
           Gram
           </button>
           </div>
           <div>
           <button onClick={()=>getData(3)}>
           Masur
           </button>
           <button onClick={()=>getData(4)}>
           Mustard
           </button>
           </div>
           <img src={loader} style={{width:"30vw", height:"10vh", margin:"auto",display:load?'block':'none'}}/>
           <div style={{display:data?'block':'none'}}className='Result'>
            <h1 className='result'>Rs {data} Per Quintal</h1>
           </div>
        </div>
        </>
    )
}
export default Prices