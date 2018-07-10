import React, { Component } from 'react'
import { Circle } from "rc-progress";

import '../styleSheets/landing.css'
export default class ProgressBar extends Component {
  render() {
    return (
        <div className='progressBarContainer'>
            <div style={{    overflow: 'hidden','white-space': 'nowrap'}}>
                <h3 style={{fontSize:'1.3vmax',textAlign:'center'}}>
                    {this.props.skillName}
                </h3>
            </div>
            <Circle trailColor='grey' percent={this.props.progress} strokeWidth="10" strokeColor="#D3D3D3"  />

        </div>

    )
  }
}
