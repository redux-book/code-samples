import apiMiddleware from 'middleware/api';
import { mockRequest, mockRequestError } from 'test-utils';
import { API_STARTED, API_FINISHED, API, API_ERROR } from 'consts';

const data = { title: 'hello' };

const setData = data => ({
  type: 'SET_DATA',
  payload: data
});

const apiAction = () => ({
  type: API,
  payload: {
    success: setData,
    url: 'fake.json'
  }
});

describe("api middleware", () => {
  let next, dispatch, middleware, dispatchCalls, nextCalls, getState, fetch;

  const getStateMock = () => getState ? getState() : {};

  beforeEach(() => {
    getState      = null;
    next          = jest.fn();
    dispatch      = jest.fn();
    dispatchCalls = dispatch.mock.calls;
    nextCalls     = next.mock.calls;
    middleware    = apiMiddleware({ dispatch, getState: getStateMock })(next);
  });

  it('should ignore non API actions', () => {
    const sampleAction = { type: 'SAMPLE_ACTION' };

    middleware(sampleAction);

    expect(dispatchCalls.length).toBe(0);
    expect(nextCalls).toEqual([[sampleAction]]);
  });

  it('should dispatch API_STARTED', () => {
    middleware(apiAction());
    expect(dispatchCalls[0]).toEqual([{ type: API_STARTED }]);
  });

  describe('success', () => {
    beforeEach(() => mockRequest('fake.json', 200, JSON.stringify(data)));

    it('should dispatch API_FINISHED', () =>
      middleware(apiAction()).then(() =>
        expect(dispatchCalls[2]).toMatchSnapshot()));

    it('should dispatch SET_DATA', () =>
      middleware(apiAction()).then(() =>
        expect(dispatchCalls[1]).toEqual([setData(data)])));
  });

  describe('error', () => {
    beforeEach(() => mockRequestError('fake.json', 404, 'Not found'));

    it('should NOT dispatch API_FINISHED', () =>

      middleware(apiAction()).then(() =>
        expect(dispatchCalls[1][0].type).not.toBe(API_FINISHED)));

    it('should dispatch error', () =>
      middleware(apiAction()).then(() =>
        expect(dispatchCalls[1]).toMatchSnapshot()));
  });

  describe('headers', () => {
    beforeEach(() => fetch = mockRequest('fake.json', 200, JSON.stringify(data)));

    it('should set access token if in state', () => {
      getState = () => ({ accessToken: 'xx11' });

      return middleware(apiAction()).then(() => {
        expect(fetch.mock.calls[0][1].headers.get('Access-Token')).toEqual('xx11')
      });
    });

    it('should NOT set access token if NOT in state', () => {
      getState = () => ({ });

      return middleware(apiAction()).then(() => {
        expect(fetch.mock.calls[0][1].headers.get('Access-Token')).toEqual(null)
      });
    })
  });
});
