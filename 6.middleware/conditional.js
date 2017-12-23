const middleware = [apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(measureMiddleware);
} else{
  middleware.push(analyticsMiddleware);
}

const store = createStore(reducer, applyMiddleware(...middleware));
