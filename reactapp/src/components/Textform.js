import React, { useState } from 'react'


export default function Textform(props) {

    const ChangeText = () => {

        setText("Amit Baghel here")
    }
    const touppercasetext = () => {

         let utext = text.toUpperCase();
         setText(utext);
    }
    const tolowercasetext = () => {

         let ltext = text.toLowerCase();
         setText(ltext);
    }
    const cleartext = () => {

        let clstext = "";
        setText(clstext);
   }

    const textonchaneg = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('You can this text click on button');

    return (
        <>
        <div className='container my-3'>
            <div className="col-md-5">
                <h2> {props.head}</h2>
                <h3> {props.nextText}</h3>

                <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={textonchaneg} id='myBox' rows='8'></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={ChangeText}>New Text</button>
                <button className="btn btn-primary mx-1" onClick={touppercasetext}>Caps Text</button>
                <button className="btn btn-primary mx-1" onClick={tolowercasetext}>lcase Text</button>
                <button className="btn btn-primary mx-1" onClick={cleartext}>Clear</button>
               
               </div>
               </div>
               <div className='container my-5'>
                 <h4>Your Summery Here</h4>
                 <p>{text.split(" ").length} words  {text.length} characters</p>
                 <p>{0.008 * text.split(" ").length} Minute Read</p>
                 <h1> Preview</h1>
                 <p>{text}</p>

             </div>
        </>
    )
}
