// pages/news/[slug].js
import Head from "next/head";

export default function NewsDetail({ news }) {
  return (
    <>
      <Head>
        <title>ข่าว 11111 | ข่าวสารล่าสุด</title>
        <meta name="description" content="ข่าวสารล่าสุด1111111111" />
        <meta
          name="keywords"
          content="React, SEO, Web Development, Frontend, JavaScript"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="ข่าว 11111" />
        <meta property="og:description" content="คำอธิบายสำหรับแชร์" />
        <meta property="og:image" content="https://i.imgur.com/zHvlVyk.png" />
        <meta
          property="og:image:secure_url"
          content="https://i.imgur.com/zHvlVyk.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
      </Head>

      <h1>ข่าว 11111</h1>
      <p>ข่าว 11111</p>
    </>
  );
}

// export async function getServerSideProps(context) {
//   // ดึงค่า slug จาก URL
//   const { slug } = context.params;

//   // เรียก API เพื่อดึงข้อมูลข่าว
//   const res = await fetch(`https://api.example.com/news/${slug}`);
//   const news = await res.json();

//   // กรณีไม่พบข้อมูล
//   if (!news) {
//     return {
//       notFound: true, // Next.js จะคืนหน้า 404
//     };
//   }

//   return {
//     props: {
//       news, // ส่งข้อมูลข่าวไปยังคอมโพเนนต์
//     },
//   };
// }
