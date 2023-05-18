import { IResult } from '@/interface';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'

interface Props {
  result: IResult;
}

export default function Card({ result }: Props) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt={ result.title ?? 'sample alt' }
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={
            {
              maxWidth: "100%",
              height: "auto",
            }
          }
        />
        <div className=''>
          <p className='line-clamp-2'>{result.overview}</p>
          <h2 className='text-lg font-bold'>
            {result.title}
          </h2>
          <p>
            {result.release_date}
            <div className='flex items-center gap-1'><FiThumbsUp className='h-5'/>{result.vote_count}</div>
          </p>
        </div>
      </Link>
    </div>
  )
}
