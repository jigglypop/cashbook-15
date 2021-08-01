export const createStore = <IState>(initialState: IState, reducer: any) => {
  let state = initialState;
  const events: any = {};
  const subscribe = (id: string, callback: () => void) => {
    events[id] = callback;
  };
  const publish = () => {
    for (const id of Object.keys(events)) {
      const component = document.getElementById(id);
      if (component) {
        events[id]();
      } else {
        delete events[id];
      }
    }
  };

  const dispatch = (action: any) => {
    state = reducer(state, action);
    publish();
  };

  const getState = () => state;

  return {
    getState,
    subscribe,
    dispatch,
  };
};
