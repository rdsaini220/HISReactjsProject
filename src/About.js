import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {WebButton, InnerArea,GalleryContent} from './WebBase';
import {GalleryData} from './WebData';
import Testimonials from './Testimonials';
import aboutImg from './assets/images/about.jpg';



var heading = "We dont just offer our services We create a Helpful Insight for clients";

class About extends Component{
    render(){   
       return (<>
            <InnerArea> {heading} </InnerArea>

            <section className="section section-sm position-relative" id="about">
				<Container>
					<Row>
						<Col lg={5} className="mb-5 mb-lg-0">
							<div className="block-decorate-img"><img src={aboutImg} alt="" />
							</div>
						</Col>
						<Col lg={7}>
							<div className="block-sm">
								<div className="section-name">About us</div>
								<h3 className="text-capitalize devider-bottom">What We<span className="text-primary"> Do</span></h3>
								<p><strong>Helpful Insight</strong> is one of the well-known leaders in the technology revolution and provides complete IT solutions since 2016. The company provides the best services in Mobile application, Website development, Designing & Digital marketing. We are a team of highly professional experts. We are rigorously committed to quality and professionalism. We always seek an opportunity to help & Consult with any requirements, rather than selling our services to anyone.</p>
								<p>We always thrive to consult and understand the requirements of the customer, because we believe in culture, where you treat & understand our customer nicely. Our founders always desire to create a company that understands customer needs. This has only been possible with the open, aura, and customer-obsessed attitude. At <strong>Helpful Insight</strong>, we have been enabling more modern, more effective, and more efficient services, where in you all the processes feel will be under a customer-centric umbrella after you award the project.</p>
								<p>We are also committed to growth and accelerating the business synergies of our clients. We believe in creating real, practical <strong>Helpful Insight</strong>s that modernize how we brought to today`s world, which has been developed and brought to market. Our desiring goal is to help customers, to establish better understanding and applause value and outcomes for customers.</p>
								<div className="price-wrapper">
									<WebButton className='place-order btn btnprimary' name={'Start A Project'} link={'/contact-us'} />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<div className="decor-text decor-text-1">ABOUT</div>
			</section>

			<section className="industries-sec bgprimaryNew mt-5 pb-0">
			<div className="design-img">
				<img src={process.env.PUBLIC_URL + "images/port1.png"} alt="dots" className="port1" />
			</div>
			<div className="container">
		        <div className="row">
		            <div className="col-lg-12 col-md-12">
		               	<div className="section-heading2"><h1 className="fancy workHeading text-white">Industries&nbsp; We&nbsp; Serve</h1></div>
		            </div>
		        </div>
		    </div>
		   	<div className="container-fluid px-0">
		        <div className="row no-gutters">
		            <div className="col-lg-12 col-md-12">
		               	<div className="app_fetured_item">
		                  	<div className="gallery-content">
		                        <ul className="list-inline mb-0">
									{
										GalleryData.map((val,index) => {
											return <GalleryContent img={val.img} title={val.title} text={val.text} />
										})
									}	
		                        </ul>
		                    </div>
		               	</div>
		            </div>
		        </div>
		   </div>
		</section>

            <section className="event_fact_area bg-extra-light">
				<Container>
					<div className="hosting_title security_title text-center mb-5">
						<h2><span>Let the Facts</span> Speak for Themselves</h2>
					</div>
					<div className="seo_fact_info">
						<div className="seo_fact_item">
							<div className="text">
								<div data-count="%" className="counter one">100</div>
								<p className="mb-0">Happy Clients</p>
							</div>
						</div>
						<div className="seo_fact_item">
							<div className="text">
								<div data-count="+" className="counter two">800</div>
								<p className="mb-0">Projects</p>
							</div>
						</div>
						<div className="seo_fact_item">
							<div className="text">
								<div data-count="+" className="counter three">40</div>
								<p className="mb-0">Skilled Techies</p>
							</div>
						</div>
						<div className="seo_fact_item last">
							<div className="text">
								<div data-count="+" className="counter four">8</div>
								<p className="mb-0">Years of Experience</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
            
			<div className="testimonial-back">
				<section className="testimonials">
					<Container>
						<Row>
							<Col md={6} lg={6}>
								<div className="testimonial_title">		                  		
									<h6> Testimonials</h6>
									<h2 className="f_p f_size_30 l_height45 f_600 t_color"> Loved by businesses,<br/>and individuals across<br/> the globe.</h2>
									{/* <div className="cara-arrows">
										<a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
											<span className="carousel-control-prev-icon"><i className="flaticon-long-arrow-pointing-to-left"></i></span>
										</a>
										<a className="carousel-control-next" href="#testimonial4" data-slide="next">
											<span className="carousel-control-next-icon"><i className="flaticon-long-arrow-pointing-to-the-right"></i></span>
										</a>
									</div> */}
								</div>
							</Col>
							<Col md={6} lg={6}>
								<div className="stratup_testimonial_info d-flex align-items-center">
									<section className="testimonial text-center">
										<Container>
											<Testimonials />		                           		
										</Container>
									</section>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
			<div className="clearfix"></div>
    	</>
    )};

}

export default About;

