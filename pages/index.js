import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>LinkedIn Home</title>
        <meta name="description" content="LinkedIn Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       <Header />

       <main className="flex justify-center gap-x-5 px-4 sm:px-12">
          <div className="flex flex-col md:flex-row gap-5">
             {/* sidebar */}
             <Sidebar />
              {/* Feed */}
          </div>
         {/* widgets */}
       </main>
      </div>
    </div>
  )
}
