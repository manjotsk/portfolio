import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as ScrollMagic from 'scrollmagic';
import up from '../assets/up.png'
import land from '../assets/land.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../styleSheets/landing.css'
import ProgressBar from '../components/ProgressBar';
import {TimelineMax, Linear, TweenMax, Power1, Power3, Power4, Power0, Power2} from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import up from '../assets/up.png'
class Landing extends Component {

    componentDidMount(){
        var controller = new ScrollMagic.Controller();

        var horizontalMoveTl = new TimelineMax();
    
        
        horizontalMoveTl
        .to('.horizontal-container', 0.001, {x: '-66.6666%', ease:Power2.easeInOut});
        
        var blurScene=TweenMax.to('#intro-main',0.1,{'filter':'blur(10px)',ease:Power1.easeNone})

        
        new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 1,
            duration: '100%'
        })
        .setTween(blurScene)
        // .addIndicators('blurrrrrrrrrrrrrrrrr')
        .addTo(controller);

        var pinMainScene = new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0,
            duration: '300%'
        })
        .setTween(horizontalMoveTl)
        // .addIndicators()
        .setPin('#main')
        .addTo(controller);
        var imageMover= new ScrollMagic.Scene({
            triggerElement:'#pic1'
        })
    
    }

    render() {
        return <div id="intro1">
        <div id="intro-main">

        </div>
        <div id="intro">
            <div className="content">
                <img src="img/img_scrollmagic-logo.png"/>
                <p id='title'>manjot.in</p>
                <p>{'</FullStackDeveloper>'}</p>
            </div>
            <img id='pic1' src={up}></img>
        </div>

        <div id="main" className="main-container">
            
            <div className="horizontal-container">

                <div className="section-1 section-horizontal">
                    <div className='sectionContainer'>
                        <p className='introPara'>I am a self taught developer.
                             Hailing from the Golden city Amritsar, 
                             it has been a great ride. </p>
                             <p className='introPara'>I stand 6'3"</p>
                        <p className='introPara'>I Love to play Basketball, Shoot Threes and some verticle shy of dunks 🙈 </p>
                        <p className='introPara'>I love to play these Musical Instruments(priority wise)</p>
                        <ul>
                            <li className='introPara'>Guitar(<a href='https://youtu.be/tdN9-F_d8GM' target='_blank'>This one is covered by my</a>)</li>
                            <li className='introPara'>Tabla</li>
                            <li className='introPara'>Harmonium</li>
                        </ul>


                    </div>
                        {/* <img id='landpng' src={land}/> */}
                </div>

                <div className="section-2 section-horizontal">
                    <div className='sectionContainer'>
                        <div>
                        
                        <div className='progressBarContainerWrapper'>
                            <ProgressBar skillName='ReactJS(Web)' progress='70'/>                            
                            <ProgressBar skillName='HTML' progress='80'/>
                            <ProgressBar skillName='NodeJS(ExpressJS)' progress='50'/>                            
                            <ProgressBar skillName='Android(Core)' progress='40'/>                            
                            <ProgressBar skillName='Blender3D' progress='50'/>                    
                        </div>
                        <div className='progressBarContainerWrapper'>
                            <ProgressBar skillName='ReactJS(Native)' progress='75'/>                            
                            <ProgressBar skillName='CSS' progress='70'/>
                            <ProgressBar skillName='Java-Core' progress='60'/>                            
                            <ProgressBar skillName='GIT/GitHub' progress='90'/>
                            <ProgressBar skillName='Google Compute Engine' progress='70'/>                            
                        </div>
                        </div>
                    </div>
                    {/* <img id='landpng' src={land}/> */}
                </div>
                <div className="section-3 section-horizontal">
                    <div className='sectionContainer'>
                        <div>
                            <div className='progressBarContainerWrapper'>
                                <ProgressBar skillName='Photoshop' progress='80'/>                            
                                <ProgressBar skillName='After Effects' progress='60'/>
                                <ProgressBar skillName='Illustrator' progress='50'/>                            
                                <ProgressBar skillName='Python' progress='40'/>                            
                                <ProgressBar skillName='Machine Learning' progress='20'/>                    
                            </div>
                        </div>
                    </div>
                    {/* <img id='landpng' src={land}/> */}
                </div>
                

            </div>

        </div>

        <div id="outro">
            <div className="content">

                <h3><a href='https://github.com/manjotsk' target='_blank'>GitHub</a></h3>
                <h3><a href='https://instagram.com/manjotsinghkalsi' target='_blank'>Instagram</a></h3>
            </div>
            
        </div>
               
        </div>
    }
}

export default Landing;
