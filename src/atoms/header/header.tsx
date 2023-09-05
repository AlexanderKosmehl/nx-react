import styles from './header.module.css'

/* eslint-disable-next-line */
export interface HeaderProps {
  text: string
}

export function Header({ text }: HeaderProps) {
  return <h1 className={styles.header}>{text}</h1>
}

export default Header
