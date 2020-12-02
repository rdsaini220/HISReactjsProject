import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import { Markup } from 'interweave';
import $ from 'jquery' // node module

class WebButton extends Component{	  
    render(){     		
       return (<>
			<NavLink to={this.props.link} className={"btn " + this.props.className}> {this.props.icon}  {this.props.name} </NavLink>
        </>
    )};
};

class SecHeading extends Component{	  
	componentDidMount() {
        //Header
		// FOR TESTIMONIAL TITLE 
		var fancyHeading = document.getElementsByClassName('fancy')[0];
		var letters = fancyHeading.textContent.split('');
		var content = letters.map((val, i) => {
			let delay = Math.floor((Math.random() * 1000) + 1);
			return ('<span style="animation-delay: '+ delay + 'ms">'
					+ val +
					'</span>');
		});

		// FOR OUR WORK PROCESS TITLE
		var workHeading = document.getElementsByClassName('workHeading')[0];
		var workLetters = workHeading.textContent.split('');

		var workContent = workLetters.map((val, i) => {
			let delay = Math.floor((Math.random() * 1000) + 1);
			return ('<span style="animation-delay: '+ delay + 'ms">'
					+ val +
					'</span>');
		});

		workHeading.innerHTML = "";

		for (var i = 0; i < workContent.length; i++) {
			workHeading.innerHTML += workContent[i];
		};				
	}	
    render(){     		
       return (<>
	   		<div className="section-heading2"><h1 className={this.props.className}> {this.props.title} </h1></div>
        </>
    )};
};

class InnerArea extends Component{	
	constructor(props) {
    super(props);
  }
    render(){  
       return (<>
			<section className="InnerArea bgprimaryNew">
				<div className="home_bubble">
					<div className="bubble b_one"></div>
					<div className="bubble b_two"></div>
					<div className="bubble b_three"></div>
					<div className="bubble b_four"></div>
					<div className="bubble b_five"></div>
					<div className="bubble b_six"></div>
				</div>
		  		<Container>
					<Row className="justify-content-center">
						<div className="col-xl-8 text-center text-white">
							<h1 className="text-white mb-0"> 
								{	
									this.props.ineerheading ? 
									(	<> 									
											{this.props.ineerheading} 
											<Markup  content={'We Build Possibilities for You'} />
										</>
									)
									: ('')
								}
								{this.props.children} 
							</h1>
						</div>
					</Row>
		  		</Container>
			</section>
        </>
    )};

};

class MainServiceSec extends Component{	
    render(){  
       return (<>
	   		<section className="main-service-sec">
                <Container className="ser-vc-on">
                    <Row className="align-items-center">
                        <Col className="col-12 col-lg-7 mb-5 mb-lg-0">
                            <h2>{this.props.title}</h2>
                            {this.props.children}
                        </Col>
                        <Col className="col-12 col-lg-5">
                            <img src={this.props.image} alt={this.props.title} className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
		    </section>
			
			
        </>
    )};

};

const Feature = (props) => {
    return (<>
            <div className="feature-block-two col-lg-6 col-md-12 col-sm-12">
                <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms" style={{background: `url(${props.img})`}} >
                    <div className="number">{props.title}</div>
                    <h4>{props.subtitle}</h4>
                    <div className="text">{props.text}</div>
                </div>
            </div>
    </>);
};

const ServiceCard = (props) => {
    return (<>
            <div className={"service-block col-lg-3 col-md-6 col-sm-12 " + props.extraClass}>
				<div className="inner-box">
					<div className="icon-box">
						<span className={props.iconClass}></span>
					</div>
					<h5><NavLink to={props.url} >{props.title}</NavLink></h5>
					<div className="text">{props.text}</div>
					<NavLink to={props.url} className="arrow flaticon-long-arrow-pointing-to-the-right"></NavLink>
				</div>
			</div>
    </>);
};

const PortfolioCard = (props) => {
    return (<>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
				<div className="column column1 text-center">
					<span className="image-scroll image-scroll02" style={{background: `url(${props.image})`}} ></span>
				</div>
				<div className="text-center">
					<h4 className="text-uppercase mb-0">
						<Link target={"_blank"} to={props.url} rel="nofollow" >
							<span>{props.name}</span> 
							<i className="flaticon-unlink"></i> 
						</Link>
					</h4>
					<span>{props.description}</span>
				</div>
			</div>
    </>);
};

const BrandLogos = (props) => {
    return (<>
           	<li>
				<NavLink to="/"><img src={props.logo} alt="" /></NavLink>
			</li>
    </>);
};

const TechnologyLogos = (props) => {
    return (<>
           	<li>
				<div className="technology_logos_item">
					<img src={props.logo} alt="Top App Creators" />
					<h3 className="text-center mt-3 mb-0">{props.title}</h3>
				</div>
			</li>
    </>);
};

const GalleryContent = (props) => {
    return (<>
           	<li className="list-inline-item m-0">
				<div className="gallery-image">
					<img src={props.img} className="img-fluid" />
				</div>
			</li>
			 <li className="list-inline-item m-0">
				<div className="gallery-content-red p-4">
					<h4> {props.title} </h4>
					<p>{props.text}</p>
				</div>
			</li>
    </>);
};

export{WebButton,SecHeading,InnerArea,MainServiceSec,Feature,ServiceCard,PortfolioCard,BrandLogos,TechnologyLogos,GalleryContent};

