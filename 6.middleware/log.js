const logMiddleware = ({ getState }) => next => action => {
  console.log('State before reducers have run:', getState());

  console.log('Action:', action);
  next(action);

  console.log('State after reducers have run:', getState());
};
