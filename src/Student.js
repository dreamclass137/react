import styles from './App.module.css';
const Student = (props) => {
    const myStyle={
        color:"white",
        backgroundColor:"#1e1e60",
        padding:"10px"
    }
    return (
        <>
          
            <p style={myStyle}>welcome  {props.name} to Dream Class</p>
            <p><b>Place</b>: {props.place}</p>
        </>
    );
}

export default Student;