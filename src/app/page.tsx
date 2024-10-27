import Hero from "@/components/hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import styles from "./index.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <Header />
      <Hero />
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

      <section className={styles.service} id="service">
        <div>
          <h1>Our Services</h1>
          <p>
          At SuperAppDevelopers, we create custom mobile and web apps designed to elevate your business.
          With expertise in development, UI/UX design, and support, we deliver solutions that make an 
          impact and drive success
          </p>
        </div>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceCards}>
            <img src="./images/android.png" alt="" width={250} height={200}/>
            <h2>Android App Development</h2>
            <p>
              Transform your ideas into powerful Android applications with our expert development team. 
              We design, build, and optimize apps that enhance user engagement and drive results. 
              Let us bring your vision to the Android platform with innovative solutions tailored to 
              your goals.
            </p>
            <Link href="/contact" className={styles.btn}>Contact Now</Link>
          </div>
          <div className={styles.serviceCards}>
          <img src="./images/ios.jpg" alt="" width={250} height={200}/>
          <h2>IOS App Development</h2>
          <p>
          Unlock the potential of your ideas with our custom iOS app development services. 
          We create high-performing, intuitive apps tailored for Apple’s ecosystem, ensuring a seamless 
          user experience. From concept to deployment, we bring your vision to the App Store with 
          excellence.
          </p>
          <Link href="/contact" className={styles.btn}>Contact Now</Link>
          </div>
          <div className={styles.serviceCards}>
          <img src="./images/flutter.jpg" alt="" width={250} height={200}/>
          <h2>Flutter App Development</h2>
          <p>
          Build dynamic, cross-platform apps with our Flutter development expertise. We create sleek, 
          high-performance apps that run seamlessly on both iOS and Android. Experience faster 
          development, beautiful design, and efficient performance with Flutter solutions your needs.
          </p>
          <Link href="/contact" className={styles.btn}>Contact Now</Link>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h1>Contact</h1>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Enter Your Name"/>

        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter Your Email"/>

        <Link href="mailto:bhatti3993@gmail.com" className={styles.contactbtn}>Contact Now</Link>

      </section>
      <Footer />
    </>
  );
}
