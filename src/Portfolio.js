import React, {Component} from 'react';
import {InnerArea} from './WebBase';
import {Container,Row,Col} from 'react-bootstrap';
import {WebButton, SecHeading ,PortfolioCard} from './WebBase';
import {ContactForm} from './Contact';
import $ from 'jquery' // node module
import {SyncLoader} from "react-spinners";

var heading = "Our Portfolio";


class PortfolioSec extends Component {
    constructor(props){
        super(props)
        this.state = {
            limit : 3,
            category_id : this.props.category_id,
            pegePorrtfolio: [],
            path:'',
            isLoading : false,
            PortfolioData : []
        }
    };
    onLoadMore = () =>{
        if(this.state.limit < this.state.PortfolioData.length){
             this.setState({
                limit: this.state.limit + 3
            })
        }else{
            document.getElementById('loadMore').style.display = 'none';
        }
       
    };
    fetchData = () => {
		fetch(`https://www.helpfulinsightsolution.com/api/v1/portfolios`)
		.then(response => response.json())
		.then(data =>
			this.setState({
			PortfolioData : data.data,
			isLoading: data.success,
			path: data.path,
			})
		)
		.catch(error => this.setState({ error, isLoading: false }));
     };
     
    fetchDataCat = () => {
		fetch(`https://www.helpfulinsightsolution.com/api/v1/categories/${this.props.category_id}/portfolio`)
		.then(response => response.json())
        .then(data => {
            this.setState({
                pegePorrtfolio: data.data.portfolios,
            });
            if(this.state.pegePorrtfolio.length == 0 && this.props.category_id){
                $('.portfolio').css('display','none')
            }
        })
		.catch(error => this.setState({ error, isLoading: false }));
 	};
    componentDidMount() {		
        this.fetchData();
        if(this.props.category_id){
             this.fetchDataCat();
        }
    }	
    render(){
    return (<>
            {
               
                    <section className="portfolio">
                        <Container>
                            <Row>
                                <Col md={12} lg={12}>
                                    <SecHeading className="workHeading fancy" title={'Our Portfolio'} />
                                <div className="design-img"><img src="https://www.bvmsolution.com/public/web-assets/images/port1.png" alt="dots" className="port1" /></div>
                                </Col>
                            </Row>
                            <Row>
                                {
                                    this.state.PortfolioData.length > 0 ? (
                                        this.state.pegePorrtfolio && this.props.category_id ? ( 
                                                this.state.pegePorrtfolio.map((val,index) => {
                                                    return <PortfolioCard name={val.name} url={val.url} image={this.state.path + val.image}  description={val.description} />
                                                })
                                            ) : (
                                                this.state.PortfolioData.slice(0,this.state.limit).map((val,index) => {
                                                    return <PortfolioCard name={val.name} url={val.url} image={this.state.path + val.image}  description={val.description} />
                                                }) 
                                            )
                                    ) : (<div className="w-100 text-center"><SyncLoader size={20} color={"#534db8"} /></div>)
                                }				 		
                            </Row>
                            <Row>
                                <Col md={12} className="text-center pt-5 view_more_portfolio">
                                    {
                                        this.state.PortfolioData.length > 3 ? (
                                            this.props.loadMore ? (
                                                <button id='loadMore' className="loadMore btn place-order button btnprimary" onClick={this.onLoadMore} >Load More Portfolio</button>
                                            ):(
                                                <WebButton className="viewMore place-order button btnprimary" link={'/portfolio'} name={'View More Portfolio'}  />
                                            )
                                        ) : ('')
                                    }                   
                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={12}>
                                <div className="design-img2">
                                    <img src="https://www.bvmsolution.com/public/web-assets/images/port1.png" alt="dots" width="135" height="129" className="port1" />
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
            }
            
        </>)}
};

class Portfolio extends Component{
    constructor(props){
        super(props)
        this.state = {
            loadMore : this.props.loadMore
        }
    };
    render(){   
       return (<>
            <InnerArea ineerheading={heading} />
            <PortfolioSec loadMore={this.state.loadMore} />   
            <div className="clearfix"></div>
    	</>
    )};

}

export {Portfolio, PortfolioSec};

