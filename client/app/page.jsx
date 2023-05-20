import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Cards from './Cards'

export default function Home() {
  return (
    <main>
      <Header />
      <div class="flex flex-row">
        <Sidebar />
        <Cards />
      </div>
      <Footer />
    </main>
  )
}
