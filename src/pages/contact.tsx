import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css"
import Link from "next/link"
const contact = () => {
  return (
    <>
    <div className={styles.main}>
      <Header />
      <h1>Contact</h1>
    </div>

      <section className={styles.contact}>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Enter Your Name"/>

        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter Your Email"/>

        <Link href="mailto:bhatti3993@gmail.com" className={styles.contactbtn}>Contact Now</Link>

      </section>
      <Footer />
    </>
  )
}

export default contact
