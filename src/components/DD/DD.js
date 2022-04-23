import React from 'react'
import ReactPlayer from "react-player"
import "./DD.css"
const DD = () => {
    return (
        <>
        <br/>
        <br/>
        <br/>
<h1 className="screen">Watch DD Kisan Live</h1>
<div >
<ReactPlayer className="screen" width="100vw" height="100vh" controls url="https://youtu.be/YSB78Lqn-Ls" muted={false} playing={true}/>
</div>
        </>
    )
}
export default DD