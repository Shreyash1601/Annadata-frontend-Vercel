import React from 'react'
import logo from '../../images/logo.jpg'
import './intro.css'
const intro = () => {
    return (
        <>
           {/* Introduction */}
<div className="Intro">
  <img src={logo} alt="" height="250px" width="250px"/>
  <div>
    <p>Welcome to <b>Annadata</b>- an ML based solution to recommend farmers on best crops to be sown based on <em>soil health and weather statistics</em>.</p>

    <p>With changing times bringing in dynamic impact on soil and plant health,it's imperative for farmers to know the best farming practices and take decisions accordingly</p>

    <p>Our application is a little initiative to suggest them the best crops to be sown fetching them better yields and income. We have used a <b>kaggle</b> provided dataset and used <b>Random Forest</b> algorithm to make predictions</p>

    <p>
    The predictions are made using a <b>Flask server</b> deployed on <b>Heroku</b> and the front-end is prepared using <b>ReactJS</b>
    </p> 
    <p>
        We have included other relevant features such as access to the <b>Wikipedia summary </b>of the crop predicted, live access to government owned 24x7 <b>DD Kisan channel</b> and a reference to the current <b>market price</b> of a commodity
    </p>
    <p>We would subsequently be adding more features to our application. Until then....</p>

    <h1 style={{fontStyle:'italic',textAlign:'center',fontWeight:'bolder'}}>Jay Jawaan !! Jay Kisaan !! Jay Vigyan</h1>
    <p style={{textAlign:"right",fontStyle:'italic',fontSize:'20px'}}>Atal Bihari Vajpayee</p>
  </div> 
  </div>
        </>
    )
}
export default intro