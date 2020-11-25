import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default CircleButton

CircleButton.propTypes = {
  buttonIcon: PropTypes.element,
}

function CircleButton({
  onClick,
  buttonIcon,
  gridColumn,
  gridPosition,
  gridRow,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      gridColumn={gridColumn}
      gridRow={gridRow}
      gridPosition={gridPosition}
    >
      {buttonIcon}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  width: 45px;
  height: 45px;
  margin-right: 8px;
  padding: 12px;
  background: var(--light-rose);
  border: none;
  border-radius: 45px;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  justify-self: ${(props) => props.gridPosition};

  svg .st0 {
    fill: var(--accent-color);
  }
`
