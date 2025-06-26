
'use client';

import Image from "next/image";
import styles from "./hero.module.css";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";



export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/hero.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className={styles.hero}>
      {/* <Image
        src="/images/main.jpg"
        alt="Main"
        width={1200}
        height={600}
        className={styles.heroImage}
      /> */}

      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Yahoo!, 私 は <span className={styles.name}>ゼィヤー</span><br />
            です。
          </h1>
          <h2 className={styles.subtitle}>
            Webプログラミングを学んでいる2年生の学生です。
          </h2>
          <p className={styles.description}>
            最新の技術を使って、自分のスキルを磨いています。ポートフォリオをご覧ください！
          </p>
          
        </div>

        
      </div>
      {animationData && (
          <div className={styles.animation}>
            <Lottie animationData={animationData} loop={true} />
          </div>
        )}
    </section>
  );
}
