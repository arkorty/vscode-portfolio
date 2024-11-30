import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h2>I&apos;ve got issues</h2>
          <h1>GitHub</h1>
          <h1>issues</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Arkaprabha</h1>
            <h6 className={styles.bio}>Student + Dev + SysAdmin</h6>
            <Link href="/projects">
              <button className={styles.button}>Stuff I Do</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Stalk Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
