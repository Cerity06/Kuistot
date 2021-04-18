import Head from 'next/head'
import Articles from '../components/Articles'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3200/posts'); 
    const data = await res.json();

    return {
        props: { articles: data }
    }
}

export default function Home({articles}) {
  return (
    <div>
      <h1>Actuality</h1>
      <Articles articles={articles} />
    </div>
  )
}
