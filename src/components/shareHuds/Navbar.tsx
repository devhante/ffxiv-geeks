import './Navbar.css';
import React, { useEffect, useRef } from 'react';
import { Hotbar, Job, Mode, Nav } from './Type';

interface IProps {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  nav: Nav;
  setNav: React.Dispatch<React.SetStateAction<Nav>>;
  job: Job | null;
  setJob: React.Dispatch<React.SetStateAction<Job | null>>;
  hotbar: Hotbar | null;
  setHotbar: React.Dispatch<React.SetStateAction<Hotbar | null>>;
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

  const selectJobItems = jobList.map((item, index) => {
    const className =
      item.key === props.job ? 'dropdown-item selected' : 'dropdown-item';
    const onClick = () => {
      props.setNav('None');
      props.setJob(item.key);
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

  const hotbarList: { key: Hotbar; value: string }[] = [
    { key: '12×1', value: '12×1' },
    { key: '6×2', value: '6×2' },
    { key: '4×3', value: '4×3' },
    { key: '3×4', value: '3×4' },
    { key: '2×6', value: '2×6' },
    { key: '1×12', value: '1×12' }
  ];

  const createHotbarItems = hotbarList.map((item, index) => {
    const className =
      item.key === props.hotbar ? 'dropdown-item selected' : 'dropdown-item';
    const onClick = () => {
      props.setMode('CreateHotbar');
      props.setNav('None');
      props.setHotbar(item.key);
    };
    return (
      <div className={className} onClick={onClick} key={index}>
        {item.value}
      </div>
    );
  });

  let createHotbarText = '단축바 생성';
  let createHotbarTextClassName = 'text';
  hotbarList.forEach((item) => {
    if (item.key === props.hotbar) {
      createHotbarText = item.value;
      createHotbarTextClassName = 'text selected';
    }
  });

  const handleClickAssignHotkey = () => {
    props.setMode('AssignHotkey');
    props.setHotbar(null);
  };

  const handleClickAssignSkill = () => {
    props.setMode('AssignSkill');
    props.setHotbar(null);
  };

  return (
    <div className="Navbar">
      <div className="padding"></div>
      <div className="item" ref={selectJobRef}>
        <div className={selectJobTextClassName} onClick={onClickSelectJob}>
          {selectJobText}
        </div>
        <div
          className={`dropdown ${props.nav === 'SelectJob' ? 'active' : ''}`}>
          {selectJobItems}
        </div>
      </div>
      <div className="item" ref={createHotbarRef}>
        <div
          className={createHotbarTextClassName}
          onClick={onClickCreateHotbar}>
          {createHotbarText}
        </div>
        <div
          className={`dropdown ${
            props.nav === 'CreateHotbar' ? 'active' : ''
          }`}>
          {createHotbarItems}
        </div>
      </div>
      <div className="item">
        <div
          className={props.mode === 'AssignHotkey' ? 'text selected' : 'text'}
          onClick={handleClickAssignHotkey}>
          단축키 할당
        </div>
      </div>
      <div className="item">
        <div
          className={props.mode === 'AssignSkill' ? 'text selected' : 'text'}
          onClick={handleClickAssignSkill}>
          스킬 할당
        </div>
      </div>
      <div className="padding"></div>
    </div>
  );
}
