import React from 'react';

export default function PdfComp({ file }) {

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <object data={file} type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href={file}>to the PDF!</a></p>
      </object>
    </div>
  );
}