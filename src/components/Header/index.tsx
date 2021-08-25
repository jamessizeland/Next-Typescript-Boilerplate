import React from 'react';
import Link from 'next/link';
import style from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <nav className={style.navRoot}>
          <div className={style.listItem}>
            <Link href="/">Home</Link>
          </div>

          <div className={style.space} />

          <div className={style.listActions}></div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
