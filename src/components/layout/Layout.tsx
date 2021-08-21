import Navbar from "./Navbar"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <div className='container'>
      <Navbar />

      {children}

      <div style={{ height: 50 }}></div>

      <Footer />
    </div>
  )
}

export default Layout