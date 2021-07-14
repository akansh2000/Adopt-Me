import {Component } from "react";
import React from "react";
import Adopt from "./Adopt";
import {Link, Route  } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

class Details extends Component
{

  constructor(){
    super();

    this.onClickForward=this.onClickForward.bind(this);
  this.onClickBack=this.onClickBack.bind(this);
  this.fetchData=this.fetchData.bind(this);
  this.componentDidMount=this.componentDidMount.bind(this);

        this.state={

          index:0,
          slideImages : ['/images/Reveal1.jpg'],
          Name:'' ,
          text:'',
          check:'false',
          ID:''
        }

        
        
      }
      
      componentDidMount(){
        const id=this.props.match.params.id;
        this.fetchData(id);
      }

      fetchData=(id)=>{

const arr=[

  {'name':'Bulldog',
  'images':['https://i.pinimg.com/originals/76/ab/6a/76ab6a4dc1d3e9e680401636ce1fcf77.jpg',
  'https://i.pinimg.com/originals/48/ba/85/48ba853032fd9af2ae2790e2a110744e.jpg',
  'https://cdn.fotofits.com/petzlover/gallery/img/l/american-bully-869802.jpg'],
  'text':'The Bulldog, also known as the English Bulldog or British Bulldog, is a medium-sized dog breed.\nIt is a muscular, hefty dog with a wrinkled face and a distinctive pushed-in nose.\nGenerally, Bulldogs are known for getting along well with children, other dogs, and other pets.\n\nLife span: 8 – 10 years.\nHeight: Female: 31–40 cm, Male: 31–40 cm.\nColors: White, Fawn, Piebald, Brindle & White, Fawn & White, Red, Red & White, Red Brindle.\nMass: Male: 23 kg, Female: 18 kg.'
  },

  {'name':'Labrador',
  'images':['https://i.pinimg.com/originals/d9/bf/14/d9bf14b56f2be62debc791aa1d261dcc.jpg',
  'https://www.thelabradordog.com/wp-content/uploads/2019/01/Golden-Lab-Puppies.png',
  'https://doggiedesigner.com/wp-content/uploads/2018/09/Golden-Labrador-1.jpg'],
  'text':'The Labrador Retriever, often abbreviated to Labrador or Lab, is a medium-large gun dog from the United Kingdom that was developed from imported Canadian fishing dogs.\nThe Labrador is one of the most popular dog breeds in a number of countries in the world, particularly in the Western world.\n\nLife span: 10 – 12 years.\nColors: Black, Chocolate, Yellow.\nHeight: Male: 57–62 cm, Female: 55–60 cm.\nWeight: Male: 29–36 kg, Female: 25–32 kg.\nTemperament: Intelligent, Even Tempered, Outgoing, Agile, Trusting, Kind, Gentle.\n' 
  },

  {'name':'Rottweiler',
  'images':['https://www.adtob.com/uploads/2016/01/ad-ffggf-jpg-1hc2.jpg',
  'https://dogbreedersguide.com/wp-content/uploads/2015/01/cute_rottweiler_dog_breed_picture.jpg',
  'https://www.mypetsname.com/wp-content/uploads/2020/01/Rottie-Puppy.jpg'],
  'text':'The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.\nThe dogs were known in German as Rottweil butchers\' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market.\n\nLife span: 8 – 10 years.\nTemperament: Good-natured, Devoted, Obedient, Alert, Fearless, Confident, Self-assured, Steady.\nHeight: Female: 56–63 cm, Male: 61–69 cm.\nColors: Black, Tan, Mahogany.\nWeight: Female: 35–48 kg, Male: 50–60 kg.\n'  
  },

  {'name':'St. Bernard',
  'images':['https://doggiedesigner.com/wp-content/uploads/2020/07/shutterstock_163928255-1.jpg',
  'https://thumbs.dreamstime.com/b/adorable-saint-bernard-pup-25265116.jpg',
  'https://i.pinimg.com/originals/9a/1d/30/9a1d3035ff6ba30ad0ae1cdbd70ddf43.jpg'],
  'text': 'The Saint Bernard or St. Bernard is a breed of very large working dog from the Western Alps in Italy and Switzerland.\nThey were originally bred for rescue work by the hospice of the Great St Bernard Pass on the Italian-Swiss border.\nSt. Bernards can participate in tracking events also.\n\nLife span: 8 – 10 years.\nColors: Red & White, Brownish-yellow, Reddish-brown Brindle, Reddish-brown Splash, Reddish-brown Mantle.\nHeight: Male: 70–90 cm, Female: 65–80 cm.\nMass: Male: 64 – 82 kg, Female: 54 – 64 kg.\nTemperament: Friendly, Gentle, Lively, Watchful, Calm.' 
  },

  {'name':'German Shepherd',
  'images':['https://t2.ea.ltmcdn.com/en/images/4/0/2/what_is_the_best_diet_for_a_german_shepherd_puppy_1204_600_square.jpg',
  'https://static3.depositphotos.com/1004933/217/i/600/depositphotos_2174872-stock-photo-german-shepherd-puppy.jpg',
  'https://s3.envato.com/files/197591669/DS3_9216.jpg'],
  'text':'German Shepherd is a breed of medium to large-sized working dog that originated in Germany.\nAs a herding dog, they are working dogs developed originally for herding sheep.\nIt is a large, agile, muscular dog of noble character and high intelligence.\n\nLife span: 9 – 13 years.\nTemperament: Intelligent, Stubborn, Loyal, Obedient, Alert, Watchful, Confident, Curious, Courageous.\nColors: Black, Black & Tan, Sable, Grey, Red & Black, Black & Silver.\nHeight: Male: 60–65 cm, Female: 55–60 cm.\nWeight: Male: 30–40 kg, Female: 22–32 kg.\n' 
  },

  {'name':'Siberian Husky',
  'images':['https://st2.depositphotos.com/2289871/7400/i/950/depositphotos_74008075-stock-photo-cute-siberian-husky-puppy-walking.jpg',
  'https://thehappypuppysite.com/wp-content/uploads/2015/09/The-Siberian-Husky-HP-long.jpg',
  'https://i.ibb.co/fHw1z3J/husky-1.jpg'],
  'text':'The Siberian Husky is a medium-sized working sled dog breed.\nThe breed belongs to the Spitz genetic family.\nIt is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.\n\nLife span: 12 – 15 years.\nColors: White, Black, Black & White, Sable & White, Grey, Gray & White, Silver-gray.\nHeight: Female: 50–56 cm, Male: 54–60 cm.\nTemperament: Intelligent, Friendly, Outgoing, Alert, Gentle.\nMass: Male: 20 – 27 kg , Female: 16 – 23 kg.' 
  },

  {'name':'Great Dane',
  'images':['https://cf.ltkcdn.net/dogs/images/orig/243557-1600x1030-great-dane-puppy.jpg',
  'https://i.pinimg.com/originals/fc/41/3d/fc413df7dabc6fb8a95aaf0258e5be02.jpg',
  'https://us.123rf.com/450wm/gamusinos/gamusinos1910/gamusinos191000013/132528187-fawn-great-dane-puppy-on-the-grass.jpg?ver=6'],
  'text':'The Great Dane, also known as the German Mastiff or Deutsche Dogge, is a breed of dog from Germany.\nThe Great Dane descends from hunting dogs known from the Middle Ages and is one of the largest breeds in the world.\n\nLife expectancy: 8 – 10 years.\nOrigin: Germany.\nHeight: Female: 71–81 cm, Male: 76–86 cm.\nColors: Black, Brindle, Fawn, Mantle, Blue, Harlequin.\nWeight: Female: 45–59 kg, Male: 54–90 kg.\nTemperament: Friendly, Devoted, Reserved, Confident, Loving, Gentle.\n' 
  },

  {'name':'Welsh Corgi',
  'images':['https://besthqwallpapers.com/Uploads/21-12-2017/34418/thumb2-pembroke-welsh-corgi-pets-puppy-dogs-welsh-corgi.jpg',
  'https://media.istockphoto.com/photos/portrait-red-welsh-corgi-dog-outdoors-in-the-park-on-a-sunny-summer-picture-id1061822700?k=6&m=1061822700&s=170667a&w=0&h=I5hrzc9InjpwKepvAlMM7x_VOpC_JSr8kmYK3r-MYLs=',
  'https://cdn.buttercms.com/ZF8K2t8hT8OoNR3W42bX'],
  'text':'The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. It is one of two breeds known as a Welsh Corgi. The other is the Cardigan Welsh Corgi, and both descend from the line of northern spitz-type dogs.\n\nLife span: 12 – 15 years.\nOrigin: Pembrokeshire.\nTemperament: Playful, Tenacious, Friendly, Outgoing, Bold, Protective.\nColors: Fawn, Black & Tan, Sable, Black & White, Red.\nHeight: Male: 25–30 cm, Female: 25–30 cm.\nWeight: Male: 10–14 kg, Female: 10–13 kg\n' 
  }
   ]

this.setState(
{
  index:this.state.index=0,
  Name:this.state.Name=arr[id-1].name,
 slideImages:this.state.slideImages=arr[id-1].images,
 text:this.state.text=arr[id-1].text,
 check:this.state.check='false',
 ID:this.state.ID=id
}

)

      }


onClickForward()
  {
    if(this.state.index+1 === this.state.slideImages.length) {
      this.setState({
        index:0
      })
    } else {
      this.setState({
        index:this.state.index+1
      })
    }
  }

  onClickBack()
  {
    if(this.state.index-1 === -1) {
      this.setState({
        index: this.state.slideImages.length-1
      })
    } else
    {
      this.setState({
        index: this.state.index-1
      })
    }
  }


  render()
  {
    return(
      <div className='full'>
        <Link to='/Home'>
        <button className='back'>&#x2190; Back</button>
        </Link>
        <h1 className='heading'>{this.state.Name}</h1>
        <p className='para'>{this.state.text}</p>
        <img src={this.state.slideImages[this.state.index]} alt="no image" className='swipe' />
        <div className='btn1'>
        <button onClick={this.onClickBack} className='prev' >&#8249;</button>
        <button onClick={this.onClickForward} className='prev' >&#8250;</button>
        </div>
          <Link to={{pathname: `/Home/${this.state.ID}/Adopt`}}> 
        <button className='animate_animated animate_bounce Buy'>Adopt {this.state.Name}</button> 
          </Link>
      </div>
    )
  }
}

export default Details;