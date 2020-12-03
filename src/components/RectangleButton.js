import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default RectangleButton

RectangleButton.propTypes = {
  buttonName: PropTypes.string,
}

function RectangleButton({ onClick, buttonName }) {
  return <ButtonStyled onClick={onClick}>{buttonName}</ButtonStyled>
}

const ButtonStyled = styled.button`
  background: var(--light-rose);
  border-radius: 3px;
  border: none;
  color: var(--primary-antrazit);
  font-family: 'Kaushan Script', cursive;
  font-size: 1.2em;
  width: 100%;
`
