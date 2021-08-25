import React from 'react';
import style from './footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={style.root}>
      <div className={style.container}>
        <div className={style.row}>
          <a
            className={style.link}
            href="https://nextjs.org/features/server-side-rendering"
            rel="noopener noreferrer"
            target="_blank"
          >
            SSR
          </a>

          <a
            className={style.link}
            href="https://nextjs.org/features/static-exporting"
            rel="noopener noreferrer"
            target="_blank"
          >
            Static Exporting
          </a>

          <a
            className={style.link}
            href="https://nextjs.org/features/css-in-js"
            rel="noopener noreferrer"
            target="_blank"
          >
            CSS-in-JS
          </a>

          <a
            className={style.link}
            href="https://nextjs.org/features/progressive-web-apps"
            rel="noopener noreferrer"
            target="_blank"
          >
            PWA
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
