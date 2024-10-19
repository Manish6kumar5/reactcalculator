// import logo from './logo.svg';
import './App.css';
import style from './App.module.css';
import Button from './components/Button';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const[Calval,setCalval]=useState("7");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalval("");
    }
    else if(buttonText==='='){
      const result=eval(Calval);
      setCalval(result)
    }
    else{const newDisplayval=Calval+buttonText;
      setCalval(newDisplayval);
    }
  }
  return (
   <div className={style.calculator}>
    <Display  displayValue={Calval}/>
   <Button onButtonClick={onButtonClick}/> 
   </div>
  );
}
 
export default App;
