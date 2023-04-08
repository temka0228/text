// props, module.css
//  engiin function gaas arai baga bicigelltei gj uzne ghde
//  uildel zarim ng zuilese hyzgaarlaldmal

import Header from './components'
import React from "react"; 
import ArrowFunction from "./components/props";
import zurag1 from "./assets/image/14.jpeg"
import "./App.module.css"

// props, module.css
var getM = new Date().getMonth();
var getD = new Date().getDate();
var getA = new Date().getHours();
var toCompile = getM.toString()
var toCompile2 = getD.toString()
var toCompile3 = getA.toString()
function App() {
  return (
     <div>
        <ArrowFunction date={"0" + toCompile + "/" + "0" + toCompile2 + "/" + toCompile3} image={zurag1} tittle="ene propsooos damjeelaggdaj baigaa utga damjuulalt" des="ene bol des propsoos damjigdaj baigaa utga" />
        <ArrowFunction date={toCompile} tittle="gffgdfgdfsgdfsgdfs" />
        <ArrowFunction tittle="ene bol 3 dahi components" />
        <Header/>
     </div>
  );
}
export default App;
