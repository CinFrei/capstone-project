import styled from 'styled-components/macro'
//import PropTypes from 'prop-types'

import add from '../assets/add.svg'

/** @component */
export default FloatingActionButton

function FloatingActionButton({ onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      <img src={add} alt="" />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;

  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  padding: 10px;

  background-color: var(--light-blue);
  border: 2px solid var(--light-blue);
  border-radius: 30px;

  img {
    width: 100%;
    margin: 0;
  }
`
