const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
const API_REQUEST        = 'API_REQUEST';
const CANCEL_API_REQUEST = 'CANCEL_API_REQUEST';

// Recipes
const FETCH_RECIPES = asyncActionType('FETCH_RECIPES');
