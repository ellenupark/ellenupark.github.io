import React from 'react';
import Canvas from '../components/Canvas'

const Main = () => {
    return (
        <div className='main'>
            <Canvas />
            <div id="intro">
                <div>
                    <h2 className='bold color-change'>Ellen Park</h2>
                    <p>Full Stack Engineer</p>
                </div>

                
                {/* <p>Hi there! I'm <span className='bold color-change'>Ellen Park</span>, a Brooklyn based Korean-American Full Stack Engineer.</p> */}
            </div>
        </div>
    );
};

export default Main;