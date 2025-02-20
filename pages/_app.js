import "@/styles/globals.css";
import Head from "next/head"; // นำเข้า Head

function App({ Component, pageProps }) {
  return (
    <>
      {/* ใช้ <Head> เพื่อใส่ meta tag ที่จำเป็น */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
        {/* สามารถใส่ meta tag อื่นๆ ได้ที่นี่ */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
