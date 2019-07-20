import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <footer className="bck_black">
        <Zoom duration={500} delay={500}>
        <img style={{width:'120px' , height:'120px'}} src={require('../../resources/images/final.png')} />
        
        </Zoom>
             
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Venue Club</div>
                <div className="footer_copyright">
                    <div className="center_wrapper">
                    
                Venue Club is Pakistan's innovative venue booking portal where you can browse and 
                compare hundreds of venues, explore their facilities, check their prices and 
                availability, and even book them through only a few clicks*<br/><br/>
                    Venue Club 2019. All rights reserved
                    </div>
                </div>
            </Fade>
            
        </footer>
    );
};

export default Footer;