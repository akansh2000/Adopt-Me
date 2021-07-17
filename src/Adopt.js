import {Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import load from './images/load.gif';

    class Adopt extends Component
    {
        constructor(){
            super();

            this.state={show:false,
            loading:true};
            
            this.toggleCheck=this.toggleCheck.bind(this);

            setTimeout(()=>this.setState({
                loading:this.state.loading=false
            }),3000);
        }

toggleCheck=()=>{
    const {show} =this.state;
    this.setState({show: !show})
}


render(){

    if(this.state.loading)
    {
      return(
        <div className='load'>
          <img className='load_img' src={load} alt='loading...' width='300px' height='300px'/>
          <h2 className='load_head'>Loading...</h2>
        </div>
      )
    }

    else{

    return(
<div className="pet">


<h1 className='register'>Registration Process</h1>
            <form className='form' onSubmit={e=>{
              e.preventDefault();
              this.toggleCheck()
              }}>
                <h3 className='general'>GENERAL DETAILS:</h3>
                <label htmlFor='First'>*First Name: </label>
                <input type='text' name='First' placeholder='First Name' className='form_field' required />
                <label htmlFor='Last'>*Last Name: </label>
                <input type='text' name='Last' placeholder='Last Name' className='form_field' required/>
                <label htmlFor='Email'>*Email-Id: </label>
                <input type='text' name='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className='form_field' placeholder='Email Id' title="Not in proper format" required />
                <h3 className='address'>ADDRESS:</h3>
                <label htmlFor='House'>*House No.: </label>
                <input type='text' name='House' placeholder='House Number' className='form_field' required />
                <label htmlFor='Street'>*Street: </label>
                <input type='text' name='Street' placeholder='Street' className='form_field' required />
                <label htmlFor='Landmark'>Landmark: (Optional) </label>
                <input type='text' name='Landmark' placeholder='Landmark' className='form_field' />
                <h3 className='identity'>IDENTITY PROOF:</h3>
                <label htmlFor='Proof'>*Choose an ID proof:</label>
                <select name='Proof' className='select' required>
                    <option value='Driving License'>Driving License</option>
                    <option value='Aadhar ID'>Aadhar ID</option>
                    <option value='PAN card'>PAN card</option>
                </select>
                <label htmlFor='File'>*Upload photo of ID proof:</label>
                <input type='file' name='File' className='file' required/>
                <input type='submit' value='Submit' className='form_fill' />
                <Link to='/Home'>
                <button className='cancel'>Cancel</button>
                </Link>
                {this.state.show && <Box />}
            </form> 
</div>

    )
            }
}
    }

    class Box extends Component{
        render(){

            return(
                <div className='checkbox'>
                    <label htmlFor='Check' className='checkbox_label' >Have you cross-checked all details?<br />If yes, check the box.</label>
                    <Link to='/Thanks'>
                        <input type='checkbox' name='Check' className='checkbox_in' />
                    </Link>
              </div>
            )
        }
    }


export default Adopt;