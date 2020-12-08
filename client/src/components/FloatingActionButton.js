import { ReactComponent as AddIcon } from '../assets/add.svg'
import styled from 'styled-components/macro'

/** @component */
export default FloatingActionButton

function FloatingActionButton({ onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      <AddIcon />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: var(--light-blue);
  border-radius: 30px;
  border: 2px solid var(--light-blue);
  bottom: 20px;
  display: grid;
  height: 60px;
  padding: 10px;
  place-items: center;
  position: fixed;
  right: 20px;
  width: 60px;
  z-index: 10;

  svg {
    margin: 0;
    width: 100%;
  }
  svg .st0 {
    fill: var(--primary-anthrazit);
  }
`
