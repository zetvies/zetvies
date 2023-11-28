import './globals.css'

export const metadata = {
  title: 'Zetvies',
  description: 'by Bimo Arsa',
}

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
