import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <link rel="icon" type="image/svg+xml" href="/images/icon.svg" />
                </Head>
                <body className="bg-slate-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
