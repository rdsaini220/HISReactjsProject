import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import MainSlider from './MainSlider';
import {PortfolioSec} from './Portfolio';
import {FeatureData,serviceData} from './WebData';
import {WebButton,SecHeading, Feature, ServiceCard} from './WebBase';
import Testimonials from './Testimonials';

import stepsleftdot from './assets/images/steps-leftdot.png';
import stepsrightdot from './assets/images/Steps-rightdot.png';
import globe from './assets/images/globe.png';
import pattern1 from './assets/images/pattern-1.png';
import icon1 from './assets/images/icon-1.png';
import icon2 from './assets/images/icon-2.png';
import icon3 from './assets/images/icon-3.png';
import about1 from './assets/images/about-1.jpg';
import about2 from './assets/images/about-2.jpg';
import about3 from './assets/images/about-3.jpg';
import about4 from './assets/images/about-4.jpg';
import processImg from './assets/images/process.png';



 const svgstyle = {
      background: 'new 0 0 512 512',
    };
 const svgstyle2 = {
      background: 'new 0 0 122.88 84.13',
    };
 const svgstyle3 = {
      background: 'new 0 0 25.925 25.925',
	};
	


class Home extends Component{	
    render(){
       return (<>
        <MainSlider/>

		<section className="bgprimary technologysec">
			<picture>
		      	<img src={stepsleftdot} alt="dot" className="steps-leftdot stepsdot" />
		   	</picture>
		   	<picture>
		      	<img src={stepsrightdot}  alt="dot" className="steps-rightdot stepsdot" />
		   	</picture>
			<Container>
		      <Row className="justify-content-center" id="step">
		        <Col lg={12} >
		            <div className="headingArea text-center mb-5 text-white">
		               <h3 className="text-white">PRECISE <br/>DEVELOPMENT methodology </h3>
		               <p>
		               	<span>
		               		<svg width="15" height="15" fill="#FF9800" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={svgstyle} xmlSpace="preserve">
								<g>
									<g>
										<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431     255.898,401.21 416.035,502.431 369.263,318.842   "/>
									</g>
								</g>
							</svg>
						</span>
						<span>
		               		<svg width="15" height="15" fill="#FF9800" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={svgstyle} xmlSpace="preserve">
								<g>
									<g>
										<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431     255.898,401.21 416.035,502.431 369.263,318.842   "/>
									</g>
								</g>
							</svg>
						</span>
						<span>
		               		<svg width="15" height="15" fill="#FF9800" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={svgstyle} xmlSpace="preserve">
								<g>
									<g>
										<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431     255.898,401.21 416.035,502.431 369.263,318.842   "/>
									</g>
								</g>
							</svg>
						</span>
						<span>
		               		<svg width="15" height="15" fill="#FF9800" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={svgstyle} xmlSpace="preserve">
								<g>
									<g>
										<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431     255.898,401.21 416.035,502.431 369.263,318.842   "/>
									</g>
								</g>
							</svg>
						</span>
						<span>
		               		<svg width="15" height="15" fill="#FF9800" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={svgstyle} xmlSpace="preserve">
								<g>
									<g>
										<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431     255.898,401.21 416.035,502.431 369.263,318.842   "/>
									</g>
								</g>
							</svg>
						</span>
		               	<span>100% Customer Satisfaction</span></p>
		            </div>
		        </Col>
		        <Col sm={6} md={4} lg={4} xl={2} >
		            <div className="award-img aw-1 text-center">
		            	<svg width="125" height="125" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 84.13" style={svgstyle2}  xmlSpace="preserve">
						
						<g><path fill="#fff" className="st0" d="M122.39,39.31c-0.88-0.88-12.12-15.04-14.02-17.38c-2.04-2.34-2.92-1.9-4.24-1.75 c-1.31,0.15-15.48,2.63-17.09,2.77c-1.61,0.29-2.63,0.88-1.61,2.34c0.88,1.31,10.22,14.46,12.27,17.53l-37.24,8.91L30.96,2.21 c-1.17-1.75-1.46-2.34-4.09-2.19c-2.63,0.15-23.22,1.9-24.68,1.9C0.72,2.07-0.88,2.65,0.58,6.16C2.04,9.66,25.41,59.9,25.99,61.36 c0.58,1.46,2.34,3.8,6.28,2.92c4.09-1.02,18.11-4.67,25.85-6.72c4.09,7.3,12.27,22.2,13.88,24.39c2.04,2.92,3.51,2.34,6.57,1.46 c2.48-0.73,38.27-13.58,39.87-14.31c1.61-0.73,2.63-1.17,1.46-2.78c-0.88-1.17-10.22-13.88-15.19-20.45 c3.36-0.88,15.48-4.09,16.8-4.53C122.97,40.92,123.26,40.19,122.39,39.31L122.39,39.31L122.39,39.31z M54.76,53.19 c-0.44,0.15-21.32,5.11-22.35,5.4c-1.17,0.29-1.17,0.15-1.17-0.29C30.96,57.86,6.42,7.03,5.98,6.45c-0.29-0.58-0.29-1.17,0-1.17 c0.29,0,19.72-1.75,20.3-1.75c0.73,0,0.58,0.15,0.88,0.58c0,0,27.31,47.18,27.75,47.91C55.49,52.75,55.2,53.04,54.76,53.19 L54.76,53.19L54.76,53.19z M113.48,64.14c0.29,0.58,0.73,0.88-0.44,1.17c-1.02,0.44-35.2,11.98-35.93,12.27 c-0.73,0.29-1.17,0.44-2.04-0.88c-0.88-1.31-11.98-20.45-11.98-20.45l36.37-9.49c0.88-0.29,1.17-0.44,1.75,0.44 C101.79,48.22,113.19,63.7,113.48,64.14L113.48,64.14z M115.81,38.43c-0.88,0.15-14.17,3.51-14.17,3.51l-10.95-14.9 c-0.29-0.44-0.58-0.88,0.15-1.02c0.73-0.15,13.15-2.34,13.73-2.48c0.58-0.15,1.02-0.29,1.75,0.73 c0.73,0.88,10.08,12.85,10.52,13.29C117.27,38,116.69,38.29,115.81,38.43L115.81,38.43L115.81,38.43z"/></g></svg>
		            	<p className="fontsm Brown-Bold text-uppercase text-white mt-3">Laravel</p>
		            </div>
		        </Col>
		        <Col sm={6} md={4} lg={4} xl={2} >
		            <div className="award-img aw-1 text-center">
		            	<svg width="100" height="125" viewBox="0 0 128 128"><path fill="#fff" d="M2 73.69V93c0 10.69 27.75 19.35 62 19.35V93C29.75 93 2 84.36 2 73.69zM64 54.34l48.5 12c8.44-3.3 13.51-7.5 13.51-12V35c0-10.68-27.76-19.35-62-19.35S2 24.29 2 35V54.34C2 65 29.75 73.69 64 73.69V54.34zM112.49 85.74L64 73.69V93l48.5 12.05C120.93 101.78 126 97.59 126 93V73.69C126 78.24 120.93 82.43 112.49 85.74z"/></svg>
		            	<p className="fontsm Brown-Bold text-uppercase text-white mt-3">Cake PHP</p>
		            </div>
		        </Col>
		        <Col sm={6} md={4} lg={4} xl={2} >
		            <div className="award-img aw-1 text-center">
		            	<svg width="100" height="125" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 25.925 25.925" style={svgstyle3}  xmlSpace="preserve">
							<g>
								<path fill="#fff" d="M1.843,12.962c0,4.401,2.557,8.205,6.267,10.008L2.805,8.437C2.189,9.819,1.843,11.35,1.843,12.962z    M20.469,12.4c0-1.374-0.493-2.326-0.917-3.066c-0.563-0.917-1.092-1.691-1.092-2.608c0-1.021,0.775-1.973,1.867-1.973   c0.049,0,0.096,0.006,0.145,0.008c-1.979-1.813-4.615-2.919-7.509-2.919c-3.885,0-7.303,1.993-9.291,5.013   c0.261,0.008,0.507,0.013,0.716,0.013c1.163,0,2.963-0.142,2.963-0.142c0.599-0.035,0.67,0.846,0.071,0.917   c0,0-0.603,0.07-1.272,0.105l4.049,12.045l2.434-7.298l-1.732-4.747c-0.599-0.035-1.167-0.105-1.167-0.105   c-0.6-0.036-0.529-0.953,0.07-0.917c0,0,1.836,0.142,2.928,0.142c1.163,0,2.964-0.142,2.964-0.142   c0.6-0.035,0.67,0.846,0.071,0.917c0,0-0.604,0.07-1.272,0.105l4.018,11.953l1.11-3.706C20.187,14.55,20.469,13.353,20.469,12.4z    M13.158,13.935l-3.337,9.694c0.997,0.293,2.05,0.453,3.142,0.453c1.294,0,2.537-0.224,3.693-0.63   c-0.029-0.048-0.057-0.099-0.08-0.153L13.158,13.935z M22.72,7.627c0.049,0.354,0.075,0.734,0.075,1.144   c0,1.128-0.212,2.396-0.846,3.982l-3.396,9.82c3.306-1.928,5.529-5.509,5.529-9.611C24.082,11.028,23.588,9.21,22.72,7.627z"/>
								<g>
									<path fill="#fff" d="M0,12.962c0,7.147,5.815,12.963,12.962,12.963c7.149,0,12.963-5.816,12.963-12.963    S20.111,0,12.963,0S0,5.814,0,12.962z M0.594,12.962c0-6.819,5.548-12.368,12.368-12.368s12.369,5.549,12.369,12.368    S19.782,25.33,12.963,25.33S0.594,19.781,0.594,12.962z"/>
								</g>
							</g>
						</svg>
		            	<p className="fontsm Brown-Bold text-uppercase text-white mt-3">WordPress</p>
		            </div>
		        </Col>
		        <Col sm={6} md={4} lg={4} xl={2} >
		            <div className="award-img aw-1 text-center">
		            	<svg width="100" height="125" viewBox="0 0 256 272" preserveAspectRatio="xMidYMid">
							<path d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z" fill="#fff"/>
							<path d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" fill="#fff"/>
							<path d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z" fill="#534db9"/>
						</svg>
		            	<p className="fontsm Brown-Bold text-uppercase text-white mt-3">Angular</p>
		            </div>
		        </Col>
		        <Col sm={6} md={4} lg={4} xl={2} >
		            <div className="award-img aw-1 text-center">
		            	<svg width="100" height="125" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><g fill="#fff"><circle cx="64" cy="64" r="11.4"/>
						<path fill="#fff" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
		            	<p className="fontsm Brown-Bold text-uppercase text-white mt-3">React JS</p>
		            </div>
		        </Col>
		        <Col sm={6} md={4} lg={4} xl={2} >
		            <div className="award-img aw-1 text-center">
		            	<svg width="125" height="125" fill="#fff" data-name="Layer 1" viewBox="0 0 48 48">
						<path fill="#fff" d="M38.43,20l-4.7,2.87v-6l-2.66,1.71V27l-2.21,1.41L26.43,27V24.38l4.64-2.9-2.18-1.36-4.81,2.82-4.83-3-4.87,2.93L9.6,20,4.77,22.78v5.53L7.14,29.8l0-5.47,2.46-1.47,2.29,1.44,0,5.55,2.51-1.49,4.81,2.8L24,28.36l4.89,2.8,4.87-2.8,4.58,2.8,0-3L36.1,27l0-2.76,2.35-1.36,2.32,1.41v2.55l2.43-1.41v-2.6ZM21.62,27l-2.4,1.38L16.82,27V24.25l2.4-1.38,2.4,1.38Z"/><polygon points="37.13 24.76 37.13 26.28 38.45 27.04 39.76 26.28 39.76 24.76 38.45 24 37.13 24.76"/></svg>
		            	<p className="fontsm Brown-Bold text-uppercase text-white mt-3">Node JS</p>
		            </div>
		        </Col>
		      </Row>
		   </Container>
		</section>
        
		<section className="about-section" id="step_1">
			<Container>
				<div className="sec-title">
					<div className="title text-primary text-uppercase Brown-Bold mb-3">About Helpful Insight</div>
					<h6 className="fontmd">Universal coding standard with <br/> Highly professional approach.</h6>
				</div>
				<Row className="clearfix">
					<div className="content-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column">
							<div className="text"> We at Helpful Insight, innovation tends to custom mobile  &amp; web application development solutions developed by industry experts, that is how we would like to tell about us. scalable and sustainable with highly professional approach. We would like to define us as disciplined experts of industry. We started with an approach in which we desided no matter how hard it would be, we will be not going to compromising with quality &amp; professionalism. We are one of the best consultants for B2B.</div>
							<div className="blocks-outer mt-5">
								<div className="feature-block">
									<div className="inner-box">
										<div className="icon flaticon-award-1"></div>
										<h6>Universal coding concept</h6>
										<div className="feature-text">We are focused to the code quality </div>
									</div>
								</div>
								<div className="feature-block">
									<div className="inner-box">
										<div className="icon flaticon-technical-support"></div>
										<h6>Highly professional approach</h6>
										<div className="feature-text">We believe in providing best ROI.</div>
									</div>
								</div>
								
							</div>
                            <WebButton className="lightbox-image theme-btn btn-style-one btnprimary mt-4" link={'/contact-us'} name={'Make Appointment'}  icon={<i className="flaticon-phone-call pr-2"></i>} />
							
						</div>
					</div>
					
					<div className="images-column col-lg-6 col-md-12 col-sm-12">
						<div className="inner-column" style={{background: `url(${globe})`}} >
							<div className="pattern-layer" style={{background: `url(${pattern1})`}} ></div>
							<div className="images-outer parallax-scene-1">
								<div className="image" data-depth="0.10">
									<img src={about1} alt="" className="img-fluid" />
								</div>
								<div className="image-two" data-depth="0.30">
									<img src={about2} alt="" className="img-fluid" />
								</div>
								<div className="image-three" data-depth="0.20">
									<img src={about3} alt="" className="img-fluid" />
								</div>
								<div className="image-four" data-depth="0.30">
									<img src={about4} alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</section>
        
        <section className="featured-section pb-0">
			<Container>
				<Row>
                    {
                        FeatureData.map((val,index) => {
                            return <Feature img={val.img} title={val.title} subtitle={val.subtitle} text={val.text} />
                        })
                    }
				</Row>
			</Container>
		</section>

        <section className="services-section margin-top">
			<div className="upper-box">
				<div className="icon-one" style={{background: `url(${icon1})`}} ></div>
				<div className="icon-two" style={{background: `url(${icon2})`}} ></div>
				<div className="icon-three" style={{background: `url(${icon3})`}} ></div>
				<Container>
					<div className="sec-title text-center mb-5">
						<div className="title text-white">WHO WE ARE</div>
						<h2 className="text-white">We deal with the aspects of <br/> professional IT Services</h2>
					</div>
					<Row>
                        {
                            serviceData.map((val,index) => {
                                return <ServiceCard iconClass={val.iconClass} title={val.title} url={val.url} text={val.text} />
                            })
                        }
					</Row>
				</Container>
			</div>
		</section>

		<PortfolioSec />

		<section className="processsec">
   		    <Container>
		        <Row>
		            <Col md={12} lg={12}>
		               	<div className="headingArea text-center">
						   <SecHeading className="workHeading" title={'Our Work Process'} />
		            	</div>
		            </Col>
		        </Row>
		        <Row>
		            <Col md={12} lg={12}>
		            	<div className="process-image">
		            		<img src={processImg} alt="process" className="img-fluid" />
		            	</div>
		            </Col>
		        </Row>
		      </Container>
		</section>
		<Testimonials />		
		<div className="clearfix"></div>
    </>)};

}

export default Home;

