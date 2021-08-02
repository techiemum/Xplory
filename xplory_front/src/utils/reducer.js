export default function reducer(state, action){
    switch(action.type){
        case "setParkList":{
            return{
                ...state,
                parkList: action.data
    }
}
case "addPark":{
    return {
        ...state,
        parkList: [action.data, ...state.itemList]
        
    }
}
case "deletePark": {
    const updatedParkList = state.parkList.filter((message)=>
    message.id !== parseInt(action.data)
    )
    return {
        ...state,
        parksList: updatedParkList
    }
}
case "setLoggedInUser": {
    return {
        ...state,
        loggedInUser: action.data
    }
}

case "setToken": {
    return {
        ...state,
        auth: {
            ...state.auth,
            token: action.data
        }
    }
}
default: return state
    }
}