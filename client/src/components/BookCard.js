import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import RectangleButton from './RectangleButton'

/** @component */
export default BookCard

BookCard.propTypes = {
  author: PropTypes.array,
  buttonMoreName: PropTypes.string,
  buttonName: PropTypes.string,
  cover: PropTypes.string,
  handleMoreButtonClick: PropTypes.func,
  onCardButtonClick: PropTypes.func,
  title: PropTypes.string,
}

function BookCard({
  author,
  buttonMoreName,
  buttonName,
  cover,
  handleMoreButtonClick,
  onCardButtonClick,
  title,
}) {
  return (
    <BookCardWrapper>
      <CoverStyled src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>
          von<h4>{author}</h4>
        </span>
      </div>
      {/* DeleteButton */}
      <RectangleButton
        buttonName={buttonName}
        gridColumn="2 / -1"
        gridPosition="end"
        onClick={onCardButtonClick}
      />
      {/* DetailButton */}
      <RectangleButton
        buttonName={buttonMoreName}
        gridColumn="2 / -1"
        gridPosition="end"
        onClick={handleMoreButtonClick}
      />
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

const CoverStyled = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  justify-self: stretch;
`
