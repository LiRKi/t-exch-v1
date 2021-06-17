import React, {componet} from 'react';



class Home extends React.Component{
    render(){
        return(
            <div className="Home">  
                <div>
                    <div className="container">
                        <h3 style={{margin: '29px',margintop: '30px',color: 'rgb(98,111,126)', fontsize: '18px', marginbottom: '0px',}}>collége &gt; 2émé année collègial &gt; Informatique</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{margintop: '50px',}}>
                        <div className="col">
                            <div className="border rounded-0 shadow"><img src="assets/img/img3.png" style={{width: '100%', height: '50%', borderbottom: '2px solid #ddd',}}/>
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col"><i className="fa fa-calendar" style={{margintop: '9px', marginleft: '24px',}}></i></div>
                                                <div className="col">
                                                    <h6 style={{marginleft: '-33px', marginright: '13px',paddingright: '0px',paddingleft: '0px'}}>d/m/Y</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{width: '100%',}}>
                                            <div className="row">
                                                <div className="col" style={{paddingright: '0px'}}><i className="fa fa-user" style={{marginleft: '47px',margintop: '8px'}}></i></div>
                                                <div className="col">
                                                    <h6>CEO</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-center" style={{color: 'rgb(73,82,94)', margintop: '40px', marginbottom: '40px',}}>Les fiches Pédagogiques</h4><button className="btn btn-primary" type="button" style={{margin: '10px', backgroundcolor: 'rgb(137,179,253)',}}>Acceder</button></div>
                        </div>
                        <div className="col">
                            <div className="border rounded-0 shadow"><img src="assets/img/img2.jpg" style={{width: '100%',height: '50%',borderbottom: '2px solid #ddd'}}/>
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col"><i className="fa fa-calendar" style={{margintop: '9px',marginleft: '24px',}}></i></div>
                                                <div className="col">
                                                    <h6 style={{marginleft: '-33px', marginright: '13px', paddingright: '0px', paddingleft: '0px',}}>d/m/Y</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{width: '100%',}}>
                                            <div className="row">
                                                <div className="col" style={{paddingright: '0px',}}><i className="fa fa-user" style={{marginleft: '47px', margintop: '8px',}}></i></div>
                                                <div className="col">
                                                    <h6>CEO</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-center" style={{color: 'rgb(73,82,94)', margintop: '40px', marginbottom: '40px',}}>Exercices et Evaluations</h4><button className="btn btn-primary text-center" type="button" style={{margin: '10px', backgroundcolor: 'rgb(137,179,253)'}}>Acceder<br/></button></div>
                        </div>
                        <div className="col">
                            <div className="border rounded-0 shadow"><img className="d-xl-flex visible" src="assets/img/img1.png" style={{width: '100%', height: '50%', borderbottom: '2px solid #ddd', paddingbottom: '6px'}}/>
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col"><i className="fa fa-calendar" style={{margintop: '9px',marginleft: '24px'}}></i></div>
                                                <div className="col">
                                                    <h6 style={{marginleft: '-33px', marginright: '13px', paddingright: '0px', paddingleft: '0px'}}>d/m/Y</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{width: '100%'}}>
                                            <div className="row">
                                                <div className="col" style={{paddingright: '0px'}}><i className="fa fa-user" style={{marginleft: '47px',margintop: '8px'}}></i></div>
                                                <div className="col">
                                                    <h6>CEO</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-center" style={{color: 'rgb(73,82,94)', marginbottom: '40px', margintop: '40px'}}>Activités et situations d'apprentissage</h4><button className="btn btn-primary" type="button" style={{backgroundcolor: 'rgb(137,179,253)', padding: '6px 12px', margin: '10px', margintop: '-18px'}}>Acceder<br/></button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;

