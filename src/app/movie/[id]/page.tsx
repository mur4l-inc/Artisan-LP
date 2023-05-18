import React from 'react'
import Image from 'next/image'
const API_KEY = process.env.API_KEY

async function getMovie(movieId: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}
    ?api_key=${API_KEY}`, { cache: 'no-store' })
  return await res.json()
}

export default async function MoviePage({params}: any) {
  const movie = await getMovie(params.id)

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        {/* {movie.title || movie.name}
        {movie.description} */}
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt={ movie.title ?? 'sample alt' }
          className='rounded-t-lg'
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={
            {
              maxWidth: "100%",
              height: "100%",
            }
          }
        />
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
          <p className='text-lg mb-3 font-semibold'>Overview</p>
          {movie.overview}
        </div>
      </div>
    </div>
  )
}
