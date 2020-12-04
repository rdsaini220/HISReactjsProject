import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import logowhite from './assets/images/logo-white.png';
import {BrandLogos} from './WebBase';
import $ from 'jquery' // node module
import {SyncLoader} from "react-spinners";

var facebook = <svg width="25" height="25" fill="#534db8" data-name="Layer 1" viewBox="0 0 24 24">
					<path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/>
				</svg>;
var twitter = <svg width="25" height="25" fill="#534db8" data-name="Layer 1" viewBox="0 0 24 24">
				<path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/>
			  </svg>;
var instagram = <svg width="22" height="22" viewBox="0 0 48 48" version="1.1">
					<g id="Icons" stroke="none" stroke-width="1" fill-rule="evenodd">
						<g id="Black" transform="translate(-500.000000, -160.000000)" fill="#534db8">
							<path d="M524 160c-6.518 0-7.335.028-9.895.144-2.555.117-4.3.523-5.826 1.116-1.578.613-2.917 1.434-4.25 2.768-1.335 1.334-2.156 2.673-2.769 4.251-.593 1.527-1 3.271-1.116 5.826-.116 2.56-.144 3.377-.144 9.895s.028 7.335.144 9.895c.117 2.555.523 4.3 1.116 5.826.613 1.578 1.434 2.917 2.768 4.25 1.334 1.335 2.673 2.156 4.251 2.77 1.527.592 3.271.998 5.826 1.115 2.56.116 3.377.144 9.895.144s7.335-.028 9.895-.144c2.555-.117 4.3-.523 5.826-1.116 1.578-.613 2.917-1.434 4.25-2.768 1.335-1.334 2.156-2.673 2.77-4.251.592-1.527.998-3.271 1.115-5.826.116-2.56.144-3.377.144-9.895s-.028-7.335-.144-9.895c-.117-2.555-.523-4.3-1.116-5.826-.613-1.578-1.434-2.917-2.768-4.25-1.334-1.335-2.673-2.156-4.251-2.769-1.527-.593-3.271-1-5.826-1.116-2.56-.116-3.377-.144-9.895-.144zm0 4.324c6.408 0 7.167.025 9.698.14 2.34.107 3.61.498 4.457.827 1.12.435 1.92.955 2.76 1.795.839.84 1.359 1.64 1.794 2.76.33.845.72 2.116.827 4.456.115 2.53.14 3.29.14 9.698s-.025 7.167-.14 9.698c-.107 2.34-.498 3.61-.827 4.457-.435 1.12-.955 1.92-1.795 2.76-.84.839-1.64 1.359-2.76 1.794-.845.33-2.116.72-4.456.827-2.53.115-3.29.14-9.698.14-6.409 0-7.168-.025-9.698-.14-2.34-.107-3.61-.498-4.457-.827-1.12-.435-1.92-.955-2.76-1.795-.839-.84-1.359-1.64-1.794-2.76-.33-.845-.72-2.116-.827-4.456-.115-2.53-.14-3.29-.14-9.698s.025-7.167.14-9.698c.107-2.34.498-3.61.827-4.457.435-1.12.955-1.92 1.795-2.76.84-.839 1.64-1.359 2.76-1.794.845-.33 2.116-.72 4.456-.827 2.53-.115 3.29-.14 9.698-.14zm0 7.352c-6.807 0-12.324 5.517-12.324 12.324 0 6.807 5.517 12.324 12.324 12.324 6.807 0 12.324-5.517 12.324-12.324 0-6.807-5.517-12.324-12.324-12.324zM524 192a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm15.691-20.811a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0z" id="Instagram"/>
						</g>
					</g>
				</svg>;
var linkedin = <svg width="22" height="22" fill="#534db8" viewBox="0 5 1036 990">
					<path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
				</svg>;
