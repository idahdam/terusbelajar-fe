import { gatewayHelper } from "../utils";

const postForm = async (name) => {
  const body = {};
  const response = await gatewayHelper.http("GET", name, body);
  return response;
};

export const formService = {
  postForm,
};
