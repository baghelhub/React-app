import React, { useState } from 'react'


export default function Textform(props) {

    const handleOnUpclick = () => {
        setText("Amit Here")
    }
    
    
    const textonchaneg = (event) => {
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter name here');
    return (
        <div>

            <div className="col-md-5">
                <h1> {props.head}</h1>
                <form>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>

                        <input type="text" className="form-control" value={text} onChange={textonchaneg} id="exampleInputPassword1" placeholder="enter the name" />

                    </div>
                    <button className="btn btn-primary" onClick={handleOnUpclick}>Convert to UpperCase</button>
                </form>
            </div>
        </div>
    )
}
