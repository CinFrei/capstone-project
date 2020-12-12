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

function BookCard({ author, buttonName, cover, onCardButtonClick, title }) {
  return (
    <BookCardWrapper>
      <CoverWrapper>
        <CoverStyled src={cover} alt={title} />
      </CoverWrapper>
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
    </BookCardWrapper>
  )
}

const BookCardWrapper = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30% auto;
  grid-template-rows: 1fr 30px;
  min-width: 0;
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
const CoverWrapper = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  height: 140px;
  justify-self: stretch;
  overflow: hidden;
`

const CoverStyled = styled.img`
  width: 100%;
`
