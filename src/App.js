import React, {Component} from 'react';
import {BrowserRouter, Switch,Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import MasterPage from './MasterPage';
import {Portfolio} from './Portfolio';
import Services from './Services';
import {Contact} from './Contact';
import About from './About';
import ScrollToTop from './ScrollToTop';
import {crossplatformdevelopment,hybriddevelopment,nativedevelopment,reactnativedevelopment,phpdevelopment,cmsdevelopment,trandingjsdevelopment,customplugindevelopment,
 uiuxdevelopment,emailtemplatedevelopment,psdtowordpressdevelopment,ecommercedevelopment,restapiintegration,paymentgateways,ondemandsdevelopment} from './WebPageData';

class App extends Component{	
    render(){     
            return (<>
            <BrowserRouter basename='/radheshyam/helpfulinsight/'>
                <ScrollToTop />
                <Header/>
                    <Switch>
                        <Route exact path="/" component={() => <Home/> } />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={() => <Portfolio loadMore={true} ></Portfolio>} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/contact-us" component={Contact} />
                        <Route exact path="/cross-platform-development" component={() => <MasterPage pageUrl={crossplatformdevelopment} /> } />
                        <Route exact path="/hybrid-development" component={() => <MasterPage pageUrl={hybriddevelopment} /> } />
                        <Route exact path="/native-development" component={() => <MasterPage pageUrl={nativedevelopment} /> } />
                        <Route exact path="/react-native-development" component={() => <MasterPage pageUrl={reactnativedevelopment} /> } />
                        <Route exact path="/php-development" component={() => <MasterPage pageUrl={phpdevelopment} /> } />
                        <Route exact path="/cms-development" component={() => <MasterPage pageUrl={cmsdevelopment} /> } />
                        <Route exact path="/tranding-js-development" component={() => <MasterPage pageUrl={trandingjsdevelopment} /> } />
                        <Route exact path="/custom-plugin-development" component={() => <MasterPage pageUrl={customplugindevelopment} /> } />
                        <Route exact path="/ui-ux-development" component={() => <MasterPage pageUrl={uiuxdevelopment} /> } />
                        <Route exact path="/email-template-development" component={() => <MasterPage pageUrl={emailtemplatedevelopment} /> } />
                        <Route exact path="/psd-to-wordpress-development" component={() => <MasterPage pageUrl={psdtowordpressdevelopment} /> } />
                        <Route exact path="/e-commerce-development" component={() => <MasterPage pageUrl={ecommercedevelopment} /> } />
                        <Route exact path="/rest-api-integration" component={() => <MasterPage pageUrl={restapiintegration} /> } />
                        <Route exact path="/payment-gateways" component={() => <MasterPage pageUrl={paymentgateways} /> } />
                        <Route exact path="/on-demands-development" component={() => <MasterPage pageUrl={ondemandsdevelopment} /> } />
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

