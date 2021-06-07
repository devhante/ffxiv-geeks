import './Header.css';
import React, { useState } from 'react';

interface IProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header(props: IProps) {
  const [shareHudsClass, setShareHudsClass] = useState('button');
  const [skillQuizClass, setSkillQuizClass] = useState('button');

  const handleClickTitle = () => {
    props.setPage('Main');
    setShareHudsClass('button');
    setSkillQuizClass('button');
  };

  const handleClickShareHudsButton = () => {
    props.setPage('ShareHuds');
    setShareHudsClass('button active');
    setSkillQuizClass('button');
  };

  const handleClickSkillQuizClass = () => {
    props.setPage('SkillQuiz');
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
