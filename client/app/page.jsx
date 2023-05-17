import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import LastMatches from './LastMatches'

export default function Home() {
  return (
    <main>
      <Header />
      <div class="flex flex-row">
        <Sidebar />
        <div class="grid grid-flow-col">
          <LastMatches />
          <LastMatches />
          <LastMatches />
        </div>
      </div>
      <Footer />
    </main>
  )
}
