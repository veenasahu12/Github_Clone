import * as types from './actionType';
import axios from 'axios'

const Getapi = (payload)=>(dispatch)=>{
    dispatch({type:types.API_REQUEST})
    return axios
    .get(`https://api.github.com/users/${payload}/repos`)
    .then((r)=>{
        dispatch({type:types.API_SUCCESS,payload:r.data})
        return types.API_SUCCESS
    })
    .catch((err)=>{
        dispatch({type:types.API_FAILURE,payload:err})
        return types.API_FAILURE
    })
}

const getfollowerapi = (payload) => (dispatch) => {
    dispatch({type:types.FOLLOWERS_API_REQUEST})
    return axios
    .get(`https://api.github.com/users/${payload}/followers`)
    .then((r)=>{
        dispatch({type:types.FOLLOWERS_API_SUCCESS,payload:r.data});
        localStorage.setItem('followers',JSON.stringify(r.data))
        return types.FOLLOWERS_API_SUCCESS
    })
    .catch((err)=>{
        dispatch({type:types.FOLLOWERS_API_FAILURE,payload:err})
        return types.FOLLOWERS_API_FAILURE
    })

}

export {Getapi, getfollowerapi}
