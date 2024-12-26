import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PdfComp({ file }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {
          Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => (
            <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
          ))
        }
      </Document>
    </div>
  );
}