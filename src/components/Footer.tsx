import Link from "next/link"
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <>
      <nav className={styles.footer}>
        <img src="./images/footerlogo.jpg" alt="" width={200} height={200}/>
        <div className={styles.footIcons}>
          <ul>
            <Link href="/" className={styles.links}>Home</Link>
            <Link href="/about" className={styles.links}>About</Link>
            <Link href="#service" className={styles.links}>Service</Link>
            <Link href="/contact" className={styles.links}>Contact</Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Footer
