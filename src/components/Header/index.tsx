import React from 'react';
import Link from 'next/link';
import { getUser } from '../../store/user/userReducer';
import { useAppSelector } from '../../store/hooks';
import style from './header.module.scss';

const Header = (): JSX.Element => {
  const user = useAppSelector(getUser); // pulled from redux global state
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <nav className={style.navRoot}>
          <div className={style.listItems}>
            <Link href="/">Home</Link>
            <Link href="/graph">Graph</Link>
            <Link href="/debug">Debug</Link>
            <Link href="/login">Login</Link>
          </div>

          <div className={style.space} />
          <div className={style.listItems}>{user}</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
