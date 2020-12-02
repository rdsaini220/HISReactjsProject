import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Markup } from 'interweave';
import slider1 from './assets/images/banners/slider-1.png';
import slider2 from './assets/images/banners/slider-2.png';
import slider3 from './assets/images/banners/slider-3.png';
// import React, {Component,Fragment} from 'react';

var sliderstyle = {
    paddingTop: '255px',
    paddingBottom: '50px'
}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

let SlideData = [
    {
        title : 'Web Development',
        text : 'Requirments analysis<br /> Consulting your ideas <br /> Providing our inputs <br /> Latest trend awareness <br /> Competitive Pricing  <br />Engagement Model selection',
        url : '/',
        img : slider1
    },
    {
        title : 'Mobile Application',
        text : 'Requirments analysis<br/> Consulting your ideas <br/> Providing our inputs <br/> Latest trend awareness <br/> Competitive Pricing  <br/>Engagement Model selection',
        url : '/',
        img : slider2
    },
    {
        title : 'UI/UX Design',
        text : 'Requirments analysis<br/> Consulting your ideas <br/> Providing our inputs <br/> Latest trend awareness <br/> Competitive Pricing  <br/>Engagement Model selection',
        url : '/',
        img : slider3
    }
     
]

const Slideitem = (props) => {
    return (<>
            <div class="item">
				<Container>
					<Row>
						<Col lg={6} md={6} >
							<div className="banner-Right">
								<h2 className="text-uppercase" data-animation="animated fadeInLeft">{props.title}</h2>
								<p className="" data-animation="animated fadeInLeft">{props.children}</p>
								<div className="price-wrapper clearfix mt-5" data-animation="animated fadeIn">
								<NavLink to={props.url} className="place-order btn btnprimary" data-toggle="modal" data-target="#quote_bvm">Start A Project</NavLink>
								</div>
							</div>
						</Col>
						<Col lg={6} md={6}>
							<div className="banner-right">
								<img className="bann-img" data-animation="animated fadeInRight" src={props.img} alt="Design to Front-end Development" title="Web Designing" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
    </>);
};


class MainSlider extends Component{
	  constructor(props){
		super(props)
	}
	// componentDidMount() {
    //     //Home Slider
		
    // }
    render(){     

       return (<>
			 <div className="frg BannerArea position-relative">

			 	<Slider {...settings}  className={"owl-theme slide carousel-fade backd"} style={sliderstyle} >
					{
                            SlideData.map((val,index) => {
                                return <Slideitem extraClass="servicePage" title={val.title} url={val.url}  img={val.img} ><Markup content={val.text} ></Markup> </Slideitem>
                            })
                    }
				</Slider>
                <a className="button steps-btn" href="#step_1" id="click_step_1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48" fill="#fff">
                        <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
                        <path d="M0-.75h48v48h-48z" fill="none"/>
                    </svg>
                </a> 
			</div>
        </>
    )};

}

export default MainSlider;
