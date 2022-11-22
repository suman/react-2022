const defaultState = {
    data: []
}

export default function GetCounterReducer(state = defaultState, action) {
    console.log("Returned from reducer")
    switch (action.type) {
        case 'countUpdated':
            return { ...state, data: action.payload };
        default:
            console.log("something happend broooo")
            return { ...state };
    }
}