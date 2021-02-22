export const apiCall = async () => {
  const sightingsResponse = await fetch("localhost:5000/api/v1/reports");
  if (sightingsResponse.status >= 200 && sightingsResponse.status <= 299) {
    const responseJson = await sightingsResponse.json();
    return responseJson;
  } else {
    console.log(`Error! Code: ${sightingsResponse}`);
    return sightingsResponse.status;
  }
};
