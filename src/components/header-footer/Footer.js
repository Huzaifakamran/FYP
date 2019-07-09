import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Venue Club</div>
                <div className="footer_copyright">
                    Venue Club 2019. All rights reserved
                </div>
            </Fade>
        
        </footer>
    );
};

export default Footer;