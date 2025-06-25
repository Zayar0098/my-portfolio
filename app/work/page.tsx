import Link from "next/link";
import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <main id="work" className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        ここでは自分がこれまで制作してきたアプリやサイトを紹介します。各作品のサムネイルや簡単な説明文、GitHub リンクを載せましょう。
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>作品名 1</h3>
          <p>HTML/CSS を使って作ったサイト</p>
          <Link href="https://my-project-lq8x.vercel.app/index.html" className={styles.link}>
            GitHub リポジトリはこちら
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>作品名 2</h3>
          <p>ポートフォリオサイト</p>
          <Link href="https://github.com/username/project2" className={styles.link}>
            GitHub リポジトリはこちら
          </Link>
        </li>
        {/* 必要に応じてリストを追加 */}
      </ul>
    </main>
  );
}
