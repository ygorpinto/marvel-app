import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <title>Marvel</title>
                <Head>
                <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet"/>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}