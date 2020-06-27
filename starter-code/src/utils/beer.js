import axios from "axios";

export const getSingleBeer = (id) => {
    debugger
    return axios({
        url: "https://ih-beers-api.herokuapp.com/beers",
        method: "GET",
        withCredentials: true
        })
        .then(response => {
            let beers = response.data;
            let beer = beers.find((oneBeer)=> oneBeer._id === id);
            return beer;
        })
        .catch((error)=>{
            return error;
        });
}

