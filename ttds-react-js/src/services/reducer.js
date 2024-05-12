const initState={
    isUserLoggedIn:false,
    isLoadingApp:true,
    loginNote:"This is a note"
}

const rootReducer = (state= initState,payload)=>{
    //path - what do you want to change
    //Dependant - what is needed to perform that change
    switch(payload.type){
        case "loadingPage":     
            state.isLoadingApp=true
            state.loginNote=initState.loginNote
            break
        case "stopLoadingPage":
            state.isLoadingApp=false
            state.loginNote=initState.loginNote
            break
        case "LoginNote":
            state.loginNote="Note has been updated"           
            state.isLoadingApp=initState.isLoadingApp
            break
        default:
            break
    }
    return state
}
export default rootReducer