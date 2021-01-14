import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default RectangleButton

RectangleButton.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
}

function RectangleButton({
  buttonName,
  gridColumn,
  gridPosition,
  gridRow,
  onClick,
  className,
}) {
  return (
    <ButtonStyled
      className={className}
      gridColumn={gridColumn}
      gridPosition={gridPosition}
      gridRow={gridRow}
      onClick={onClick}
    >
      {buttonName}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background: var(--light-blue);
  border-radius: 1px;
  border: none;
  color: var(--primary-anthrazit);
  font-family: 'Marcellus', cursive;
  font-size: 1.2em;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  justify-self: ${(props) => props.gridPosition};
  width: 100%;
`
