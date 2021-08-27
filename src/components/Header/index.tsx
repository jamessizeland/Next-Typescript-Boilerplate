import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import type { RootState } from '../../redux/store';
import style from './header.module.scss';

const Header = ({ user }: RootState): JSX.Element => {
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
          <div className={style.listItems}>{user.currentUser}</div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  ...state,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
