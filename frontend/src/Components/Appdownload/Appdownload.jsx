import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience download <br/><span style={{color:'grey'}}>Foody</span> </p>
        <div className='app-download-platform'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />


        </div>
      
    </div>
  )
}

export default Appdownload
