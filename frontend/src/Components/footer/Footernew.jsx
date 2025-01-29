import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './footer.css'

const Footernew = () => {
  return (
    <div>
         <div className='footer' id='footer'>
        <div className="footer-content">
         <div className="footer-content-left">
        <img style={{width:'100px'}} src="https://i.pinimg.com/280x280_RS/d9/9a/b2/d99ab2f6ec58711e918e1688fc3e650b.jpg" alt="" />
        {/* <p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odit deleniti perspiciatis consequuntur. Aperiam eos ad iusto possimus animi quod obcaecati quis facere omnis cum, commodi quo nam saepe? Repellendus?</p> */}
            
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon}alt="" />

            </div>
            </div>
         <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
                
             </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9856783456</li>
                <li>delivery@gmail.com</li>
            </ul>
                </div>
        </div>

      
    </div>
      <hr/>
      <p className='footer-copyright'> CopyRight 2024</p>
    </div>
  )
}

export default Footernew
