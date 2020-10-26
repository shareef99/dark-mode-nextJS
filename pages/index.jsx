import Head from "next/head";
import Layout from "../components/layout";
import Styles from "../styles/pages/index.module.scss";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

export default function Home() {
    const darkMode = useDarkMode(false);

    return (
        <Layout>
            <Head>
                <title>Dark-Mode Nextjs | Shareef</title>
            </Head>
            <section>
                <div className={Styles.centerElement}>
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
                        react hook and SCSS. It persists across sessions (i.e.,
                        uses localStorage) and shares state across instances and
                        even tabs and/or browser windows.
                    </p>
                </div>
                <div className={Styles.centerElement}>
                    <h2></h2>
                    <p>
                        If you have set background color and text color other
                        than default colors then you have to specify an id for
                        the element then call it in the <i>body.dark-mode</i>
                        <br /> for example: I have set background color and text
                        color of the <i>About</i> page other than the primary
                        colors.{" "}
                        <Link href="/about">
                            <a>Go to about page</a>
                        </Link>
                        .
                    </p>
                    {/* <p>
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
                <div className={Styles.centerElement}>
                    <p>
                        Looks like dark mode is{" "}
                        <strong>
                            {darkMode.value ? "enabled" : "disabled"}
                        </strong>
                        , turn it{" "}
                        <button
                            className={Styles.btn}
                            onClick={darkMode.toggle}
                        >
                            {darkMode.value ? "off" : "on"}
                        </button>{" "}
                        ?
                    </p>
                </div>
                <div className={Styles.centerElement}>
                    I decided to go with SCSS variables instead of CSS variables
                    because almost all big projects prefer SCSS over CSS, with
                    this approach you can control all your different pages style
                    from <i>body.dark-mode</i> in <i>global.scss</i> file
                </div>
                <div className={Styles.centerElement}>
                    <h2>Other resources</h2>
                    <ul>
                        <li>
                            <Link href="https://github.com/donavon/use-dark-mode">
                                <a>use-dark-mode github</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://codesandbox.io/s/mzj64x80ny?file=/src/App.js">
                                <a>React Dark Mode example.</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://caniuse.com/?search=prefers-color-scheme">
                                <a>Browser supports</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/shareef99/dark-mode-nextJS">
                                <a>source for this demo app</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
}
