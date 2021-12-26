import { gatewayHelper } from "../utils";

const getAboutUs = async () => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "about-us?populate[imageText][populate]=*&populate[aboutUsItems][populate]=*&populate[bottom][populate]=*",
    body
  );
  return response;
};

export const aboutUsService = {
  getAboutUs,
};
