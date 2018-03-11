const canceled = {};

const apiMiddleware = ({ dispatch }) => (next) => (action) => {

  const handleResponse = (response) => {
    if (action.cancelable && canceled[action.cancelable]) {
      return;
    }

    dispatch({ type: action.payload.next.SUCCESS, payload: response.data })
  };

  if (action.type === API_REQUEST) {
    axios.get(action.payload.url)
      .then(handleResponse);

    dispatch({ type: action.payload.next.PENDING });
  }

  if (action.type === CANCEL_API_REQUEST) {
    canceled[action.id] = true;
    setTimeout(() => delete canceled[action.id], 5000);
  }

  return next(action);
};
