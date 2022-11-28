import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/*<meta property="og:title" content="Nicole Ng" key="title" />*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
