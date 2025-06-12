"use client";
import Link from 'next/link';
import styles from "./page.module.css";
import Hero from "./component/Hero/hero";
import ProfilePage from "./profile/page";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import WorkPage from "./work/page";
import StrengthsPage from "./strengths/page";

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Zayar Aung</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="#about">About</Link>
          <Link href="#skill">Skills</Link>
          <Link href="#work">Work</Link>
          <Link href="#profile">Profile</Link>
          <Link href="#strengths">Strengths</Link>
        </nav>
      </header>

      <main className={styles.container}>
        <Hero />
        <ProfilePage />
        <AboutPage />
        <SkillPage />
        <WorkPage />
        <StrengthsPage />
      </main>
    </>
  );
}
