import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props: React.Props<null> & {isAdmin: boolean}) => {
  return (
    <div className="todo">
      <Header isAdmin={props.isAdmin}/>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
