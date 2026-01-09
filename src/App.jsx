import Btn from './components/btn'
import styles from "./App.module.css"


function App() {
  return <div className={styles.calci}>
    <center className={styles.tittle}>Calculator</center>
    <input type="text" className={styles.display}/>
    <Btn className={styles.btn}></Btn>
  </div>
}

export default App;
