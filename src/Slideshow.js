
// import React from 'react';
// import {Component } from "react";

// class Slideshow extends Component
// {
//   constructor(){
//     super();

//     this.onClickForward=this.onClickForward.bind(this);
//   this.onClickBack=this.onClickBack.bind(this);

//   this.state={

//     index:0,
//     slideImages : [
//       'https://i.pinimg.com/originals/76/ab/6a/76ab6a4dc1d3e9e680401636ce1fcf77.jpg',
//       'https://i.pinimg.com/originals/48/ba/85/48ba853032fd9af2ae2790e2a110744e.jpg',
//       'https://cdn.fotofits.com/petzlover/gallery/img/l/american-bully-869802.jpg'
//     ]
//   }

//   }

//   onClickForward()
//   {
//     if(this.state.index+1 === this.state.slideImages.length) {
//       this.setState({
//         index:0
//       })
//     } else {
//       this.setState({
//         index:this.state.index+1
//       })
//     }
//   }

//   onClickBack()
//   {
//     if(this.state.index-1 === -1) {
//       this.setState({
//         index: this.state.slideImages.length-1
//       })
//     } else
//     {
//       this.setState({
//         index: this.state.index-1
//       })
//     }
//   }

//   render()
//   {
//     return(
//       <div className='full'>
//         <img src={this.state.slideImages[this.state.index]} alt="" className='swipe' /> <br />
//         <div className='btn1'>
//         <button onClick={this.onClickBack} className='prev' >&#8249;</button>
//         <button onClick={this.onClickForward} className='prev' >&#8250;</button>
//         </div>
//       </div>
//     )
//   }

// }

// export default Slideshow;