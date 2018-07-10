import React, { Component } from 'react'
import '../../styleSheets/loading.css'
import Lottie from 'react-lottie';
import { loadingHamster } from '../../assets'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingHamster,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'    
    },
    zIndex:11
}
export default class LoadingScreen extends Component {
    render() {
        return (
            <div>
                <div className="loaderWrapper">
                    <div className="loader">

                        <Lottie options={defaultOptions}
                        />
                        {/* <svg viewBox="0 0 571 517">
                            <g className="plane">
                                <path d="M495.7 257.76l-.1 12.17-20.73 35.33 8.36 23.97 7.3 20.88 6.74 19.3-9.33 15.4-34.27-51-34.77 39.5c-.73 1.08-1.46 2-2.2 2.8l11.72 19.3-8.2 11.4-13.68-20.4-1.08-.8-8.92 9.45-1.38-1.85 6.76-10.15-3.1-2.23-19.3-6.4 7.62-10.56 22.68 7.2c.3-.6.6-1.2 1.02-1.77L437.5 321l-.6-.48-61.7-19.5 10.5-12.08 21.8.7 21.8.66 28.78.9.2.15L483 262.7l12.76-4.9z" />
                                <path d="M400.3 390.32s-.32.7-1.34 2.02c-1.26 1.5-2.7 3.17-5 5.76-4.37 4.88-11.13 11.88-21.14 19.18-5 3.67-10.84 7.3-17.5 10.76l-2.53 1.3-2.7 1.24c-1.8.86-3.6 1.63-5.5 2.44-3.78 1.55-7.7 3.04-11.86 4.35-16.55 5.34-36.28 8.37-57.7 7.46-5.36-.24-10.8-.7-16.34-1.4-5.52-.74-11.1-1.75-16.74-3-11.28-2.5-22.7-6.1-33.9-11.04-22.5-9.8-44.1-24.8-62.3-44-4.57-4.8-8.96-9.8-13.05-15.1l-1.5-2-.8-1.1-.7-1-1.44-2.08-1.44-2.13c-1.9-2.84-3.7-5.7-5.35-8.7-6.7-11.8-11.75-24.6-15.8-37.75-3.9-13.2-6.73-26.83-8.3-40.7-.8-6.9-1.3-13.9-1.44-20.9-.2-7.03-.03-14.08.47-21.1 1.05-14.1 3.4-28.16 7.5-41.76 2.1-6.8 4.5-13.5 7.37-19.98 2.9-6.5 6.17-12.8 9.8-18.86 7.34-12.1 16.15-23.2 26.1-32.9 9.92-9.76 20.93-18.15 32.47-25.1 2.9-1.8 5.8-3.4 8.75-5l4.45-2.3 1.1-.58.3-.17.37-.16.54-.25 2.13-1.08 1.07-.52 1.17-.5 2.3-1.02c1.5-.7 3-1.3 4.5-1.96l4.54-1.8 4.58-1.7c12.17-4.37 24.5-7.4 36.66-9.4 24.32-3.9 47.92-3.1 69 .96 10.53 2.1 20.42 5.08 29.53 8.66 9.1 3.57 17.35 7.9 24.74 12.5 7.4 4.65 13.8 9.7 19.33 14.8 2.77 2.5 5.26 5.13 7.6 7.63 2.3 2.54 4.4 5.03 6.3 7.5 7.6 9.83 11.94 18.55 14.6 24.54.66 1.5 1.2 2.86 1.64 4 .5 1.18.88 2.16 1.1 2.96l.9 2.4-1.3.55-1.15-2.23c-.37-.73-.84-1.66-1.44-2.73s-1.28-2.3-2.1-3.7c-3.26-5.53-8.44-13.44-16.5-22.1-4.07-4.3-8.84-8.8-14.4-13.17-2.8-2.15-5.8-4.32-9-6.4-3.24-2.04-6.6-4.13-10.2-6.03-3.6-1.9-7.4-3.74-11.37-5.44-4-1.7-8.2-3.25-12.5-4.7-8.67-2.88-18.04-5.15-27.95-6.58-19.8-3.04-41.8-2.8-64.33 1.32-11.26 2.03-22.66 5.1-34 9.15l-4.22 1.54c-1.4.56-2.8 1.1-4.23 1.7-1.4.6-2.85 1.14-4.2 1.75l-2.07.9-1 .46-1.1.5-2.16 1.03-.56.23-.2.1-.25.12-1.03.53-4.14 2.05c-2.7 1.5-5.46 2.9-8.13 4.5-21.57 12.38-41.16 29.96-55.35 52-14.26 21.96-23.64 47.75-27.45 74.6-.95 6.7-1.55 13.5-1.83 20.3-.27 6.8-.1 13.6.3 20.4.94 13.6 3.2 27.05 7 39.98 3.8 12.9 8.96 25.34 15.9 36.5.8 1.4 1.73 2.74 2.62 4.1.93 1.33 1.86 2.7 2.83 3.95l1.42 1.9 1.54 1.93.8.97.78.9 1.6 1.83c4.37 4.82 8.9 9.4 13.6 13.64 9.5 8.5 19.68 15.8 30.1 22.03 5.2 3.15 10.5 6 15.87 8.6 5.3 2.6 10.7 4.94 16.06 7.1 5.36 2.1 10.7 4.05 16.04 5.7 5.3 1.7 10.6 3.1 15.9 4.4 10.5 2.46 20.9 4 30.9 4.7 20 1.4 38.5-.55 54.34-4.58 3.95-.98 7.74-2.15 11.36-3.35 1.8-.6 3.6-1.2 5.35-1.85l2.55-.96 2.46-1.03c6.6-2.7 12.4-5.74 17.5-8.7 5.18-2.96 9.5-6 13.27-8.75 3.78-2.7 6.78-5.3 9.25-7.36 3.1-2.96 4.57-5.2 5.8-6.9 1.23-1.2 1.48.2 1.48.2l1.07.93z" />
                            </g>
                        </svg> */}
                    </div>
                </div>
            </div>
        )
    }
}
