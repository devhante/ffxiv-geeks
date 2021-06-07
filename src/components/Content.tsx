import './Content.css';
import React from 'react';
import Main from './main/Main';
import ShareHuds from './shareHuds/ShareHuds';
import SkillQuiz from './skillQuiz/SkillQuiz';

interface IProps {
  page: string;
}

export default function Content(props: IProps) {
  let content = <></>;
  switch (props.page) {
    case 'Main':
      content = <Main />;
      break;
    case 'ShareHuds':
      content = <ShareHuds />;
      break;
    case 'SkillQuiz':
      content = <SkillQuiz />;
  }
  return <div className="Content">{content}</div>;
}
