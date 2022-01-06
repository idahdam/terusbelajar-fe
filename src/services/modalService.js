import { gatewayHelper } from "../utils";

const getModal = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "form-hint", body);
  return response;
};

export const modalService = {
  getModal,
};
