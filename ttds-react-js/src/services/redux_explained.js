// REDUX - State Management
// 1. Observe Changes to your web app & Respond to the changes from any part of the website
// >> Publishing Events (Dispatch Events)
// >> Subscribing to Events (Response)

// Create Ecosystem/Platform Publishing-Subscribing is possible

// 1. Store (redux store)
// 2. Reducer (event dispatcher & state updater)

//One Off Steps (1-7)
// step one: create store
import { createStore } from "redux";
let store=createStore()

// step two: create reducer
let reducer=(state,payload)=>{

}

// step three: link up store & reducer
store=createStore(reducer)

//step four: initialise the store
const initState={
    isLoading:false
}

//step five: link up init state and reducer
reducer=(state=initState,payload)=>{

}

//step six: define my events
reducer=(state=initState,payload)=>{
    if(payload.type==="loading"){

    }
    else{

    }
}

//step seven: update the state
reducer=(state=initState,payload)=>{
    if(payload.type==="loading"){
        state.isLoading=true
        alert(payload.params)
    }
    else{
        state.isLoading=false
    }
}

//Dynamic Steps (8-10)
// step eight: publish event
store.dispatch({
    type:"loading"
})
store.dispatch({
    type:"loading_with_param",
    params:"This is from the event"
})

// step nine: subscribe
store.subscribe(()=>{

})

// step ten: fetching current state
store.subscribe(()=>{
    var state=store.getState()
})
