import PropTypes from 'prop-types'
import RectangleButton from './RectangleButton'
import styled from 'styled-components/macro'

/** @component */
export default BookCard

BookCard.propTypes = {
  author: PropTypes.array,
  buttonName: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
}
/* wenn auf den mehr button geklickt wird soll sich das modal mit handleMoreButton öffnen */
function BookCard({
  cover,
  title,
  author,
  onCardBtnClick,
  buttonName,
  handleMoreBtnClick,
  buttonMoreName,
}) {
  return (
    <BookCardWrapper>
      <StyledCover src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>
          von<h4>{author}</h4>
        </span>
      </div>
      <RectangleButton
        buttonName={buttonName}
        gridColumn="2 / -1"
        gridPosition="end"
        onClick={onCardBtnClick}
      ></RectangleButton>
      <RectangleButton
        buttonName={buttonMoreName}
        gridColumn="2 / -1"
        gridPosition="end"
        onClick={handleMoreBtnClick}
      ></RectangleButton>
    </BookCardWrapper>
  )
}

const BookCardWrapper = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 45px;
  min-width: 0;
  padding: 10px;
  position: relative;

  h3 {
    margin: 0;
  }

  h4 {
    display: inline;
    margin: 10px;
  }

  span {
    margin: 0 0 0 3.5px;
  }

  p {
    margin: 15px 5px 0 3px;
  }
`

const StyledCover = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  justify-self: stretch;
`
