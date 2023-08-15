import React from 'react'
import Aboutus from './aboutus';
import Reachus from './reachus';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div style={{display:'flex', alignItems:'center', flexDirection:'column' , justifyContent:'center'}}>
    <div className="img-div">

    </div>
    
    <article>"Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet.” – Tristram Stuart</article>
    </div>
    <Aboutus/>
    <Reachus/>
    <div style={{display:'grid', placeItems:'center', margin:'1%'}}>
    <div className="demo">
      
      <h3>By donating to "Say No to Food Waste," you can help us make a difference in the fight against food waste and hunger. Every donation, big or small, makes a difference. Your generosity will help us provide nutritious food to those in need and reduce the impact of food waste on the environment.</h3>
    </div>
    </div>
    <div className='btn-div'>
    <Link to='/donate' className='donatebtn'>Donate Us</Link>
    </div>
    </>
  )
}

export default Home
