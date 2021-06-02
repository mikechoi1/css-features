import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className='hero'>
                <h1 className='hero__heading'>Hi, this is the hero</h1>
            </section>
            <svg style={{display: 'block', backgroundColor: '#5E81AC'}} viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg"><path fill='#81A1C1' d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"></path></svg>
            {/* <svg style={{display: 'block', backgroundColor: '#5E81AC'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="aquamarine" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        </div>
    );
}

export default Hero;