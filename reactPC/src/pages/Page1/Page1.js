import React, {Component} from 'react';
import './Page1.css';
import image from './images/23.jpg';

export default class Page1 extends Component {
    render(){
        return (
            <div className="page-box"> 
                this is Page006~ 
                <img src={image} />
            </div>
        )
    }
}
