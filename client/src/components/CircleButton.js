import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default CircleButton

CircleButton.propTypes = {
  buttonIcon: PropTypes.element,
}

function CircleButton({
  buttonIcon,
  gridColumn,
  gridPosition,
  gridRow,
  onClick,
}) {
  return (
    <ButtonStyled
      gridColumn={gridColumn}
      gridPosition={gridPosition}
      gridRow={gridRow}
      onClick={onClick}
    >
      {buttonIcon}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background: var(--light-rose);
  border-radius: 45px;
  border: none;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  height: 45px;
  justify-self: ${(props) => props.gridPosition};
  margin-right: 8px;
  padding: 12px;
  width: 45px;

  svg .st0 {
    fill: var(--accent-color);
  }
`
