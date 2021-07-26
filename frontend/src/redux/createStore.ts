
export const createStore = <IState>(initialState: IState, reducer: any) => {
    let state = initialState
    const events: any = []
    const subscribe = (callback: () => void) => {
        events.push(callback)
    }
    const publish = () => {
        events.map((cb: any) => cb())
    }

    const dispatch = (action: any) => {
        state = reducer(state, action)
        publish()
    }

    const getState = () => state

    return {
        getState,
        subscribe,
        dispatch
    }
}

