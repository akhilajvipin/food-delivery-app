import React, { useContext,  useEffect,  useState } from 'react'
import './PlaceOrdercss.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';


const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url}  = useContext(StoreContext);
  console.log(cartItems);
  
  const [data,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(event)=>{
    const name = event.target.name;
    const value = event.target.value

    setData(data=>({...data,[name]:value}))
    
  }
  console.log(data);
  



  const placeOrder = async(event)=>{
    event.preventDefault();
    let orderItems =[];
    food_list.map((item)=>{

      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }

    })
    console.log(orderItems);

    
    let orderedData ={
      items:orderItems,
      address: data,
      amount:getTotalCartAmount()+2,

    }


    let response = await axios.post(url+"/api/order/place",orderedData,{headers:{token}})
    console.log(response);
    
   if(response.data.success){
    const {session_url}= response.data;
    window.location.replace(session_url)
   }
   else{
    alert('Error')
   }
  }


  return (
    <form onSubmit={placeOrder} className='place-order'> 
    <div className='place-order-left'>
      <p className='title'>Delivery Information</p>
      <div className="multi-fieds">
        <input  name="firstname" onChange={onChangeHandler} value={data.firstname} type="text" placeholder='First name' />
        <input  name="lastname" onChange={onChangeHandler} value={data.lastname} type="text" placeholder='Last name' />
      </div>

      <input  name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
      <input  name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
      <div className="multi-fieds">
        <input  name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
        <input  name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
      </div>
      <div className="multi-fieds">
        <input  name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zipcode' />
        <input  name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
      </div>
      
    <input name="phone" onChange={onChangeHandler} value={data.phone} type="text"  placeholder='Phone'/>

    </div>
    <div className='place-order-right'>

    <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}$</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2}$</p>
            </div>
            <hr/>

            <div className="cart-total-details">
              <b>Total</b>
              <b>{ getTotalCartAmount()===0?0:getTotalCartAmount()+2}$</b>
            </div>
            <hr/>
          </div>
          <button  type='submit'>Proceed To Payment</button>
        </div>
      
    </div>
      
    </form>
  )
}

export default PlaceOrder


