const WS_ROOT = "ws://echo.websocket.org/";

const SOCKET_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};

const wsMiddleware = ({ dispatch }) => next => {

  const websocket = new WebSocket(WS_ROOT);

  Object.assign(websocket, {
    onopen() {
      active = true;
      dispatch(wsConnected())
    },

    onclose() {
      active = false;
      dispatch(wsDisconnected())
    },

    onerror(error) {
      console.log(`WS Error: ${ error.data }`);
    },

    onmessage(event) {
      const message = JSON.parse(event.data);

      Object.assign(message, { meta: { fromWebsocket: true }});

      dispatch(message);
    }
  });

  return action => {
    if (websocket.readyState === SOCKET_STATES.OPEN &&
      action.meta &&
      action.meta.websocket) {

      // Remove action metadata before sending
      const cleanAction = Object.assign({}, action, {
        meta: undefined
      });
      websocket.send(JSON.stringify(cleanAction));
    }

    next(action);
  };
};

const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log(`Action: ${ action.type }`, action);

  next(action);
};