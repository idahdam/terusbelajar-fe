import { gatewayHelper } from "../utils";

const getHome = async () => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "home?populate[hero][populate]=*&populate[imageText][populate]=*&populate[programHome][populate]=*&populate[faq][populate]=*&populate[bottom][populate]=*&populate[reviewsHome][populate]=*",
    body
  );
  return response;
};

export const homeService = {
  getHome,
};
