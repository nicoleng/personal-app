import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta property="og:title" content="Nicole Ng" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="public/nn.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta charSet="utf-8"/>

                {/*<link rel="shortcut icon" type="image/png"*/}
                {/*      href="/assets/favicon.png"/>*/}

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
