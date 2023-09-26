import axios from 'axios'

export const placeOrder=(token,Total)=>async(dispatch,getState)=>{

    dispatch({type:"PLACE_ORDER_REQUEST"})
    const currentUser=getState()
    try{

    }catch(error){

    }
}