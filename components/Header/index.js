import Link from 'next/link'
import Image from 'next/image'
import Menu from '../Menu'
import styles from './Styles.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="#" passHref>
              <a><Image src="/logo.png" alt="Carlos Alberto ETI Logo" width="322" height="94" /></a>
            </Link>
          </div>
          <Menu />
        </header>
    );
}