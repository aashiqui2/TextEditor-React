import React, { useState } from "react";

export default function About() {

// this state Hooks is for changing the color
    const [myStyle,setStyle]=useState({
        padding:"1.5rem",
        color:'red',
        backgroundColor:'cornflowerblue'
    })

    // this state Hooks is for changing the button text and button classname
    const[buttonTxt,setButtonText]=useState("Enable DarkMode")
    const[btncolor,setbtnClass]=useState("btn btn-primary")



    // you can do like this by creating two button with onclick function 
    // const toDarkMode=()=>{
    //     let newStyle={
    //         color:"white",
    //         backgroundColor:"black",
    //         padding:"1.5rem"
    //     }
    //     setStyle(newStyle);
    // }

    // const toLightMode=()=>{
    //     let newStyle={
    //         padding:"1.5rem",
    //         color:'red',
    //         backgroundColor:'cornflowerblue'
    //     }
       
    //     setStyle(newStyle);
    // }


    // you can also do like this for changing the button class and button text in a single state
    const toDarkMode=()=>{
        if(myStyle.color==='red'){
            setStyle({
                color:"white",
                backgroundColor:"black",
                padding:"1.5rem",
            })
            setButtonText("Enable LightMode")
            setbtnClass("btn btn-warning")
        }
        else{
            setStyle({
                padding:"1.5rem",
                color:'red',
                backgroundColor:'cornflowerblue'
            })
            setButtonText("Enable DarkMode")
            setbtnClass("btn btn-primary")
        }
    }

    



    return (
        <div className="container my-3" style={myStyle}>
            <h1 className="my-3">About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            {/* this is for first way by creating se */}
            {/* <button className="btn btn-dark mx-3 " onClick={toDarkMode}>Enable DarkMode</button> */}
            {/* <button className="btn btn-primary mx-3 " onClick={toLightMode}>Enable LightMode</button> */}

            <button className={btncolor} onClick={toDarkMode}>{buttonTxt}</button>
            </div>
        </div>
    );
}
