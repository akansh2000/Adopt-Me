import {Component } from "react";
import React from "react";


// const Adopt=(props)=>{


    // function onThanks() {

    //     console.log('In onThanks')
    //     window.location.href='/Thanks';
        
    // }

    class Adopt extends Component
    {
        constructor(){
            super();

            this.onThanks=this.onThanks.bind(this);
        }

            onThanks() {

            console.log('In onThanks')
            window.location.href='/Thanks';
            
        }
    
render(){
    return(
        // <div className='main'>
            // <h1>Registration Process</h1>
            // <form>
            //     <label htmlFor='First'>First Name</label>
            //     <input type='text' name='First' />
            // </form>
        // </div>
<div className="pet">

<h1 className='register'>Registration Process</h1>
            <form className='form' onSubmit={e=>{
              e.preventDefault();
              this.onThanks();}}>
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
                <button onClick={()=>{window.location.href='/Home'}} className='cancel'>Cancel</button>
            </form> 

</div>

    )
}
    }

// function Email_check(e) {
//     console.log(e.target.value);
//     let str=e.target.value;
//     let arr=str.split('@')
//     console.log(arr.length)
//     if(arr.length==1){
//         console.log('insert @')
//     alert('insert @')
//     }
//}


export default Adopt;