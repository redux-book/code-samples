export const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

const handleResponse = (mockedUrl, response) =>
  window.axios = jest.fn().mockImplementation(url => {
    if (url === mockedUrl) {
      return response;
    }
    throw('Unknown URL: ' + url);
  });

export const mockRequest = (mockedUrl, status, data) =>
  handleResponse(
    mockedUrl,
    Promise.resolve(mockResponse(status, null, data)));

export const mockRequestError = (mockedUrl, state, error) =>
  handleResponse(
    mockedUrl,
    Promise.reject(mockResponse(state, error, '{}')));
