const wsConnected = () => ({
  type: 'WS_CONNECTED'
});

const wsDisconnected = () => ({
  type: 'WS_DISCONNECTED'
});

const chatMessage = (text, global = true) => ({
  type: 'CHAT_MESSAGE',
  payload: text,
  meta: {
    websocket: global
  }
});

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHAT_MESSAGE':
      return state.concat({ text: action.payload, meta: action.meta })
  }
  return state;
};

const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(logMiddleware, wsMiddleware)
);

$(loadUI);