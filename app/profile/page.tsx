import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main id="profile"className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/profile.jpg"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p><strong>名前：</strong>Zayar Aung (ゼィヤー　と読んでください)</p>
          <p><strong>年齢：</strong>24歳</p>
          <p>
            専門学校沖縄ビジネス外語学院 Web プログラミングコースを専攻し、現在はエンジニアを目指して勉強中。
          </p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby2.jpg"
              alt="趣味1"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>アニメ</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby1.jpg"
              alt="趣味2"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>ゲーム</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
    </main>
  );
}
