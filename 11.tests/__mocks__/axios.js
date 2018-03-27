let mocked = null;

const noMocks = () => {
  throw('No request mocked');
};

export const mockResponse = (status, statusText, data) => ({
  data,
  status,
  statusText
});

const handleResponse = (mockedUrl, response) =>
  mocked = jest.fn().mockImplementation(({ url }) => {
    mocked = null;

    if (url === mockedUrl) {
      return response;
    }
    throw('Unknown URL: ' + url);
  });

export const clearMock = () => mocked = null;

export const mockRequest = (mockedUrl, status, data) =>
  handleResponse(
    mockedUrl,
    Promise.resolve(mockResponse(status, null, data)));

export const mockRequestError = (mockedUrl, state, error) =>
  handleResponse(
    mockedUrl,
    Promise.reject(mockResponse(state, error, '{}')));

export default {
  request: (params) => (mocked || noMocks)(params),
  get: (url) => (mocked || noMocks)({ url }),
  name: 'mock'
};