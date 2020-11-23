//import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default CircleButton

/* CircleButton.propTypes = {
  //buttonImage: PropTypes.object,
} */

function CircleButton({ onClick, buttonIcon }) {
  return <ButtonStyled onClick={onClick}>{buttonIcon}</ButtonStyled>
}

const ButtonStyled = styled.button`
  width: 45px;
  height: 45px;
  margin-top: 20px;
  padding: 12px;
  background: var(--light-rose);
  border: none;
  border-radius: 45px;

  svg .st0 {
    fill: var(--accent-color);
  }
`
