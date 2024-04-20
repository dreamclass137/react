import React, { useState } from 'react'

const Register = () => {
    function send() {
        const name = document.getElementById("name");
        alert(`welcome ${name.value}`);
    }

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
    return (
        <>
            <h1>Register</h1>
            <div><input type="text" placeholder="enter name" id="name" /></div>
            <button onClick={send}>Sign-Up</button>

            <div className="card flexs">
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
        </>

    )
}

export default Register