var skype = <svg width="30" height="30" fill="#534db8" viewBox="0 0 512 512">
				<path d="M436.9 296.8c2.8-12.5 4.2-25.4 4.2-38.7 0-99.7-82-180.6-183.2-180.6-10.7 0-21.1.9-31.3 2.6C210.3 69.9 191 64 170.2 64 111.6 64 64 110.9 64 168.7c0 19.4 5.3 37.5 14.6 53-2.4 11.7-3.7 23.9-3.7 36.3 0 99.8 82 180.6 183.1 180.6 11.5 0 22.7-1 33.5-3 15 7.9 32.1 12.4 50.2 12.4 58.7 0 106.2-46.9 106.2-104.7.1-16.7-3.9-32.5-11-46.5zm-85 47.5c-8.5 11.8-21 21.2-37.2 27.8-16.1 6.6-35.3 9.9-57.3 9.9-26.3 0-48.3-4.6-65.6-13.6-12.3-6.6-22.4-15.4-30.2-26.4-7.8-11-11.7-22-11.7-32.6 0-6.6 2.6-12.3 7.6-17.1 5-4.6 11.5-7 19.1-7 6.3 0 11.7 1.8 16.1 5.5 4.2 3.5 7.8 8.7 10.7 15.5 3.3 7.3 6.8 13.5 10.6 18.4 3.6 4.7 8.7 8.6 15.3 11.7 6.7 3.1 15.6 4.7 26.6 4.7 15.1 0 27.5-3.2 36.8-9.5 9.2-6.1 13.6-13.5 13.6-22.5 0-7.1-2.3-12.7-7.1-17.1-5-4.6-11.5-8.2-19.6-10.6-8.3-2.6-19.6-5.3-33.6-8.2-19-4-35.1-8.8-48-14.2-13.1-5.5-23.7-13.2-31.5-22.7-7.9-9.7-11.8-21.9-11.8-36.2 0-13.7 4.2-25.9 12.4-36.5 8.2-10.5 20.1-18.7 35.6-24.3 15.2-5.6 33.3-8.4 53.7-8.4 16.4 0 30.7 1.9 42.7 5.5 12.1 3.7 22.2 8.7 30.3 14.9 8 6.2 14 12.8 17.8 19.7 3.8 7 5.7 13.9 5.7 20.6 0 6.4-2.5 12.3-7.5 17.4-5 5.1-11.3 7.8-18.8 7.8-6.8 0-12.1-1.6-15.8-4.8-3.4-3-7-7.6-10.9-14.3-4.6-8.5-10.1-15.3-16.4-20.1-6.2-4.6-16.4-7-30.6-7-13.1 0-23.8 2.6-31.7 7.7-7.6 4.9-11.3 10.6-11.3 17.3 0 4.1 1.2 7.5 3.7 10.5 2.6 3.1 6.2 5.9 10.9 8.2 4.8 2.4 9.8 4.3 14.7 5.6 5.1 1.4 13.6 3.5 25.3 6.1 14.9 3.1 28.5 6.7 40.5 10.4 12.2 3.9 22.7 8.6 31.3 14.1 8.8 5.6 15.7 12.9 20.7 21.5 4.9 8.6 7.4 19.4 7.4 31.8.4 15.1-3.9 28.7-12.5 40.5z"/>
			</svg>;


class Footer extends Component{	  
	constructor(props){
		super(props)
		this.state = {
			socialmedia: [],
			isLoading : false,
			brandlogos: [],
			path: '',
			isLoading2 : false
		}
	}
	fetchData = () => {
		fetch(`https://www.helpfulinsightsolution.com/api/v1/footersocialmedia`)
		.then(response => response.json())
		.then(data => {
				this.setState({
				socialmedia : data.data,
				isLoading: data.success,
				});	
			}
		)
		.catch(error => this.setState({ error, isLoading: false }));

		fetch(`https://www.helpfulinsightsolution.com/api/v1/footerbrandlogos`)
		.then(response => response.json())
		.then(data => {
				this.setState({
				brandlogos : data.data,
				path : data.path,
				isLoading : data.success,
				});	
			}
		)
		.catch(error => this.setState({ error, isLoading: false }));
	 };

