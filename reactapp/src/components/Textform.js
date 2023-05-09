import React, {useState} from 'react'

export default function Textform(props) {

    const [email, setEmail]  = useState('Enter name here');
    const [name, setName]  = useState('Enter email here');
    

    return (
    <div>

<div className="col-md-5">
    <h1> {props.heading}</h1>
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" value={email} id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" value={name} id="exampleInputPassword1" placeholder="enter the name" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}
