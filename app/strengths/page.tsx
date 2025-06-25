// app/page.tsx
import React from 'react';
import styles from './page.module.css';

const Strengths = () => {
  const strengths = [
    { title: "聞く力", desc: "相手の話を最後までよく聞き、相手が本当に伝えたいポイントを引き出すことが得意です。よく「聞き上手だね」と言われます。" },
    { title: "論理的思考", desc: "パズルが得意で、ボードゲームで勝つための戦略を立てるのが好きです。推理小説も好んで読み、犯人を先に見抜くことが多いです。" },
    { title: "探究心", desc: "  興味を持ったことや疑問に思ったことは徹底的に調べずにはいられません。「蝶番の歴史を調べたら江戸時代まで遡ってしまった」など、好奇心旺盛です。" },
    { title: "言語", desc: "英語を日常会話レベルで話せます。さらに、○○方言の知識もあり、旅行先でコミュニケーションをとるのが得意です。" },
    
    {
    title: "丁寧さ",
    desc: "コードの書き方やレイアウトなど、細かい部分まで丁寧に取り組むことを大切にしています。特に UI デザインでは、見やすく、使いやすいことを意識して開発しています。"
  },
    {
    title: "向上心",
    desc: "新しい技術や日本の就職文化についても積極的に学んでいます。知らないことをそのままにせず、自分の成長につなげる努力を続けています。",
  },
  ];

  return (
    <div id = "strenghts" className={styles.container}>
      <h1 className={styles.title}>My Strengths</h1>
      <div className={styles.grid}>
        {strengths.map((strength, index) => (
          <div key={index} className={styles.card}>
            
            <h3 className={styles.cardTitle}>{strength.title}</h3>
            <p className={styles.cardDesc}>{strength.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strengths;