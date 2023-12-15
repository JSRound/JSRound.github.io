import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDX'
import '@/styles/globals.css'
import { Inter } from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <MDXProvider components={MDXComponents}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
  )
}

export default MyApp
