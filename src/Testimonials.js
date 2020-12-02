import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Slider from "react-slick";
// import nouser from './assets/images/no-user-image.png';
// import React, {Component,Fragment} from 'react';
const imgstyle = {
    top: 0,
    left: 0,
    right: 0,
    width: '95px',
    height: '95px',
    margin: 'auto',
    display: 'block',
    color: '#f2f2f2',
    fontSize: '18px',
    lineHeight: '46px',
    descriptionAlign: 'center',
    position: 'relative',
    borderRadius: '50%',
    boxShadow: '-6px 6px 6px rgba(0, 0, 0, 0.23)'
}


var settings = {
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

// let SlideData = [
//     {
//         description : 'I was SO very happy with the work, the speed, the communication an the willingness to help to the best way possible. Very pleased with their work Will diffidently select them for future work.',
//         name : 'Yariv G.',
//         country : 'Israel'
//     },
//     {
//         description : 'I was SO very happy with the work, the speed, the communication an the willingness to help to the best way possible. Very pleased with their work Will diffidently select them for future work.',
//         name : 'Yariv D.',
//         country : 'Israel'
//     },
//     {
//         description : 'I was SO very happy with the work, the speed, the communication an the willingness to help to the best way possible. Very pleased with their work Will diffidently select them for future work.',
//         name : 'Yariv G.',
//         country : 'Israel'
//     }   
     
// ]

const Slideitem = (props) => {
    return (<>
            <div className="item">
                <div className="testimonial4_slide">
                    <img style={imgstyle}  src={props.image} className="rounded-50 img-fluid" alt="" />
                    <p>{props.description}</p>
                    <h4>{props.name}</h4>
                    <h4>{props.country}</h4>
                </div>
			</div>
    </>);
};


class Testimonials extends Component{
	constructor(props){
        super(props)
        this.state = {
            slideData: [],
            path: ''
        }
    }
    fetchData = () => {
		fetch(`http://helpfulinsightdemo.com/helpfulinsight/public/api/v1/testimonials`)
		.then(response => response.json())
		.then(data =>
			this.setState({
			    slideData: data.data,
			    path: data.path,
			})
		)
     }
     
     componentDidMount() {
		this.fetchData();		
	}	
    
    render(){     
       return (<>
            <div className="stratup_testimonial_info d-flex align-items-center">
                <section className="testimonial description-center ">
                    <Container>
                        <Slider id = "testimonial4" {...settings} className="owl-theme slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x">
                            {
                                this.state.slideData.map((val,index) => {
                                    return <Slideitem image={this.state.path + val.image} description={val.description} name={val.name}  country={val.country}  ></Slideitem>
                                })
                            }
                        </Slider> 
                    </Container>
                </section>
            </div>
        </>
    )};

}

export default Testimonials;


