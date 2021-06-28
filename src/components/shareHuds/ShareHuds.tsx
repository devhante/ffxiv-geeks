import './ShareHuds.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Job, Nav } from './Type';

export default function ShareHuds() {
  const [nav, setNav] = useState<Nav>('None');
  const [job, setJob] = useState<Job | null>(null);
  return (
    <div className="ShareHuds">
      <Navbar job={job} setJob={setJob} nav={nav} setNav={setNav} />
    </div>
  );
}
