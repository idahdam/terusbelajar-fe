import React from "react";
import { ProductType } from "../../../components";
import { SectionThreeCard } from "./styles";

const datas = [
  {
    title: "Lorem Ipsum Sit",
    body: "Lorem Ipsum Sit",
    register: "https://google.com",
    benefitsData: [
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
    ],
  },
  {
    title: "Lorem Ipsum Sit",
    body: "Lorem Ipsum Sit",
    register: "https://google.com",
    benefitsData: [
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
    ],
  },
  {
    title: "Lorem Ipsum Sit",
    body: "Lorem Ipsum Sit",
    register: "https://google.com",
    benefitsData: [
      {
        logo: "",
        benefitsHeader: "Lorem Ipsum Sit",
        benefitsBody: "Condimentum leo tincidunt malesuada enim, sagittis.",
      },
    ],
  },
];

const SectionThree = () => {
  return (
    <>
      <SectionThreeCard>
        {datas.map((item, index) => {
          return <ProductType title={item.title} body={item.body} benefitsData={item.benefitsData} key={index} />;
        })}
      </SectionThreeCard>
    </>
  );
};

export default SectionThree;
