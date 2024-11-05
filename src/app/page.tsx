import styles from "../app/style.module.css";
import Image from "next/image";
import tahapic from "../../image/temp_image_20241104_235926_2b7cc9f9-95d8-49fa-83ba-1af6794ea400.jpg";
import Instagram from "../../image/Instagram-Logo-PNG-Free-Download.png";
import it from "../../image/temp_image_20241104_235253_2b22b67a-455e-4309-a47b-438f187fde7c.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className={styles.section}>
        <h1 className={styles.headline}>Welcome to My Site</h1>
        <div className={styles.imageCenter}>
          <Image src={tahapic} alt="Taha's pic" height={200} width={200} />
        </div>
        <p className={styles.description}>
          Hello, I am Taha Qureshi. I have expertise in web development and UI design.
        </p>
      </section>

      <section id="about" className={styles.section}>
        <h2 className={styles.subHeadline}>About Me</h2>
        <p>Currently working at a distribution company managing their website.</p>
        <p>Also working on my own projects.</p>
        <p>My latest work:</p>
        <div className={styles.imageCenter}>
          <Image src={it} alt="Project image" height={170} width={170} />
        </div>
        <ul>
          <li>
            <a href="https://milestone5-updatecopy.vercel.app/">
              <button>Resume Builder</button>
            </a>
          </li>
          <li>
            <a href="https://simple-html-foam-taha.vercel.app/">
              <button>Access Foam</button>
            </a>
          </li>
        </ul>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.subHeadline}>Contact Us</h2>
        <p>If you need any help, feel free to contact me.</p>
        <label>
          Name: <input type="text" placeholder="Enter your name" />
        </label>
        <br /><br />
        <label>
          E-mail: <input type="email" placeholder="Enter your email" />
        </label>
        <br /><br />
        <label>
          Contact Number: <input type="number" placeholder="Enter your number" />
        </label>
        <br />
      </section>

      <footer className={styles.footer}>
        <p>© 2024 My Site. All rights reserved.</p>
      </footer>

      <section id="sociallink" className={styles.socialLinks}>
        <a href="https://www.instagram.com/723_taha?igsh=N254aGVsZ24yeGFn">
          <Image src={Instagram} alt="Instagram" height={24} width={24} /> Insta
        </a>
        <a href="https://github.com/Tahaimran56">GitHub</a>
        <a href="https://www.linkedin.com/in/taha-khan-37a5792a6/">LinkedIn</a>
      </section>
    </div>
  );
}
