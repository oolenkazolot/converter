import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a className={style.footer__link} href="https://github.com/oolenkazolot" target="_blank">
        © 2023 Volha Zalatarova, <br />
        All Rights Reserved.
      </a>
    </footer>
  );
};
