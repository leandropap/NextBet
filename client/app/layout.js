import './globals.css'
import Header from './Header'

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <Header key="header" />
        {children}
      </body>
    </html>
  )
}
