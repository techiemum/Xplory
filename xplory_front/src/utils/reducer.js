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
        
    }
}