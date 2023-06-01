import './globals.css'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <>
      <Header key="header" />
      {children}
    </>
  )
}
