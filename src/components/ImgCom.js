import React from 'react';

function ImgComp({ src }){
    let imgStyles={
        width:100+"%",
        height:"auto",
        
    };
    return (
        <div> 
            <img src={src} alt="slide-img" style={imgStyles}></img>
            <div className="carousel-caption">
                <a href="https://stackoverflow.com/questions/6169666/how-to-resize-an-image-to-fit-in-the-browser-window">Nombre de la noticia</a>
                <p className="text-justify">Bacon ipsum dolor amet meatloaf short loin ball tip biltong landjaeger frankfurter bacon chuck bresaola brisket pork picanha. Flank salami buffalo meatball bacon beef, kevin spare</p>
            </div>
        </div>
    );
}

export default ImgComp;