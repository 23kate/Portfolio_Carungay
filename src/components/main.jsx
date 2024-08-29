import React from 'react';
import './Main.css'; 
import {TypeAnimation} from 'react-type-animation'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const Main = () => {
    
    const systemBackgroundStyle = {
        height: '100vh', 
        width: '100vw', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
    };

    return (
        <div style={systemBackgroundStyle}>
            <div id='main'>
                <img 
                    className='logo' 
                    src="https://upload.wikimedia.org/wikipedia/en/a/a8/University_of_Mindanao_Logo.png" 
                    alt="University of Mindanao Logo" 
                />
                <img 
                    className='logo' 
                    src="https://academia.umindanao.edu.ph/storage/program/logo/CCE.png" 
                    alt="CCE Logo" 
                />
                <div>
                    <h1>I'm Kristel Kate M. Carungay</h1>
                    <h2>I'm aspiring
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' UI/UX designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Tech Enthusiast',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddigLeft:'5px' }}
      repeat={Infinity}
    />
                    </h2>
                </div>
                <FaFacebook />
                <FaInstagram />
                
            </div>
        </div>
    );
};

export default Main;
