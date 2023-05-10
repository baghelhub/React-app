import React, { useState } from 'react'


export default function Textform(props) {

    const ChangeText = () => {

        setText("Amit Baghel here")
    }
    const touppercasetext = () => {

         let newtext = text.toUpperCase();
         setText(newtext);
    }
    const tolowercasetext = () => {

         let newtext = text.toLowerCase();
         setText(newtext);
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
                <button className="btn btn-primary" onClick={ChangeText}>Change Text</button>
                <button className="btn btn-primary" onClick={touppercasetext}>UpperCase Text</button>
                <button className="btn btn-primary" onClick={tolowercasetext}>LowerCase Text</button>
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