	componentDidMount() {
		 this.fetchData();
		$(window).on('load click', function(){
			const page = ['','/','/contact-us','/about-us','/services','/portfolio'];
			var x;
			for (x of page){
				if(window.location.pathname == '/radheshyam/helpfulinsight'+ x){
					$("#main-footer").removeClass("innerFooter");
				}
			}
		})				
    }	
    render(){     		
       return (<>			
			<footer id="main-footer" className="main-footer innerFooter">
				<Container className="widgets-section">
						<Row>
							<div className="big-column col-lg-6 col-md-12 col-sm-12">
								<Row className="clearfix">
									<div className="footer-column col-lg-7 col-md-6 col-sm-12">
										<div className="footer-widget logo-widget">
											<div className="logo">
												<NavLink exact to='/' ><img src={logowhite} alt="logo" className="img-fluid" /></NavLink>
											</div>
											<div className="text">We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. About more than 25 years of experience and 1000 of innovative achievements.</div>
											<ul className="social-box list-unstyled mb-0">
												 {
                            
													this.state.isLoading ? ( 
														this.state.socialmedia.map((val,index) => {
															return (<>
																		<li>
																			<a href={val.link} target="_blanck" title={val.title}>
																				<svg width="25" height="25" fill="#534db8" data-name="Layer 1" viewBox="0 0 24 24">
																				<path d={val.image}/>
																			</svg>
																			</a>
																		</li>
																	</>)
														})
													)
													: (<div className="w-100 text-center"><SyncLoader size={20} color={"#fff"} /></div>)
												}	
												
											</ul>
										</div>
									</div>
									<div className="footer-column col-lg-5 col-md-6 col-sm-12">
										<div className="footer-widget links-widget">
											<h5>Quick Links</h5>
											<ul className="list-link list-unstyled mb-0">
												<li><NavLink exact to='/about-us' >Who We Are</NavLink></li>
												<li><NavLink exact to='/portfolio' >Why Us</NavLink></li>
												<li><NavLink exact to='/services' >Services</NavLink></li>
												<li><NavLink exact to='/portfolio' >Our Portfolio</NavLink></li>
												<li><NavLink exact to='/contact-us' >Contact Us</NavLink></li>
												<li><NavLink exact to='/contact-us' >Free Consultation</NavLink></li>
											</ul>
										</div>
									</div>
								</Row>
							</div>
							<div className="big-column col-lg-6 col-md-12 col-sm-12">
								<Row className="clearfix">
									<div className="footer-column col-lg-6 col-md-6 col-sm-12">
										<div className="footer-widget news-widget">
											<h5>Services</h5>
											<ul className="list-link list-unstyled mb-0">
												<li><NavLink exact to="/cross-platform-development">Cross Platform</NavLink></li>
												<li><NavLink exact to="/hybrid-development">Hybrid</NavLink></li>
												<li><NavLink exact to="/php-development">PHP Development</NavLink></li>
												<li><NavLink exact to="/cms-development">CMS Development</NavLink></li>
												<li><NavLink exact to="/ui-ux-development">UI/UX Design</NavLink></li>
												<li><NavLink exact to="/psd-to-wordpress-development">PSD to WordPress</NavLink></li>
												<li><NavLink exact to="/e-commerce-development">E commerce Development</NavLink></li>
											</ul>
										</div>
									</div>
									<div className="footer-column col-lg-6 col-md-6 col-sm-12">
										<div className="footer-widget contact-widget">
											<h5>Contact Us</h5>
											<ul className="list-unstyled mb-0">
												<li>
													<span className="icon flaticon-placeholder-2"></span>
													<strong>Address</strong>
													<a href="https://g.page/HelpfulInsight?share" target="new" >
														54/220, Mansarover, Jaipur, <br/>India 302020
													</a>
												</li>
												<li>
													<span className="icon flaticon-phone-call"></span>
													<strong>Phone</strong>
													<a href="tel:+919001721837">+91 9001721837</a>
												</li>
												<li>
													<span className="icon flaticon-email-1"></span>
													<strong>E-Mail</strong>
													<a href="mailto:info@helpfulinsightsolution.com">info@helpfulinsightsolution.com</a>
												</li>
											</ul>
										</div>
									</div>
								</Row>
							</div>
						</Row>
						<Row>
							<Col md={12} lg={12}>
								<div className="brand_logos my-5">
									<ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center mb-0">
										{
											this.state.isLoading ? (
											this.state.brandlogos.map((val,index) => {
												return <BrandLogos logo={this.state.path + val.image} url={val.link} />
											})
											):(<div className="w-100 text-center"><SyncLoader size={20} color={"#fff"} /></div>)
										}
									</ul>
								</div>
							</Col>
						</Row>
					<div className="footer-bottom text-center">
						<div class="copyright">Copyright © 2020 <a className="text-white" target="_blank" href="https://www.helpfulinsightsolution.com"><b>Helpful Insight Solution</b></a>. All Rights Reserved.</div>
					</div>
				</Container>
			</footer>
        </>
    )};
}

export default Footer;

