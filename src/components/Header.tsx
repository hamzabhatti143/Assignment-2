import Link from "next/link"
import styles from "./header.module.css"
const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <img src="./images/logo.jpg" alt="" width={200} height={200}/>
        <div className={styles.navIcons}>
          <ul>
            <Link href="/" className={styles.links}>Home</Link>
            <Link href="/about" className={styles.links}>About</Link>
            <Link href="/contact" className={styles.links}>Contact</Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
