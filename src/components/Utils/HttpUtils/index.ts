//  const baseUrl = "http://localhost:3000/api";
const baseUrl = "https://pbdesigns-server.onrender.com/api"
// const baseUrl = "https://35.174.173.245:3500/api"


export const HttpGetCallerWhole = async (endpoint: string, headers: any) => {
  try {
    const savedUserResponse = await fetch(`${baseUrl}/${endpoint}`, {
      method: "GET",
      headers: headers,
    });

    const responseData = await savedUserResponse.json();

    return responseData;
  } catch (err) {
    return err;
  }
};

export const HttpOTHERcaller = async (
  endpoint: string,
  headers: any,
  method: string,
  body: any
) => {
  try {
    const savedUserResponse = await fetch(`${baseUrl}/${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });

    const responseData = await savedUserResponse.json();

    return responseData;
  } catch (err) {
    return err;
  }
};

export const HttpOTHERcallerForm = async (
  endpoint: any,
  headers: any,
  method: string,
  body: any
) => {
  try {
    const savedUserResponse = await fetch(`${baseUrl}/${endpoint}`, {
      method: method,
      headers: headers,
      body: body,
    });

    const responseData = await savedUserResponse.json();

    return responseData;
  } catch (err) {
    return err;
  }
};

export default HttpGetCallerWhole;
