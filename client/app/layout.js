import './globals.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <Header key="header" />
        <div className='flex flex-row'>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
