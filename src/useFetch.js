import {useState,useEffect} from 'react'
import axios from 'axios'

export const useFetch = (url) => {

    let [state,setState] = useState({data:null,loading:true})

    useEffect(()=>{
        setState({data:null,loading:true})
        axios.get(url).then(item=>{
            setState({data:item.data.results,loading:false})
        })
    },[setState])

    return state
}
