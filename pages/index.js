import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NoteBook } from "./NoteBook";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Alex } from "./Alex";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoteBook />
      <main className={styles.main}>
        <h1>Alex's digital notebook.</h1>
        <p>
          Not quite a portfolio site or a blog. Just a bunch or random notes,
          similiar to what you might find in a notebook.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex's Digital Notebook 📓
        </a>
      </footer>
    </div>
  );
}
