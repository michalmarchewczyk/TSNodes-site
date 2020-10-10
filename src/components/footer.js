import React from 'react';
import footerStyles from './footer.module.scss';


const Footer = () => {
    const date = new Date().getFullYear();
    const copyright = date === 2020 ? '2020' : `2020 - ${date}`;
    
    return (
        <footer className={footerStyles.footer}>
            <span>Copyright © {copyright} <a href='https://marchewczyk.eu'>Michał Marchewczyk</a></span>
            <span>Released under the <a
                href='https://github.com/michalmarchewczyk/TSNodes-site/blob/master/LICENSE'>MIT License</a></span>
            <div>
                <span><a href='https://github.com/michalmarchewczyk/TSNodes'>GitHub</a></span>
                <span><a href='https://www.npmjs.com/package/tsnodes'>npm</a></span>
            </div>
        </footer>
    );
};

export default Footer;
