import { createStore } from "../createStore"

interface ICount {
    toggle: boolean
    counter: number
}

const initialState: ICount = {
    toggle: false,
    counter: 0
}


const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1            
            }
        default:
            return state
    }
}

export const increase = () => ({
    type: "INCREASE"
})
export const decrease = () => ({
    type: "DECREASE"
})

export const count = createStore<ICount>(initialState, reducer)

