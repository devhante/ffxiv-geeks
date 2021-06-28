import './ShareHuds.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Hotbar, Job, Mode, Nav } from './Type';

export default function ShareHuds() {
  const [mode, setMode] = useState<Mode>('None');
  const [nav, setNav] = useState<Nav>('None');
  const [job, setJob] = useState<Job | null>(null);
  const [hotbar, setHotbar] = useState<Hotbar | null>(null);
  return (
    <div className="ShareHuds">
      <Navbar
        mode={mode}
        setMode={setMode}
        nav={nav}
        setNav={setNav}
        job={job}
        setJob={setJob}
        hotbar={hotbar}
        setHotbar={setHotbar}
      />
    </div>
  );
}
