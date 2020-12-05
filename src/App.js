import React, {Component} from 'react';
import {BrowserRouter, Switch,Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import MasterPage from './MasterPage';
import {Portfolio} from './Portfolio';
import Services from './Services';
import {Contact} from './Contact';
import {About} from './About';
import ScrollToTop from './ScrollToTop';
import {crossplatformdevelopment,hybriddevelopment,nativedevelopment,reactnativedevelopment,phpdevelopment,cmsdevelopment,trandingjsdevelopment,customplugindevelopment,
 uiuxdevelopment,emailtemplatedevelopment,psdtowordpressdevelopment,ecommercedevelopment,restapiintegration,paymentgateways,ondemandsdevelopment} from './WebPageData';

class App extends Component{	
    constructor(props){
        super(props)
        this.state = {
            contactdata: [],
            isLoading:false
        }
    }
    fetchData = () => {
		fetch(`https://www.helpfulinsightsolution.com/api/v1/formsidebardetails`)
		.then(response => response.json())
		.then(data =>
			{
                this.setState({
                    contactdata: data.data,
                    isLoading: data.success
                });
            }
		)
     }     
    componentDidMount() {
		this.fetchData();		
    }
    
    render(){     
            return (<>
            <BrowserRouter basename='/radheshyam/helpfulinsight/'>
                <ScrollToTop />
                <Header contactdata={this.state.contactdata}/>
                    <Switch>
                        <Route exact path="/" component={() => <Home/> } />
                        <Route exact path="/about-us" component={About} />
                        <Route exact path="/portfolio" component={() => <Portfolio loadMore={true} ></Portfolio>} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/contact-us" component={() => <Contact contactIds={this.state.contactdata} />} />
                        <Route exact path="/cross-platform-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={crossplatformdevelopment} /> } />
                        <Route exact path="/hybrid-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={hybriddevelopment} /> } />
                        <Route exact path="/native-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={nativedevelopment} /> } />
                        <Route exact path="/react-native-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={reactnativedevelopment} /> } />
                        <Route exact path="/php-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={phpdevelopment} /> } />
                        <Route exact path="/cms-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={cmsdevelopment} /> } />
                        <Route exact path="/tranding-js-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={trandingjsdevelopment} /> } />
                        <Route exact path="/custom-plugin-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={customplugindevelopment} /> } />
                        <Route exact path="/ui-ux-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={uiuxdevelopment} /> } />
                        <Route exact path="/email-template-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={emailtemplatedevelopment} /> } />
                        <Route exact path="/psd-to-wordpress-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={psdtowordpressdevelopment} /> } />
                        <Route exact path="/e-commerce-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={ecommercedevelopment} /> } />
                        <Route exact path="/rest-api-integration" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={restapiintegration} /> } />
                        <Route exact path="/payment-gateways" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={paymentgateways} /> } />
                        <Route exact path="/on-demands-development" component={() => <MasterPage contactIds={this.state.contactdata} pageUrl={ondemandsdevelopment} /> } />
                        <Redirect to="/" ></Redirect>
                    </Switch>
                <Footer/>
            </BrowserRouter>
        </> )
    }
}
// const App = () => {    
//     return (<>
//             <BrowserRouter>
//                 <Header/>
//                     <Switch>
//                         <Route exact path="/" component={() => <Home/> } />
//                         <Route exact path="/portfolio" component={Portfolio} />
//                         <Route exact path="/services" component={Services} />
//                         <Redirect to="/" ></Redirect>
//                     </Switch>
//                 <Footer/>
//             </BrowserRouter>
//         </> )
// }

export default App;

