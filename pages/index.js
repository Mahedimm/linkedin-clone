import { AnimatePresence } from 'framer-motion';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState, modalTypeState } from '../atoms/modalAtom';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const router = useRouter();
  const {status} = useSession({
    required: true,
    onUnauthenticated(){
      router.push('/home');
    }
  })
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
              <Feed />
          </div>
         {/* widgets */}
         <Widgets />
         <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
       </main>
      </div>
    </div>
  )
}
 export async function getServerSideProps(context) {
    const session = await getSession(context);
    if(!session){
      return{
        redirect:{
          permanent:false,
          destination:'/home'
        }
      }
    }
    return {
      props: {
        session,
      }
    }
  }