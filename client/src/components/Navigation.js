import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

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

function Navigation({ onClick }) {
  return (
    <NavigationStyled onClick={onClick}>
      <HomeIcon />
      <SearchIcon />
      <LibaryIcon />
    </NavigationStyled>
  )
}

const NavigationStyled = styled.section`
  background-color: var(--dark-blue);
`
