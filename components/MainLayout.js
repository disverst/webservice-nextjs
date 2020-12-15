import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title} | webservice</title>
            </Head>
            <main>
                {children}
            </main>

        </>
    )
}
