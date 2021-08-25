import React from 'react';

import style from './banner.module.scss';

const Banner = (): JSX.Element => {
  return (
    <div className={style.banner}>
      <img
        className={style.logo}
        src="/longtail.png"
        alt="next-typescript-boilerplate"
      />

      <h1 className={style.title}>Title</h1>

      <h2 className={style.subtitle}>Subtitle</h2>
    </div>
  );
};

export default Banner;
