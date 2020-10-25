import React from "react";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                {/* Favicon */}
                <link
                    rel="shortcut icon"
                    href="../images/s-logo.png"
                    type="image/x-icon"
                />
                {/* Google Font Link*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
}
