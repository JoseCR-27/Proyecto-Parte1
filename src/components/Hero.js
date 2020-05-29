import React, {useState} from 'react';
import ImgComp from './ImgCom';
import i1 from './img/1.jpg';
import i2 from './img/2.jpg';
import i3 from './img/3.jpg';
import i4 from './img/4.jpg';
import i5 from './img/5.jpg';

function Hero () {
    const [x] = useState(0);
    let sliderArr = [
        <ImgComp src={i1} />, 
        <ImgComp src={i2} />,
        <ImgComp src={i3} />, 
        <ImgComp src={i4} />, 
        <ImgComp src={i5} />
    ];

   return (
        <div className="slider">
        {
            sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide gradient-overlay" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })
        }
       </div>
   );
    
};

export default Hero;