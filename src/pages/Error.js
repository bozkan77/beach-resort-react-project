import React from 'react';
import {Link} from 'react-router-dom';

// custom component
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Sayfa bulunamadı">
        <Link to="/" className="btn-primary">Anasayfa</Link>
      </Banner>
    </Hero>
    
  )
}

export default Error
