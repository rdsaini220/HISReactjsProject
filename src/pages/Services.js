import React, {Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {InnerArea,ServiceCard} from '../components/WebBase';
import {serviceData} from '../WebData';

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

