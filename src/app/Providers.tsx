'use client';
import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <div className='select-none dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen'> */}
      <div className=''>
        { children }
      </div>
    </ThemeProvider>
  )
}

export default Providers
