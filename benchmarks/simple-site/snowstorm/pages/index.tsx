import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import TextTransition, { presets } from "react-text-transition";
import { Link, useLocation } from "@snowstorm/core";

import logo from "./../assets/logo.svg";

const t = ["text", "more text", "even more text"];

export const Index = () => {
  const [index, setIndex] = useState<number>(0);
  const [, setLocation] = useLocation();

  const login = () => {
    setLocation("/auth");
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.landingpage}>
      <div className={styles.hero}>
        <img src={logo} />
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
          <Link to="/hi">
            <button type="button">button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
