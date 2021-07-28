const HTTP_METHOD = {
  GET(token?: string) {
    return {
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    };
  },
  POST(data: any, token?: string) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  PUT(data: any, token?: string) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  DELETE(token?: string) {
    return {
      method: "DELETE",
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    };
  },
};

export { HTTP_METHOD };
