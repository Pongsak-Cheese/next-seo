// pages/index.js
import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | My Website</title>
        <meta
              name="description"
              content="Welcome to our amazing React app with SEO optimization using react-helmet-async!"
            />
            <meta
              name="keywords"
              content="React, SEO, Web Development, Frontend, JavaScript"
            />
            <meta name="author" content="Your Name" />
            <meta
              property="og:title"
              content="ชื่อเรื่องของคุณ aaaaaaaaaaaaaa"
            />
            <meta property="og:description" content="คำอธิบายสำหรับแชร์" />
            <meta
              property="og:image"
              content="https://i.imgur.com/jya3K7n.jpeg"
            />
            <meta
              property="og:image:secure_url"
              content="https://i.imgur.com/jya3K7n.jpeg"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="675" />
      </Head>

      <div style={styles.container}>
        <h1>Welcome to My Next.js App!</h1>
        <p>Discover the latest news and updates.</p>

        {/* ปุ่มไปยังหน้าข่าว */}
        <Link href="/news">
          <button style={styles.button}>Go to News</button>
        </Link>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#0070f3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#005bb5",
  },
};
