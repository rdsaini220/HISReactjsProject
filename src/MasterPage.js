import React, {Component} from 'react';
import {InnerArea,MainServiceSec,TechnologyLogos} from './WebBase';
import {PortfolioSec} from './Portfolio';
import {ContactForm} from './Contact';
import { Markup } from 'interweave';


class MasterPage extends Component{
	constructor(props){
		super(props);
		this.state = {
            isLoading: false,
            pageData: undefined,
            pagePortfolio: [],
            error: null
        };
	};

	fetchData = () => {		
			this.setState({
				pageData: this.props.pageUrl,
				isLoading: true,
			})
		// fetch(`http://helpfulinsightdemo.com/helpfulinsight/public/api/v1/categories`)
		// .then(response => response.json())
		// .then(data =>
		// 	this.setState({
		// 	categories: data.data,
		// 	isLoading: data.success,
		// 	})
		// )
		// .catch(error => this.setState({ error, isLoading: false }));
 	};

	componentDidMount() {
		this.fetchData();					
	}	

    render(){   
       return (<>
	   		{ 
				this.state.isLoading ? (
					this.state.pageData.map( page => {
						const { title,image,text,technologies,category_id,contantform } = page;
							return (<>
								  	<InnerArea ineerheading={title}></InnerArea>
									<MainServiceSec title={title} image={image}>
										<Markup content={text} ></Markup>
									</MainServiceSec>	
									<section className="main-service-sec bgprimaryNew">
										<div className="container ser-vc-on">
											<div className="row align-items-center">
												<div className="col-12 col-lg-12">
													<div className="ServiceHeading mb-5 text-white text-center">
														<h2 className="text-white text-uppercase mb-2">Different Technologies for Our Clients</h2>
														<p className="lato">Web development has progressed a way better than we think over the years. Your website is the first and best impression of your organization to users, so Appic Software lets you opt for the best services out of different web portals.</p>
													</div>
													<div className="technology_logos">
														<ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center mb-0">
															{
																technologies.map((val,index) => {
																	return <TechnologyLogos logo={val.logo} title={val.name} />
																})
															}  	
														</ul>
													</div>
												</div>
											</div>
										</div>
									</section>	
									{
										category_id ? (
											<PortfolioSec category_id={category_id} />
										): ('')
									}
									{
										contantform ? (
											<ContactForm />
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

