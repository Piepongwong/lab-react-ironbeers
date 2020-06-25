import Axios from "axios";
import qs from "qs"; 

const axios = Axios.create({
    baseURL: 'https://ih-beers-api.herokuapp.com/auth/',
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const signup = (user)=>{
    debugger
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user) // using qs to put the js object into the right format
    })
    .then((response)=> {        
        setUser(response.data);
    })
}

export const setUser = (user)=> {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user)=> {
    return JSON.parse(window.localStorage.getItem("user"));
}
