
// import Image from 'next/image'
import MyComponent from './MyComponent';
import Nav from '@/components/Navbar';
import { IResult } from '@/interface';
import Results from '@/components/Results';
import Image from 'next/image';

const API_KEY = process.env.API_KEY

export default async function Home() {

  return (
    <>
    {/* min-h-screen  */}
      <main className="">
        {/* <Nav /> */}

        <article className="border-2 border-pink-500">
          <section className="flex flex-col max-w-5xl w-full mx-auto border-4 border-pink-800 p-2 bg-pink-200">
            <div className="flex flex-1 mb-2">

              <div className="flex-1 bg-slate-200">
                <div className="flex flex-col">
                  <Image
                    src='/next.svg'
                    width="200"
                    height="100"
                    alt="logo" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni!</p>
                  <p>Lorem, ipsum dolor.</p>
                  <button>お問合せはこちら</button>
                </div>
              </div>
              <div className="flex-1 bg-slate-300">
                <Image
                  src="https://image.tmdb.org/t/p/original/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg"
                  width="200"
                  height="100"
                  alt="logo"
                />
              </div>

            </div>
            <div className="flex flex-1 bg-amber-500 p-2">
              <div className="flex w-full">
                <div className="flex-1">
                  <Image
                    src="https://image.tmdb.org/t/p/original/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg"
                    width="200"
                    height="100"
                    alt="logo"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <h2>About</h2>

                    <div className="flex">
                      <p><ruby data-ruby="アルチザン">ARTISAN<rt></rt></ruby>とは</p>
                      <Image
                        src="/vercel.svg"
                        width="200"
                        height="100"
                        alt="logo"
                      />
                    </div>

                    <p>BodyテキストBodyテキストBodyテキストBodyテキストBodyテキスト</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <article className="border-2 border-green-500">
          <section className="max-w-5xl w-full mx-auto border-4 border-green-800">
            sss
          </section>
        </article>


        {/* <MyComponent /> */}

      </main>
    </>
  )
}

