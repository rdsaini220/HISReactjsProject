import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {InnerArea} from './WebBase';
import {Container,Row,Col} from 'react-bootstrap';

import {serviceData} from './WebData';
import {WebButton,SecHeading, ServiceCard} from './WebBase';

// import {PortfolioData} from './WebData';
// import {WebButton,SecHeading ,PortfolioCard} from './WebBase';
var heading = "Our Portfolio";

class Services extends Component{
    render(){   
       return (<>
            <InnerArea ineerheading={heading} />
            <section class="portfolio">
                <Container>
                    <Row>
                        {
                            serviceData.map((val,index) => {
                                return <ServiceCard extraClass="servicePage" iconClass={val.iconClass} title={val.title} url={val.url} text={val.text} />
                            })
                        }
                    </Row>
                </Container>
		    </section>
            <div className="clearfix"></div>
    	</>
    )};

}

export default Services;

