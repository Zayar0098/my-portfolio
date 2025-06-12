import styles from "./page.module.css";

export default function SkillPage() {
  return (
    <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>
      <ul className={styles.skillList}>
    <li className={styles.skillCard}>HTML / CSS</li>
  <li className={styles.skillCard}>JavaScript (ES6+)</li>
  <li className={styles.skillCard}>TypeScript</li>
  <li className={styles.skillCard}>React / Next.js</li>
  <li className={styles.skillCard}>Node.js / Express（現在学習中）</li>
</ul>

    </main>
  );
}
