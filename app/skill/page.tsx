import styles from "./page.module.css";
import Image from "next/image";
import { getskillsList } from "../_libs/microcms";

export default async function SkillPage() {
  const data = await getskillsList();
  
  return (
    <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>
      <ul className={styles.skillList}>
        {data.contents.map((skills)=>(
          <li key = {skills.id} className={styles.skillCard}>
            <Image 
            src={skills.logo.url}
            alt=""
            width={30}
            height={30}
            className={styles.image}/>
            <h4>{skills.logoname}</h4>
            <p>{skills.skilldescription}</p>
          </li>
        
        ))}
{/* 
    <li className={styles.skillCard}>
      <Image
      alt="htmllogo"
      src = "images/html.svg"
      width={30}
      height={30}
      />
      <h4>HTML</h4>
      <p>ウェブサイトの基本構造を作り、フォームや画像、動画を追加できます。</p>
      </li>   */}

</ul>

    </main>
  );
}
