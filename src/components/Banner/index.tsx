import React from 'react';
import Image from 'next/image';
import style from './banner.module.scss';

const pix = 150;

const Banner = (): JSX.Element => {
  return (
    <div className={style.banner}>
      <Image
        className={style.logo}
        src="/longtail.png"
        alt="next-typescript-boilerplate"
        width={pix}
        height={pix}
      />

      <h1 className={style.title}>Title</h1>

      <h2 className={style.subtitle}>Subtitle</h2>
    </div>
  );
};

export default Banner;
