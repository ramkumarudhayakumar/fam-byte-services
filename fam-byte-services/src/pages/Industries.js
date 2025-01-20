import React from "react";
import IndustriesWelcome from "./industries/IndustriesWelcome";
import IndustriesWork from "./industries/IndustriesWork";

function Industries() {
  const industries = [
    {
      name: "Healthcare",
      description: "Digital solutions for modern healthcare challenges",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Finance",
      description: "Innovative fintech solutions and banking systems",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Retail",
      description: "E-commerce and retail technology solutions",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Education",
      description: "EdTech solutions for the future of learning",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing and Industry 4.0 solutions",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Logistics",
      description: "Supply chain and logistics management systems",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <>
      <IndustriesWelcome />
      <IndustriesWork />
    </>
  );
}

export default Industries;
