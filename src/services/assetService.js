import { gatewayHelper } from "../utils";

const getAsset = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "asset?populate=logo", body);
  return response;
};

export const AssetService = {
  getAsset,
};
