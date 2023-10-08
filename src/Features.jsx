import React from 'react'
import noMinimumOrder from './assets/no minimum order.webp'
import liveOrderTracking from './assets/live order tracking.webp'
import lightningFastDelivery from './assets/lightning fast delivery.webp'
import './Features.css'

function Features() {
  return (
    <div className='features-container'>
      <div className='features'>
        <img width="105px" height="199px" src={noMinimumOrder} alt="" className='feature-img' />
        <div className='features-header'>No minimum Order</div>
        <div className='features-desc'>Order in for yourself or for the group, with no restrictions on order value</div>
      </div>

      <div className='features'>
        <img width="105px" height="199px" src={liveOrderTracking} alt="" className='feature-img'/>
        <div className='features-header'>Live Order Tracking</div>
        <div className='features-desc'>Know where your order is at all times, from the restaurant to your doorstep</div>
      </div>

      <div className='features'>
        <img width="105px" height="199px" src={lightningFastDelivery} alt="" className='feature-img'/>
        <div className='features-header'>Lightning-Fast Delivery</div>
        <div className='features-desc'>Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
      </div>
    </div>
  )
}

export default Features