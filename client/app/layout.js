import './globals.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

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
