import React from 'react';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    return (
        <div className='layout'>
        <Nav user={props.user} />
        <div className='layout-children'>
          {props.children}
        </div>
        <Footer className="footer"/>
        </div>
    );
};

export default Layout;