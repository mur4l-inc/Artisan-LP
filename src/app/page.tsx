'use client';
import Image from 'next/image'
import MyComponent from './MyComponent';
import Nav from '@/components/Nav';


const Home: React.FC = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-red-900">test</h1>
        {/* <Nav /> */}
        {/* <MyComponent /> */}

      </main>
    </>
  )
}

export default Home;
