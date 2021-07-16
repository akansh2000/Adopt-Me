import React, { useState } from "react";
import Pets from "./Pets";



const Home=()=>{

    const [search,setSearch]= useState(null);
    let str='';


    function MyFunc()
    {
        str=str.toUpperCase();
         console.log(str)
         setSearch(str);
    }
    
    function Word(e)
    {
        console.log(str)
     str=e.target.value;
    }
        return(
            
            <div className='Home'>
                <div >
                    <h1 className='adopt'>Adopt Me!
                    <div className='adopt_search'>
                    <form className='Search_form' onSubmit={e=>{e.preventDefault();
                    MyFunc();}}> 
                          <input type="text" name="text" className="Search" placeholder="Search here!" onChange={Word}  />
                          <input type="submit" name="submit" className="submit" value="Search"  />
                     </form>
                          
                     </div>
                    </h1>
                </div>
                 <Pets name={search}/> 
            </div>
        );

       
    }

export default Home;