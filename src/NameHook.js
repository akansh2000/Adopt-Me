 import { useState } from "react";
//  import {Link } from "react-router-dom";

import logo from './images/dog.gif';


              function HookComp() {

                const [name, setName]= useState('');
                var str='Wassup ' + name; 
                

                return(
                  <div className="Front">
                    <div>
                          <h1 className='adopt'>Adopt Me!</h1>
                      </div>
                <div className='hook'>
            <h1 className='top_h'>Welcome to our Pet shop! <br/> {str}</h1>
            


            <form onSubmit={e=>{
              e.preventDefault();
              Homepg();
            }}>

            <input className='in' type='text' onChange={MyFunct} placeholder='Name' required></input>

            
            <input type='submit' className='btn' value='Enter'></input> 
            

            </form>
            <div>
            <img src={logo} className='logo' alt='logo'/>
            </div>
            </div>
            </div>
                )


                function MyFunct(event)
                 {
                   let nm=event.target.value;
                   let arr=nm.split(" ");
                   if(arr.length<=2)
                   setName(event.target.value);
                   else{
                   nm=arr[0].charAt(0)+"."+arr[1].charAt(0)+". "+arr[2];
                   setName(nm);
                   }
                   
                 }

                
                function Homepg() {

                  window.location.href='https://akansh2000.github.io/Adopt-Me/Home';
                  
                }
                
              }        


             
              export default HookComp;