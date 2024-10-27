import Header from "../components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css"

const About = () => {
  return (
    <>
      <div className={styles.main}>
      <Header />
      <h1>About Us</h1>

    </div>
        <section className={styles.about}>
        <img src="./images/about.png" alt="" />
        <div>
          <h1>About Us</h1>
          <p>
            At SuperAppDevelopers, we are passionate about creating apps that don’t just meet the 
            demands of today but also drive the possibilities of tomorrow. With expertise across mobile 
            and web app development, we focus on delivering innovative, scalable, and user-friendly 
            solutions that truly make an impact. Our team of experienced developers, designers, and 
            strategists work closely with each client, understanding their unique needs and transforming 
            them into powerful digital experiences.Our mission is simple: to turn ideas into seamless, 
            high-performing applications that fuel growth and foster engagement. Whether you’re an 
            emerging startup or a well-established business, we approach every project with the same 
            dedication, precision, and commitment to excellence. We don’t just build apps; we build 
            partnerships. Let’s connect and create something extraordinary together!
          </p>
        </div>
      </section>

    <Footer />
    </>
  )
}

export default About
