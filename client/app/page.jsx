"use client"

import { useEffect } from 'react'
import useStore from '@/store/store'
import { shallow } from 'zustand/shallow'
import Title from './components/Title'
import Slider from './components/Slider'

export default function Home() {
  const getMatches = useStore(state => state.getMatches)
  const { allMatches, last, today, tomorrow } = useStore(state => ({
    allMatches: state.allMatches,
    last: state.last,
    today: state.today,
    tomorrow: state.tomorrow
  }))

  useEffect(() => {
    getMatches()
  }, [])

  console.log(last, today, tomorrow)

  return (
    <main>
      <div className="flex flex-row my-5">
        <div className="flex flex-col">
          <Title text="Ultimos partidos" />
          <Slider displayOn={true} matches={last} />
          <br />
          <Title text="Hoy" />
          <Slider matches={today} />
          <br />
          <Title text="Mañana" />
          <Slider matches={tomorrow} />
          <br />
        </div>
      </div>
    </main>
  )
}
