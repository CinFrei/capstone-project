import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import RectangleButton from './RectangleButton'

/** @component */
export default BookCard

BookCard.propTypes = {
  coverUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.array,
  description: PropTypes.string,
}

function BookCard({
  cover,
  title,
  author,
  description,
  onCardBtnClick,
  buttonName,
}) {
  return (
    <BookCardWrapper>
      <StyledCover src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>
          von<h4>{author}</h4>
        </span>
        <p>{description}</p>
      </div>
      <RectangleButton
        onClick={onCardBtnClick}
        buttonName={buttonName}
        gridColumn="2 / -1"
        gridPosition="end"
      ></RectangleButton>
    </BookCardWrapper>
  )
}

const BookCardWrapper = styled.li`
  position: relative;
  min-width: 0;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 45px;
  grid-gap: 10px;
  padding: 10px;
  background: var(--primary-white);
  background: var(--primary-background-gradient);
  border: 2px solid var(--dark-blue);
  border-radius: 3px;

  h3 {
    margin: 0;
    color: var(--dark-blue);
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
