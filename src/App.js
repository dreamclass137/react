import './App.css';

//anonyms
//const App=function(){
//Arrow function 
//const App=()=>{
function App() {
  const city = <b>surat</b>


  return (
    <>
      <div className="conatiner">
        <h1>Dream class</h1>
        <p> Live in {city}</p>
        <h1>Student Info</h1>
        <hr />
        <Student name="alex" place="aus" />
        <hr />
        <Student name="zoha" place="west" />
        <hr />
        <Student name="kavya" place="newz" />
        <hr />
      </div>
    </>

  );
}

const Student = (props) => {

  return (
    <>
      <h3>Name : {props.name}</h3>
      <h3>Education: {props.place}</h3>
    </>
  );
}
export default App;
