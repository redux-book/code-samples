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
  window.fetch = jest.fn().mockImplementation(url => {
    if (url === mockedUrl) {
      return response;
    }
    throw('Unknown URL: ' + url);
  });

export const mockFetch = (mockedUrl, status, data) =>
  handleResponse(
    mockedUrl,
    Promise.resolve(mockResponse(status, null, data)));

export const mockFetchError = (mockedUrl, state, error) =>
  handleResponse(
    mockedUrl,
    Promise.reject(mockResponse(state, error, '{}')));
