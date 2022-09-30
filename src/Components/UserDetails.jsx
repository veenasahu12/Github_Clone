import React from 'react'
import { useLocation } from 'react-router-dom'

const UserDetails = (props) => {
    
    const {state} = useLocation();
    console.log(state , "dfghjk")

    return (
        <div className='details'>
            <img className="userimg" src='https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg' alt=''/>
            <h2>Repository Name : {state?.name}</h2>
            <h2>created_at : {state?.created_at}</h2>
            <h3>Language : {state?.language}</h3>
        </div>
    )
}

export default UserDetails
