import React from "react";
import { Document, Page } from "@react-pdf/renderer";

function MyDocument(props) {
  const { name, age } = props;
  return (
    <Document>
      <Page>
        <div>{name}</div>
        <div>{age}</div>
      </Page>
    </Document>
  );
}

export default MyDocument;
