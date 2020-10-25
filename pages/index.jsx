import Head from "next/head";
import Layout from "../components/layout";
import Styles from "../styles/pages/index.module.scss";
import Link from "next/link";
export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Dark-Mode Nextjs | Shareef</title>
            </Head>
            <>
                <div className={Styles.introSection}>
                    <h2>Introduction</h2>
                    <p>
                        This is a demo website to teach people "How to add a
                        dark theme to{" "}
                        <Link href="https://nextjs.org/">
                            <a>NextJS</a>
                        </Link>{" "}
                        website" using the{" "}
                        <Link href="https://github.com/donavon/use-dark-mode">
                            <a>"use-dark-mode"</a>
                        </Link>{" "}
                        react hook and SCSS.
                    </p>
                    {/* <p>
                        If you have set background color and text color other
                        than default Black(#000) and White(#fff) then you have
                        to specify an id for the element then call it in the{" "}
                        <code>
                            <i>body.dark-mode</i>
                        </code>
                        .For example:- I have set background color and text
                        color of the{" "}
                        <code>
                            <i>About</i>
                        </code>
                    </p>
                    <p>
                        View the source for this{" "}
                        <a href="https://codesandbox.io/s/mzj64x80ny">
                            demo app
                        </a>{" "}
                        or see the useDarkMode{" "}
                        <a href="https://github.com/donavon/use-dark-mode">
                            source code on Github
                        </a>
                        .
                    </p> */}
                </div>
                <div className={Styles.others}>
                    <h2>Other resources</h2>
                    <p>
                        If you are building website with React{" "}
                        <Link href="">
                            <a>check this out</a>
                        </Link>{" "}
                        or using Gatsby{" "}
                        <Link href="https://joshwcomeau.com/gatsby/dark-mode/">
                            <a>Check this out</a>
                        </Link>
                    </p>
                </div>
            </>
        </Layout>
    );
}
