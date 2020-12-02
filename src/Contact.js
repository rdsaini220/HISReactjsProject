import React, {Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {InnerArea} from './WebBase';
import {FormCard,IdCard} from './FormCard';
import {IdData} from './WebData';
var heading = "We Don't Just Build IT Solutions";

class ContactForm extends Component{
    render(){   
       return (<>
            <section className="payment_subscribe_area py-0">
                <Container>
                    <div className={"payment_subscribe_info quoteBox " + this.props.className}>
                        <Row className="align-items-center">
                            <div className="col-lg-7">
                                <div className="LeftBox">
                                    <h3 className="h_head">Get in touch</h3>
                                    <FormCard />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="RightformColumn">
                                    <h3 className="h_head text-white mb-4">Say Hi!</h3>
                                    {
                                        IdData.map((val,index) => {
                                            return <IdCard iconClass={val.iconClass} text={val.text} userid={val.userid} />
                                        })
                                    }
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>
    	</>
    )};

}

class Contact extends Component{
    render(){   
       return (<>
            <InnerArea ineerheading={heading} />
            <section className="contact-info-section">
                <Container>
                    <div className="title-box text-center mb-5">
                        <h1>A Monthly Project Fee Price Plans</h1>
                        <div className="text">For genereal enquires you can touch with our front desk supporting team <br/> at 
                        <a href="#" className="text-primary">info@example.com</a> or call on 
                        <a href="#" className="text-primary">+8.555.55.55</a></div>
                    </div>
                    <ContactForm className={'mb-0'} />
                </Container>
             </section>
            <div className="clearfix"></div>
    	</>
    )};

}

export {ContactForm,Contact};

