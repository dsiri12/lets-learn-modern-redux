import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-menu'>
        <li>
          <NavLink to='/dogs' activeClassName='selected'>
            Dogs
          </NavLink>
        </li>

        <li>
          <NavLink to='/users' activeClassName='selected'>
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to='/counter' activeClassName='selected'>
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar