import './Header.css';
import React, { useState } from 'react';

export default function Header() {
  const [activePage, setActivePage] = useState('main');
  const [shareHudsClass, setShareHudsClass] = useState('button');
  const [skillQuizClass, setSkillQuizClass] = useState('button');

  const handleClickTitle = () => {
    setActivePage('main');
    setShareHudsClass('button');
    setSkillQuizClass('button');
  };

  const handleClickShareHudsButton = () => {
    setActivePage('shareHuds');
    setShareHudsClass('button active');
    setSkillQuizClass('button');
  };

  const handleClickSkillQuizClass = () => {
    setActivePage('skillQuiz');
    setShareHudsClass('button');
    setSkillQuizClass('button active');
  };

  return (
    <div className="Header">
      <div className="title" onClick={handleClickTitle}>
        FFXIV Geeks
      </div>
      <div
        className={shareHudsClass}
        data-test-id="share-huds-button"
        onClick={handleClickShareHudsButton}>
        Share HUDs
      </div>
      <div className={skillQuizClass} onClick={handleClickSkillQuizClass}>
        Skill Quiz
      </div>
    </div>
  );
}
