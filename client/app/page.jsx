import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <p>Contenido</p>
      <Footer />
    </main>
  )
}
