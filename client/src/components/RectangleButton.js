import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default RectangleButton

RectangleButton.propTypes = {
  buttonName: PropTypes.string,
}

function RectangleButton({
  buttonName,
  gridColumn,
  gridPosition,
  gridRow,
  onClick,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      gridColumn={gridColumn}
      gridPosition={gridPosition}
      gridRow={gridRow}
    >
      {buttonName}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background: var(--accent-color);
  border-radius: 3px;
  border: none;
  color: var(--primary-anthrazit);
  font-family: 'Kaushan Script', cursive;
  font-size: 1.2em;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  justify-self: ${(props) => props.gridPosition};
  width: 100%;
`
