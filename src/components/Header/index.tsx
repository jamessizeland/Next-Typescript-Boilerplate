import React from 'react';
import Link from 'next/link';
import style from './header.module.scss';

// const HeaderRoot = styled('header')`
//   left: 0;
//   width: 100%;
//   height: 64px;
//   position: sticky;
//   top: 0px;
//   z-index: 1000;
// `;

// const HeaderContainer = styled('div')`
//   background: rgba(255, 255, 255, 0.98);
//   box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
// `;

// const NavRoot = styled('nav')`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 16px;
//   height: 64px;
//   max-width: 1024px;
// `;

// const ListItem = styled('div')`
//   display: flex;
// `;

// const ListActions = styled('div')`
//   display: flex;
// `;

// const Space = styled('div')`
//   flex: 1 1 auto;
// `;

const Header = (): JSX.Element => {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <nav className={style.navRoot}>
          <div className={style.listItem}>
            <Link href="/">Home</Link>
          </div>

          <div className={style.space} />

          <div className={style.listActions}>
            <button type="button">button</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
