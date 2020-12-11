import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Container,Row,Col} from 'react-bootstrap';
import {SyncLoader} from "react-spinners";
import $ from 'jquery' // node module
import {WebButton} from '../components/WebBase';
import {Logo} from '../WebData';



class Header extends Component{	  
	constructor(props){
		super(props);
		this.state = {
            isLoading: false,
            categories: [],
            error: null
        };
	};

	fetchData = () => {
		fetch(`https://www.helpfulinsightsolution.com/api/v1/categories`)
		.then(response => response.json())
		.then(data =>
			this.setState({
				categories: data.data,
				isLoading: data.success,
			})
		)
		.catch(error => this.setState({ error, isLoading: false }));
 	};

	componentDidMount() {
		this.fetchData();
        //Header
		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 0) {
				$("#header-fix").addClass("active");
			} else {
				$("#header-fix").removeClass("active");
			}
		});	
		
		$(window).on('click load', function(){
			if(window.location.pathname == '/radheshyam/helpfulinsight/' || window.location.pathname == '/' ){
				$("#header-fix").removeClass("innerheader");
			}else{
				$("#header-fix").addClass("innerheader ");
			}
		})				
	}	
	

    render(){     		
       return (<>
			<header id="header-fix" className={"header fixed-top"}>
				<div className="top_header_bar d-none d-lg-block">
					<Container>
						<Row>
							<Col md={12}>
								<ul className="top_menu_head list-inline text-right mb-0">
								{
									this.props.contactdata.map( val => {
											const {email,skype,watsapp} = val;  
                                            return (
                                                <>													
													<li className="list-inline-item">
														<a href={"skype:"+skype}>
															<i className="flaticon-laptop"></i> 
															{skype}
														</a>
													</li>
													<li className="list-inline-item">
														<a href={"mailto:"+email}>
															<i className="flaticon-email"></i>  
															{email}
														</a>
													</li>
													<li className="list-inline-item">
														<a href={"tel:"+watsapp}>
															<i className="flaticon-phone-call"></i>  
															+91-{watsapp}
														</a>
													</li>
												</>)
									})
								}
							</ul>
							</Col>
						</Row>    
					</Container>
				</div>
				<Container>
					<Navbar className='p-0' expand="lg">
						<NavLink className="navbar-brand mr-0 p-0" to="/"><img src={Logo} alt="" className="img-fluid" /></NavLink>
						<button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
							<span className="navbar-toggler-icon"></span>
							<span className="navbar-toggler-icon"></span>
						</button>
						<Navbar.Collapse id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<NavLink className="nav-link" exact to="/about-us">About</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/services" className="nav-link">Services</NavLink>
										<div className="dropdown">
										<div className="sub-menu-section">
											<div className="container">
												<div className="col-md-12">
													<div className="sub-menu-center-block cus-full-block rows">
														
														{this.state.error ? <p>{this.state.error.message}</p> : null}
														{ 
															this.state.isLoading ? (
																this.state.categories.map( cat => {
																	const { id,parent_id, name, created_at} = cat;
																	if(!parent_id){
																		return (<>
																			<div className="sub-menu-sec" id={id}>
																					<div className="menuHeadTitle"><a tabindex="-1">{name}</a>
																						<ul>
																							{
																							this.state.categories.map((cat2, i) => {
																								if(id == cat2.parent_id){
																									return(<>
																										<li><NavLink to={'/' + cat2.name.toLowerCase().split(' ').join('-') } >{cat2.name}</NavLink></li>
																									</>)}
																								})
																							}
																						</ul>
																					</div>   
																				</div>                                                                                  
																			</>);                                                
																	} 
																})
															) : (<div className="w-100 text-center"><SyncLoader size={20} color={"#fff"} /></div>)
														}
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" exact to="/portfolio">Portfolio</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
								</li>
							</ul>
							<div className="form-inline header_right">
								<WebButton className='btn-outline-white' name={'Free Consultation'} link={'/contact-us'} />
							</div>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</header>
        </>
    )};

}

export default Header;

