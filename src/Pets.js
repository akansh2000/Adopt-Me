import { Link } from "react-router-dom";
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import seven from './images/7.jpg';
import eight from './images/8.jpg';

const Pets= (props) =>{


    return(


<div className="grid-container">
  <div className='grid-item 1'>

  <Link to='Home/1' className='linkto' >
  <img className="item a" src={one} alt="Bulldog" id='1' />

             <h1 className='txt h'>Bulldog</h1>
             </Link>
             <h2 className='txt'>Available in: Black</h2> 

  </div> 
  <div class="grid-item 2">

  <Link to='Home/2' className='linkto'>
  <img className="item b" src={two} alt="Labra" />
             <h1 className='txt h'>Labrador</h1>
             </Link>
             <h2 className='txt'>Available in: Golden</h2> 

  </div>


  <div class="grid-item 3"> 
  
  <Link to='Home/3' className='linkto'>
   <img className="item c" src={three} alt="Rottweiler" />
             <h1 className='txt h'>Rottweiler</h1>
             </Link>
             <h2 className='txt'>Available in: Black</h2> 
</div>

  <div class="grid-item 4">  
  
  <Link to='Home/4' className='linkto'>
  <img className="item d" src={four} alt="St. Bernard" />
             <h1 className='txt h'>St. Bernard</h1>
  </Link>
             <h2 className='txt'>Available in: White</h2> 
</div>

  <div class="grid-item 5">  
  
  <Link to='Home/5' className='linkto'>
  <img className="item e" src={five} alt="German Shepherd" />
             <h1 className='txt h'>German Shephered</h1>
  </Link>
             <h2 className='txt'>Available in: Black</h2> 
</div>

<div class="grid-item 6">  
  
  <Link to='Home/6' className='linkto'>
  <img className="item f" src={six} alt="Siberian Husky" />
             <h1 className='txt h'>Siberian Husky</h1>
  </Link>
             <h2 className='txt'>Available in: White</h2> 
</div>

<div class="grid-item 7">  
  
  <Link to='Home/7' className='linkto'>
  <img className="item f" src={seven} alt="Great Dane" />
             <h1 className='txt h'>Great Dane</h1>
  </Link>
             <h2 className='txt'>Available in: Fawn</h2> 
</div>

<div class="grid-item 8">  
  
  <Link to='Home/8' className='linkto'>
  <img className="item f" src={eight} alt="Welsh Corgi" />
             <h1 className='txt h'>Welsh corgi</h1>
  </Link>
             <h2 className='txt'>Available in: Fawn</h2> 
</div>

</div>


    )
}

export default Pets;