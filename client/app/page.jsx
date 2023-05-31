import Image from 'next/image'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Cards from './Cards'
import Title from './Title'

export default function Home() {
  return (
    <main>
      <div className="flex flex-row my-5">
        <Sidebar />
        <div className="flex flex-col">
          <Title text="Ultimos partidos" />
          <Cards displayOn={true} />
          <br />
          <Title text="Hoy" />
          <Cards />
          <br />
          <Title text="Mañana" />
          <Cards />
          <br />
        </div>
      </div>
      <Footer />
    </main>
  )
}
