import React from "react";
import { getReferenceList } from "../lib/data";
import { RichText } from "@graphcms/rich-text-react-renderer";

export const getServerSideProps = async () => {
  const data = await getReferenceList();
  return {
    props: {
      data,
    },
  };
};

const Referenzen = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Hier stehen Referenzen</h1>
      {data.references.map((e, index) => {
        return <RichText key={index} content={e.description.json} />;
      })}
    </div>
  );
};

export default Referenzen;
