import { useState } from 'react';
import './App.css';
import PdfComp from './PdfComp';
import bga from './pdfs/Big-Data-Assignment.pdf'
import dma from './pdfs/Data-Mining-Assignment.pdf'
import pa from './pdfs/Python-Algo.pdf'
import pf from './pdfs/Python-Flow.pdf'
import pe from './pdfs/Python-Execution.pdf'
import aa from './pdfs/AI-Assignment.pdf'
import sca from './pdfs/Soft-Computing-Assignment.pdf'
import sce from './pdfs/Soft-Computing-Execution.pdf'
import img1 from "./pdfs/2.0.jpg"
import img2 from "./pdfs/2.1.jpg"
import img3 from "./pdfs/2.2.jpg"
import img4 from "./pdfs/2.3.jpg"
import img5 from "./pdfs/3.0.jpg"
import img6 from "./pdfs/3.1.jpg"
import img7 from "./pdfs/3.2.jpg"
import img8 from "./pdfs/3.3.jpg"

function App() {
  const [file, setFile] = useState(bga);
  const [otherClicked, setOtherClicked] = useState(false);

  function onChangeHandler(filePath){
    setOtherClicked(false);
    setFile(filePath);
  }
  return (
    <div className="App">
      <div className="btn-container">
        <button className='btn' onClick={()=>onChangeHandler(bga)}>Big Data Analytics</button>
        <button className='btn' onClick={()=>onChangeHandler(dma)}>Data Mining</button>
        <button className='btn' onClick={()=>onChangeHandler(pa)}>Python Algorithm</button>
        <button className='btn' onClick={()=>onChangeHandler(pf)}>Python Flowchart</button>
        <button className='btn' onClick={()=>onChangeHandler(pe)}>Python Execution</button>
        <button className='btn' onClick={()=>onChangeHandler(aa)}>Artificial Intelligence</button>
        <button className='btn' onClick={()=>onChangeHandler(sca)}>Soft Assignment</button>
        <button className='btn' onClick={()=>onChangeHandler(sce)}>Soft Execution</button>
        <button className='btn' onClick={()=>setOtherClicked(true)}>Soft Computing 2,3</button>
      </div>

      {
        !otherClicked
        &&
        <PdfComp file={file} />
      }

      {
        otherClicked
        &&
        <div className='img-container'>
          <img src={img1} alt='img' />
          <img src={img2} alt='img' />
          <img src={img3} alt='img' />
          <img src={img4} alt='img' />
          <img src={img5} alt='img' />
          <img src={img6} alt='img' />
          <img src={img7} alt='img' />
          <img src={img8} alt='img' />
        </div>
      }
    </div>
  );
}

export default App;
