import Head from 'next/head'
import Banner from '../components/banner'


export default function Home() {
  const handlebannerbtnclick=()=>{
    console.log('hello google')
  }
  return (
    <div>
      <Head>
        <title>NearCoffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main>
  <Banner buttontext="View Shops Nearby" handleClick={handlebannerbtnclick}/>
</main>

      
    </div>
  )
}
