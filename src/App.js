import styles from './App.module.css';
import './App.css';
import Student from './Student';
import Register from './Register';
import City from './City';
import Emp from './Emp';

//anonyms
//const App=function(){
//Arrow function 
//const App=()=>{
function App() {
  const city = <b>surat</b>

  return (
    <>
      <div className="conatiner">
        <h1 id="first">Dream class</h1>
        <p className={styles.abc}>Computer-IT Institute</p>
        <h1 id={styles.box}>Employee Info</h1>
        <hr />
        <Emp/>
        <hr />

        
        {/* <p> Live in {city}</p> */}
        <h1 id={styles.box}>Student Info</h1>
        <hr />
        <Student name="alex" place="aus" />
        <Subject/>
        <hr />
        <Student name="zoha" place="west" />
        <hr />
        <Student name="kavya" place="newz" />
        <hr />
        <Register/>

        {/* use city componants here */}
        <City/>
      </div>
    </>

  );
}



const Subject=()=>{
  return "Java Script"
}
export default App;
