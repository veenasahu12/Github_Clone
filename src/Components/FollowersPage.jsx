import React from 'react'
import { useSelector } from 'react-redux'
import "./All.css"

const FollowersPage = (props) => {

    const followers_data = useSelector(state =>{return JSON.parse(localStorage.getItem("followers")) || state.followers_data});
    return (
        <div>
        <div className="mapping-data">
        {followers_data?.map((e) => {
          return (
            <a href={e.html_url}  key={e.id} className="data-item">
              <img className='userimg' src={e.avatar_url} />
              <h3>Name : {e.login}</h3>
            </a>
          );
        })}
      </div> 
        </div>
    )
}

export default FollowersPage
