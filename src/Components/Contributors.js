import React from "react";
import Typed from "react-typed";

const Contributors = () => {
    return (
        <div className = "contributor-wraper">
            <div className = "contributor-info">
                <h1>Contributors</h1>
            <Typed
                className = "typed-text"
                strings ={["Sumit Chouhan" , "Vishesh Verma" , "Souvik Karmakar" , "Aman Guleria"]}
                typeSpeed = {70}
                backSpeed = {60}
                loop
            />
            </div>
        </div>
    )
}

export default Contributors
