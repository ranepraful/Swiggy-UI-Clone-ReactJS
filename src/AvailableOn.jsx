import React from 'react'
import googlePlay from './assets/icon-GooglePlay.webp'
import appStore from './assets/app-store.webp'
import main1 from './assets/main1.webp'
import main2 from './assets/main2.webp'
import './AvailableOn.css'
function AvailableOn() {
  return (
    <div className='availableon-container'>
      <div className='_qwert'>
        <div className='availableOn-header'>Restaurants in your pocket</div>
        <div className='availableOn-subheader'>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>
        <div className='availableon'>
          <img height='50' src={googlePlay} alt="" />
          <img height='50' src={appStore} alt="" />

        </div>

      </div>

      <div className='main1' style={{width: '30%'}}>
        <img width="348px" height="489px" src={main1} alt="" />
        

      </div>

      <div className='main2' style={{width: '30%', height: '100%', paddingTop: '70px'}}>
        <img width="348px" height="489px"  src={main2} alt="" />
      </div>

    </div>
  )
}

export default AvailableOn