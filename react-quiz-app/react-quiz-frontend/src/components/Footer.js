import React from 'react';

const Footer = ()=>(
  <div className='footer'>
    <div className='footer__first-div'>
      <div className='left'>Left</div>
      <div className='right'>
        <div><img src="/images/icons/facebook.svg" alt=""/></div>
        <div><img src="/images/icons/linked-in.svg" alt=""/></div>
        <div><img src="/images/icons/github.svg" alt=""/></div>
      </div>
    </div>
    <div className="footer__second-div">
      Bottom
      {/* <i>Developed by - Anurag Yadav</i> */}
    </div>
  </div>
);

export default Footer;