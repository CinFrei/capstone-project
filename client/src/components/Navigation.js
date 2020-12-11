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

function Navigation({ handleClick, className }) {
  return (
    <NavigationStyled className={className}>
      <NavLink>
        <NavigationItemStyled>
          <HomeIcon />
          <p>Zuhaus</p>
        </NavigationItemStyled>
      </NavLink>
      <NavLink>
        <NavigationItemStyled>
          <SearchIcon />
          <p>Suche</p>
        </NavigationItemStyled>
      </NavLink>
      <NavLink>
        <NavigationItemStyled>
          <LibaryIcon />
          <p>Bibliothek</p>
        </NavigationItemStyled>
      </NavLink>
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

const NavigationItemStyled = styled.div`
  padding: 10px;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;

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
