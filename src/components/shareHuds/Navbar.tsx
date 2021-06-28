import './Navbar.css';
import React, { useEffect, useRef } from 'react';
import { Job, Nav } from './Type';

interface IProps {
  job: Job | null;
  setJob: React.Dispatch<React.SetStateAction<Job | null>>;
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<Nav>>;
}

function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  onClick: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);
}

export default function Navbar(props: IProps) {
  const onClickSelectJob = () => {
    if (props.nav !== 'SelectJob') {
      props.setNav('SelectJob');
    } else {
      props.setNav('None');
    }
  };

  const onClickCreateHotbar = () => {
    if (props.nav !== 'CreateHotbar') {
      props.setNav('CreateHotbar');
    } else {
      props.setNav('None');
    }
  };

  const onClickSelectJobOutside = () => {
    if (props.nav === 'SelectJob') {
      props.setNav('None');
    }
  };

  const onClickCreateHotbarOutside = () => {
    if (props.nav === 'CreateHotbar') {
      props.setNav('None');
    }
  };

  const selectJobRef = useRef(null);
  useOutsideAlerter(selectJobRef, onClickSelectJobOutside);

  const createHotbarRef = useRef(null);
  useOutsideAlerter(createHotbarRef, onClickCreateHotbarOutside);

  const jobList: { key: Job; value: string }[] = [
    { key: 'PLD', value: '나이트' },
    { key: 'WAR', value: '전사' },
    { key: 'DRK', value: '암흑기사' },
    { key: 'GNB', value: '건브레이커' },
    { key: 'WHM', value: '백마도사' },
    { key: 'SCH', value: '학자' },
    { key: 'AST', value: '점성술사' },
    { key: 'MNK', value: '몽크' },
    { key: 'DRG', value: '용기사' },
    { key: 'NIN', value: '닌자' },
    { key: 'SAM', value: '사무라이' },
    { key: 'BRD', value: '음유시인' },
    { key: 'MCH', value: '기공사' },
    { key: 'DNC', value: '무도가' },
    { key: 'BLM', value: '흑마도사' },
    { key: 'SMN', value: '소환사' },
    { key: 'RDM', value: '적마도사' }
  ];

  const dropdownItems = jobList.map((item, index) => {
    const className =
      item.key === props.job ? 'dropdown-item selected' : 'dropdown-item';
    const onClick = () => {
      props.setJob(item.key);
      props.setNav('None');
    };
    return (
      <div className={className} onClick={onClick} key={index}>
        {item.value}
      </div>
    );
  });

  let selectJobText = '잡 선택';
  let selectJobTextClassName = 'text';
  jobList.forEach((item) => {
    if (item.key === props.job) {
      selectJobText = item.value;
      selectJobTextClassName = 'text selected';
    }
  });

  return (
    <div className="Navbar">
      <div className="padding"></div>
      <div className="item" ref={selectJobRef}>
        <div className={selectJobTextClassName} onClick={onClickSelectJob}>
          {selectJobText}
        </div>
        <div
          className={`dropdown ${props.nav === 'SelectJob' ? 'active' : ''}`}>
          {dropdownItems}
        </div>
      </div>
      <div className="item" ref={createHotbarRef}>
        <div className="text" onClick={onClickCreateHotbar}>
          단축바 생성
        </div>
        <div
          className={`dropdown ${
            props.nav === 'CreateHotbar' ? 'active' : ''
          }`}>
          <div className="dropdown-item">12×1</div>
          <div className="dropdown-item">6×2</div>
          <div className="dropdown-item">4×3</div>
          <div className="dropdown-item">3×4</div>
          <div className="dropdown-item">2×6</div>
          <div className="dropdown-item">1×12</div>
        </div>
      </div>
      <div className="item">
        <div className="text">단축키 할당</div>
      </div>
      <div className="item">
        <div className="text">스킬 할당</div>
      </div>
      <div className="padding"></div>
    </div>
  );
}
