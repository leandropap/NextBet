import Image from 'next/image'
import Cards from './Cards'
import Title from './Title'
import Slider from './Slider'

export default function Home() {
  return (
    <main>
      <div className="flex flex-row my-5">
        <div className="flex flex-col">
          <Title text="Ultimos partidos" />
          <Slider displayOn={true} />
          <br />
          <Title text="Hoy" />
          <Cards />
          <br />
          <Title text="Mañana" />
          <Cards />
          <br />
        </div>
      </div>
    </main>
  )
}
