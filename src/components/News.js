import React from 'react';
import Select from './Select';

const News = () =>{

    return (
            <div className="row">
                <div className="col-8">

                    <div className="container-fluid">
                        <h1 className="text-center news-title">Título genérico para noticia genérica</h1>
                        <article className="row no-gutters justify-content-center">
                            
                            <div className="new">
                                <img className="float-right img-thumbnail" src="https://placeimg.com/250/250/animals" alt=""/>

                                <p className="news-content ">
                                Bacon ipsum dolor amet pork belly leberkas chuck jerky tri-tip sausage corned beef salami kevin meatball. Pork ribeye capicola pork loin jowl kielbasa picanha shoulder frankfurter. Meatloaf pork loin pork ribeye, sausage frankfurter kielbasa rump chislic bresaola pork belly burgdoggen chuck pork chop. Tail pork belly venison andouille, filet mignon burgdoggen frankfurter drumstick swine brisket sirloin meatball chicken alcatra porchetta. Sausage turducken ham, flank leberkas chicken andouille cow meatball pork belly pastrami.
                                Boudin buffalo cow bacon chuck, fatback frankfurter turducken pastrami cupim chislic andouille. Meatball ribeye short ribs venison andouille ham hock shank picanha. Boudin ball tip drumstick, spare ribs biltong frankfurter shoulder short loin brisket pork belly cupim short ribs. Jowl andouille picanha doner. Pork chop biltong tenderloin cow. Buffalo corned beef pork ground round cow ribeye brisket pork belly capicola tenderloin. Flank bresaola boudin cupim, turducken tenderloin sausage strip steak kevin picanha burgdoggen pork chop chuck shank swine.
                                Shankle pork chop salami frankfurter brisket tri-tip jerky leberkas tongue tenderloin pork loin. Chuck pancetta picanha tri-tip biltong turkey filet mignon kevin venison pork chop swine pastrami doner meatball. Jowl beef buffalo, picanha swine prosciutto cupim alcatra shoulder tongue. Salami doner porchetta ground round, drumstick chicken tri-tip flank frankfurter pork picanha kevin hamburger landjaeger pig. Jowl drumstick prosciutto andouille. Bresaola pastrami short loin ribeye landjaeger, turkey tenderloin ground round tongue porchetta andouille sirloin prosciutto corned beef. Tri-tip burgdoggen hamburger chicken, bacon kevin short loin meatball flank ground round boudin alcatra.                   
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-4">
                    <Select/>
                </div>
            </div>
    );

}


export default News; 