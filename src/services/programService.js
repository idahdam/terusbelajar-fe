import { gatewayHelper } from "../utils";

const getPrograms = async () => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "programs?populate[hero][populate]=*&populate[bottom][populate]=*&populate[imageText][populate]=*&populate[benefits][populate]=*&populate[faq][populate]=*&populate[programCard][populate]=programCardItem.image",
    body
  );
  return response;
};

const getProgram = async (id) => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    `programs/${id}?populate[hero][populate]=*&populate[bottom][populate]=*&populate[imageText][populate]=*&populate[benefits][populate]=*&populate[faq][populate]=*&populate[programCard][populate]=programCardItem.image`,
    body
  );
  return response;
};

export const programService = {
  getPrograms,
  getProgram,
};
