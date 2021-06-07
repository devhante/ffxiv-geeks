import './ShareHuds.css';
import React, { useState } from 'react';
import Navbar from './Navbar';

export default function ShareHuds() {
  const [nav, setNav] = useState<string>('None');
  return (
    <div className="ShareHuds">
      <Navbar nav={nav} setNav={setNav} />
    </div>
  );
}
