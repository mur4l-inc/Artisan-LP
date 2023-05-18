
// import Image from 'next/image'
// import MyComponent from './MyComponent';
// import Nav from '@/components/Navbar';
import { IResult } from '@/interface';
import Results from '@/components/Results';

export const dynamic='force-dynamic';
const API_KEY = process.env.API_KEY

export default async function Home() {
  // const genre = 'fetchTopRated';

    // res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated'
    //   ? 'movie/top_rated' :
    //     'trending/all/week'
    // }?api_key=${API_KEY}&language=en-US&page=1`, { next: {revalidate: 100000 }})
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  const results = data.results as IResult[]

  console.log({results})

  return (
    <>
    {/* min-h-screen  */}
      <main className="flex flex-col items-center justify-between p-4">
        {/* <Nav /> */}
        {/* <MyComponent /> */}
        <Results results={results}></Results>

      </main>
    </>
  )
}

