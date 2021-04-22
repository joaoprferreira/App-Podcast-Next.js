import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

import styles from './styles.module.scss';

export function Header() { 
  const cureentDate = new Date().toLocaleDateString()

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>Qui, 8 abril</span>
    </header>
  );
 }