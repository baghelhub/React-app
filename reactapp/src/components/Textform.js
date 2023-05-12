import React, { useState } from 'react'


export default function Textform(props) {

    const ChangeText = () => {

        setUpdate("Amit Baghel here")
    }
    const touppercasetext = () => {

        let utext = text.toUpperCase();
        setUpdate(utext);
    }
    const tolowercasetext = () => {

        let ltext = text.toLowerCase();
        setUpdate(ltext);
    }
    const cleartext = () => {

        let clstext = "";
        setUpdate(clstext);
    }

    const textonchaneg = (event) => {
        setUpdate(event.target.value)
    }

    const [text, setUpdate] = useState('If You want can change this text click on Button');

    return (
        <>
            <div className='container my-3'>
                <div className="col-md-5">
                    <h2> {props.text}</h2>
                    <h3> {props.nextText}</h3>

                    <div className='mb-3'>
                        <textarea className='form-control' value={text} onChange={textonchaneg} id='myBox' bg-4 rows='8'></textarea>
                    </div>
                    <button className="btn btn-secondary mx-1" onClick={ChangeText}>New Text</button>
                    <button className="btn btn-success mx-1" onClick={touppercasetext}>Caps Text</button>
                    <button className="btn btn-warning mx-1" onClick={tolowercasetext}>lcase Text</button>
                    <button className="btn btn-info mx-1" onClick={cleartext}>Clear</button>

                </div>
            </div>
            <div className='container my-5' >
                <h4>Your Summery Here</h4>
                <p>{text.split(" ").length} words  {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h1> Preview</h1>
                <p>{text}</p>

            </div>
        </>
    )
}
