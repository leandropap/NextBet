"use client"
import Title from './components/Title'
import Slider from './components/Slider'
import useStore from '@/store/store'
import { useEffect } from 'react'

export default function Home() {
  const matches = useStore(state => state.matches)
  const getMatches = useStore(state => state.getMatches)

  useEffect(() => {
    getMatches()
  }, [])

  console.log(matches)

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
