import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import {SyncLoader} from "react-spinners";
import $ from 'jquery' // node module
import {BrandLogos} from '../components/WebBase';
import { logoWhite } from '../WebData';

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
												<NavLink exact to='/' ><img src={logoWhite} alt="logo" className="img-fluid" /></NavLink>
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
						<div className="copyright">Copyright © 2020 <a className="text-white" target="_blank" href="https://www.helpfulinsightsolution.com"><b>Helpful Insight Solution</b></a>. All Rights Reserved.</div>
					</div>
				</Container>
			</footer>

			<div className="floatmenu">
            <p>
          	    <img src="https://www.helpfulinsightsolution.com/frontend/images/contact-floting-icon.png" alt="" width="38" height="38" className="alignnone size-full wp-image-1663" />
                <NavLink exact to='/contact-us' >contact</NavLink>
            </p>
        </div>
        </>
    )};
}

export default Footer;

