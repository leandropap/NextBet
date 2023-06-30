import Image from 'next/image'
import Title from './components/Title'
import Slider from './components/Slider'

export default function Home() {
  return (
    <main>
      <div className="flex flex-row my-5">
        <div className="flex flex-col">
          <Title text="Ultimos partidos" />
          <Slider displayOn={true} />
          <br />
          <Title text="Hoy" />
          <Slider />
          <br />
          <Title text="Mañana" />
          <Slider />
          <br />
        </div>
      </div>
    </main>
  )
}
