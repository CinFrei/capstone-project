import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { ReactComponent as HomeIcon } from '../assets/home.svg'
import { ReactComponent as LibaryIcon } from '../assets/libary.svg'
import { ReactComponent as SearchIcon } from '../assets/search.svg'

/** @component */
export default Navigation

Navigation.propTypes = {
  buttonName: PropTypes.string,
  detailBook: PropTypes.array,
  onButtonClick: PropTypes.func,
}

function Navigation() {
  return (
    <NavigationStyled>
      <NavigationItemStyled to="/" exact activeClassName={`is-active`}>
        <HomeIcon />
        <p>Zuhaus</p>
      </NavigationItemStyled>
      <NavigationItemStyled to="/search" activeClassName={`is-active`}>
        <SearchIcon />
        <p>Suche</p>
      </NavigationItemStyled>
      <NavigationItemStyled to="/libary" activeClassName={`is-active`}>
        <LibaryIcon />
        <p>Bibliothek</p>
      </NavigationItemStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  background-color: var(--dark-blue);
  border-top: 2px solid var(--primary-anthrazit);
  display: flex;
  justify-content: space-evenly;
  height: 63px;
`

const NavigationItemStyled = styled(NavLink)`
  padding: 10px;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: var(--light-blue);

  svg {
    margin: 0;
    height: 65%;
    fill: var(--light-blue);
  }

  p {
    font-size: 0.7em;
    margin: 0;
    text-align: center;
  }
`
