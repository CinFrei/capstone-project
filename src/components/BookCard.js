import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default BookCard

BookCard.propTypes = {
  coverUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string,
}

function BookCard({ coverUrl, title, author, description, id }) {
  return (
    <BookCardWrapper>
      <img src={coverUrl} alt="" />
      <div>
        <h3>{title}</h3>
        <span>
          von <h4>{author}</h4>
        </span>
        <p>{description}</p>
      </div>
    </BookCardWrapper>
  )
}

const BookCardWrapper = styled.div`
  position: relative;
  min-width: 0;
  display: grid;
  grid-template-columns: 40% 57%;
  grid-gap: 10px;
  padding: 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 247, 247, 1) 100%
  );
  border: 2px solid #4b4c64;
  border-radius: 3px;

  h3 {
    margin: 1%;
  }
  h4 {
    display: inline;
    margin: 1%;
  }
  img {
    width: 100%;
  }
  span,
  p {
    font-size: 0.85em;
  }
`
