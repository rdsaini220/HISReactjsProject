import React, {Component} from 'react';
import {InnerArea} from '../components/WebBase';
import PortfolioSec from '../components/PortfolioSec';

var heading = "Our Portfolio";

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

export default Portfolio;

