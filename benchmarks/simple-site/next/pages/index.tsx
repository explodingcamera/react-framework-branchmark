import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import TextTransition, { presets } from "react-text-transition";
import { useRouter } from "next/router";
import Link from "next/link";

const t = ["text", "more text", "even more text"];

export const Index = () => {
  const [index, setIndex] = useState<number>(0);
  const router = useRouter();

  const login = () => {
    router.replace("/auth");
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.landingpage}>
      <div className={styles.hero}>
        <img src={"/logo.svg"} alt="snowstorm logo" />
        <br />
        <h1>React Framework Benchmark</h1>
        <h2>
          I love{" "}
          <TextTransition
            text={t[index % t.length]}
            inline
            springConfig={presets.default}
          />
        </h2>
        <div className={styles.actions}>
          <button type="button" onClick={login}>
            Authenticate
          </button>
          <Link passHref href="/hi">
            <a>
              <button type="button">button</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
