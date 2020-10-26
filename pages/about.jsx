import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Styles from "../styles/pages/about.module.scss";

export default function About() {
    return (
        <Layout>
            <Head></Head>
            <section id="about" className={Styles.aboutSection}>
                <div>
                    <h2>About</h2>
                    <p>Toggle the dark-mode to see difference.</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sapiente ducimus illum minima neque non corporis,
                        aspernatur nisi error ad illo temporibus, nobis, nihil
                        voluptates? Alias enim nam corrupti suscipit tenetur.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
