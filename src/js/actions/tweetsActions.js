import axios from 'axios'

export function fetchTweets(){
    return function(dispatch){
        axios.get('http://beta.json-generator.com/api/json/get/EkZQj18RG')
        .then((response)=>{
            dispatch({type:"FETCH_TWEETS_FULFILLED",payload:response.data})
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type:"FETCH_TWEETS_REJECTED", payload:err})
        })
    }
}
