import React from "react";
import Pets from "./Pets";

const Home=()=>{

        return(
            <div className='Home'>
                <div >
                    <h1 className='adopt'>Adopt Me!
                    <div className='adopt_search'>
                           <label htmlFor='search' className='search'>Search:</label>
                           <input type='text' className='Search' placeholder='search' name='search' onChange={ChangeEvent}/>
                           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeBE6WQpBbh6CmVIfPyweFop3l2KWihor5ZXz2zx_jLh-VURzWcn_MrD46qQdwVCjQ2g&usqp=CAU' className='mag'/>
                     </div>
                    </h1>
                </div>
                <Pets />
            </div>
        );

        function ChangeEvent(e) {

            const arr=['Labrador','Bulldog']
            console.log(e.target.value);
            var n=e.target.value;
            for (let i = 0; i < arr.length; i++) {
                if(arr[i]===n)
                console.log('matches')
                
            }

        }
    }

export default Home;