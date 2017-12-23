const measureMiddleware = () => next => action => {
  console.time(action.type);
  next(action);
  console.timeEnd(action.type);
};
