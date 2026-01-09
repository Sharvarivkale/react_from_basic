import Btn from './components/btn'
import styles from "./App.module.css"
import Display from './components/display';
import Text from './components/inputtext';
import { useState } from 'react';


function App() {
  let [displaytext,calmethod]=useState("");
  let afterclick=(buttonText) => {
    if(buttonText==='c'){
      calmethod("")
    }
    else if(buttonText==='='){
      displaytext=eval(displaytext)
      calmethod(displaytext)
    }
    else{
      let newmodify=displaytext+buttonText;
      calmethod(newmodify)
    }
  };

  return <div className={styles.calci}>
    <Display className={styles.tittle}></Display>
    <Text className={styles.display} displaytext={displaytext}></Text>
    <Btn className={styles.btn} onButtonClick={afterclick}></Btn>
  
  </div>
}

export default App;
