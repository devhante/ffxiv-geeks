import './Navbar.css';
import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
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
  const [dropdown, setDropdown] = useState<string>('None');

  const onClickSelectJob = () => {
    if (dropdown !== 'SelectJob') {
      setDropdown('SelectJob');
    } else {
      setDropdown('None');
    }
  };

  const onClickSelectJobOutside = () => {
    if (dropdown === 'SelectJob') {
      setDropdown('None');
    }
  };

  const onClickCreateHotbar = () => {
    if (dropdown !== 'CreateHotbar') {
      setDropdown('CreateHotbar');
    } else {
      setDropdown('None');
    }
  };

  const onClickCreateHotbarOutside = () => {
    if (dropdown === 'CreateHotbar') {
      setDropdown('None');
    }
  };

  const selectJobRef = useRef(null);
  useOutsideAlerter(selectJobRef, onClickSelectJobOutside);

  const createHotbarRef = useRef(null);
  useOutsideAlerter(createHotbarRef, onClickCreateHotbarOutside);

  return (
    <div className="Navbar">
      <div className="padding"></div>
      <div className="item" ref={selectJobRef}>
        <div className="text" onClick={onClickSelectJob}>
          잡 선택
        </div>
        <div className={`dropdown ${dropdown === 'SelectJob' ? 'active' : ''}`}>
          <div className="dropdown-item">나이트</div>
          <div className="dropdown-item">전사</div>
          <div className="dropdown-item">암흑기사</div>
          <div className="dropdown-item">건브레이커</div>
          <div className="dropdown-item">백마도사</div>
          <div className="dropdown-item">학자</div>
          <div className="dropdown-item">점성술사</div>
          <div className="dropdown-item">몽크</div>
          <div className="dropdown-item">용기사</div>
          <div className="dropdown-item">닌자</div>
          <div className="dropdown-item">사무라이</div>
          <div className="dropdown-item">음유시인</div>
          <div className="dropdown-item">기공사</div>
          <div className="dropdown-item">무도가</div>
          <div className="dropdown-item">흑마도사</div>
          <div className="dropdown-item">소환사</div>
          <div className="dropdown-item">적마도사</div>
        </div>
      </div>
      <div className="item" ref={createHotbarRef}>
        <div className="text" onClick={onClickCreateHotbar}>
          단축바 생성
        </div>
        <div
          className={`dropdown ${dropdown === 'CreateHotbar' ? 'active' : ''}`}>
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
