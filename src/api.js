export const apiCall = () => {
  return fetch("http://localhost:5000/api/v1/reports")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        console.log(`Error! Code: ${response}`);
        return response.status;
      }
    })
};
