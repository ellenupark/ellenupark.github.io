import React from 'react';
import Canvas from '../components/Canvas'

const Main = () => {
    return (
        <div className='main'>
            <Canvas />
            <div id="intro">
                <p>Hi there! I'm <span class='bold color-change'>Ellen Park</span>, a Brooklyn based Korean-American Full Stack Engineer.</p>
            </div>
        </div>
    );
};

export default Main;