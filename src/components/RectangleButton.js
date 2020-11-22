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
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  background: var(--light-rose);
  color: var(--primary-antrazit);
  font-size: 1.2em;
  font-family: 'Kaushan Script', cursive;
  border: none;
  border-radius: 3px;
`
