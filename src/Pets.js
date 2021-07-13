import { Link } from "react-router-dom";

const Pets= (props) =>{


    return(


<div className="grid-container">
  <div className='grid-item 1'>

  <Link to='Home/1' className='linkto' >
  <img className="item a" src='images/1.jpg' alt="Bulldog" id='1' />

             <h1 className='txt h'>Bulldog</h1>
             </Link>
             <h2 className='txt'>Available in: Black</h2> 

  </div> 
  <div class="grid-item 2">

  <Link to='Home/2' className='linkto'>
  <img className="item b" src='images/2.jpg' alt="Labra" />
             <h1 className='txt h'>Labrador</h1>
             </Link>
             <h2 className='txt'>Available in: Golden</h2> 

  </div>


  <div class="grid-item 3"> 
  
  <Link to='Home/3' className='linkto'>
   <img className="item c" src='images/3.jpg' alt="Rottweiler" />
             <h1 className='txt h'>Rottweiler</h1>
             </Link>
             <h2 className='txt'>Available in: Black</h2> 
</div>

  <div class="grid-item 4">  
  
  <Link to='Home/4' className='linkto'>
  <img className="item d" src='images/4.jpg' alt="St. Bernard" />
             <h1 className='txt h'>St. Bernard</h1>
  </Link>
             <h2 className='txt'>Available in: White</h2> 
</div>

  <div class="grid-item 5">  
  
  <Link to='Home/5' className='linkto'>
  <img className="item e" src='images/5.jpg' alt="German Shepherd" />
             <h1 className='txt h'>German Shephered</h1>
  </Link>
             <h2 className='txt'>Available in: Black</h2> 
</div>

<div class="grid-item 6">  
  
  <Link to='Home/6' className='linkto'>
  <img className="item f" src='images/6.jpg' alt="Siberian Husky" />
             <h1 className='txt h'>Siberian Husky</h1>
  </Link>
             <h2 className='txt'>Available in: White</h2> 
</div>

<div class="grid-item 7">  
  
  <Link to='Home/7' className='linkto'>
  <img className="item f" src='images/7.jpg' alt="Great Dane" />
             <h1 className='txt h'>Great Dane</h1>
  </Link>
             <h2 className='txt'>Available in: Fawn</h2> 
</div>

<div class="grid-item 8">  
  
  <Link to='Home/8' className='linkto'>
  <img className="item f" src='images/8.jpg' alt="Welsh Corgi" />
             <h1 className='txt h'>Welsh corgi</h1>
  </Link>
             <h2 className='txt'>Available in: Fawn</h2> 
</div>

</div>


    )
}

export default Pets;