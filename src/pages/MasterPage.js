import React, {Component} from 'react';
import PortfolioSec from '../components/PortfolioSec';
import {ContactForm} from '../pages/Contact';
import { IndustriesSec } from '../pages/About';
import {InnerArea,MainServiceSec,TechnologyLogos} from '../components/WebBase';
import { Technology_logo } from '../WebPageData';
import { Markup } from 'interweave';


class MasterPage extends Component{
	constructor(props){
		super(props);
		this.state = {
            isLoading: false,
            pageData: undefined,
            pagePortfolio: [],
			error: null,
        };
	};

	fetchData = () => {		
			this.setState({
				pageData: this.props.pageUrl,
				isLoading: true,
			})
 	};

	componentDidMount() {
		this.fetchData();					
	}	

    render(){   
       return (<>
	   		{ 
				this.state.isLoading ? (
					this.state.pageData.map( page => {
						const { title,image,text,extratext,technologies,category_id,contantform } = page;
							return (<>
								  	<InnerArea ineerheading={title}></InnerArea>
									<MainServiceSec title={title} image={image} extratext={<Markup content={extratext} ></Markup>}>
										<Markup content={text} ></Markup>
									</MainServiceSec>	
									{
										technologies.length > 0 ? (
											<section className="main-service-sec bgprimaryNew">
												<div className="container ser-vc-on">
													<div className="row align-items-center">
														<div className="col-12 col-lg-12">
															<div className="ServiceHeading mb-5 text-white text-center">
																<h2 className="text-white text-uppercase mb-2">Different Technologies for Our Clients</h2>
																<p className="lato">Web development has progressed a way better than we think over the years. Your website is the first and best impression of your organization to users, so Appic Software lets you opt for the best services out of different web portals.</p>
															</div>
															<div className="technology_logos">
																<ul className="list-unstyled d-flex flex-wrap align-items-center mb-0">
																	{
																		Technology_logo.map((val,index) => {
																			for(var x of technologies){
																				if(x === val.id){
																					return <TechnologyLogos logo={val.image} title={val.name} />																					
																				}
																			}	
																		})																		
																	}  	
																</ul>
															</div>
														</div>
													</div>
												</div>
											</section>	
										):( 
											technologies === true ? (<IndustriesSec /> ): ('')											
										) 
									}
									{
										category_id ? (
											<PortfolioSec category_id={category_id} />
										): ('')
									}
									{
										contantform ? (
											<ContactForm ContactData={this.props.contactIds} />
										): ('')
									}
									<div className="clearfix"></div>                                                               
							</>);     
					})
				) : (<h3>Loading...</h3>)
			}            
    	</>
    )};

}

export default MasterPage;

