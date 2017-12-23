const nullMiddleware = param => () => next => action => {
  next(action !== null ? action : { type: param || 'UNKNOWN' });
};
