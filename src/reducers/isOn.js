const isOn = (state = false, action)=>{
    switch (action.type){
        case "toggle":
            return !state
        default:
            return state
    }
}

export default isOn;