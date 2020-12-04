import React, {Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import {InnerArea} from './WebBase';
import FormCard from './FormCard';
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
                                        this.props.ContactData.map( val => {
											const {email,skype,watsapp} = val;  
                                            return (
                                                <>
                                                <div className="emailid-block rows">
                                                            <a href={"mailto:"+email} className="transition">
                                                                <i className="flaticon-envelope"></i> 
                                                                <span className="small-text rows">mail to our sales department</span>
                                                                <span className="large-text rows">{email}</span>
                                                            </a>
                                                        </div>
                            
                                                        <div className="emailid-block rows">
                                                            <a href={"skype:"+skype} className="transition">
                                                                <i className="flaticon-chat"></i> 
                                                                <span className="small-text rows">Our Skype Id</span>
                                                                <span className="large-text rows">{skype}</span>
                                                            </a>
                                                        </div>
                            
                                                        <div className="emailid-block rows">
                                                            <a target="_blank" href={"https://web.whatsapp.com/send?phone=+91"+watsapp+"%20&amp;text=Helpful%20Insight%20Solution"} className="transition">
                                                                <i className="flaticon-24-hours-phone-service"></i> 
                                                                <span className="small-text rows">Message On Whatsapp</span>
                                                                <span className="large-text rows">+91-{watsapp}</span>
                                                            </a>
                                                        </div>
                                            </>    
                                            )                                                  
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
                        {
                            this.props.contactIds.map(val => {
                                const {email, watsapp} = val;  
                                return (<>
                                    <div className="text">For genereal enquires you can touch with our front desk supporting team <br/> at 
                                        <a href={"mailto:"+email} className="text-primary"> {email}</a> or call on  
                                        <a href={"tel:"+watsapp} className="text-primary"> (+91) {watsapp}</a>
                                     </div>
                                </>)
                            })
                        }
                    </div>
                    <ContactForm className={'mb-0'} ContactData={this.props.contactIds} />
                </Container>
             </section>
            <div className="clearfix"></div>
    	</>
    )};
}

export {ContactForm,Contact};

