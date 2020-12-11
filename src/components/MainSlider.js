import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Markup } from 'interweave';
import {MainSlideData} from '../WebData';

var sliderstyle = {
    paddingTop: '200px',
    paddingBottom: '50px'
}

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
                            MainSlideData.map((val,index) => {
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

