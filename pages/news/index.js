// pages/news/index.js
import Link from "next/link";

export default function News({ newsList }) {
  return (
    <div>
      <h1>News List</h1>
      <ul>
        <Link href={`/news/ข่าว1`}>ข่าว 1</Link>
        {/* {newsList.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              {news.title}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://api.example.com/news");
//   const newsList = await res.json();

//   return {
//     props: {
//       newsList,
//     },
//   };
// }
