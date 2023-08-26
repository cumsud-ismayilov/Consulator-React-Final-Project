import React from "react";
import "../Project/Project.scss";
import Breadcumb from "../../components/Breadcumbgallery/Breadcumb";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";
const Project = () => {
  return (
    <main>
      <BreadCumbArea header="Projects" tittle1="Home /" tittle2="Projects" />
      <Breadcumb />
    </main>
  );
};

export default Project;
