import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

/** @component */
export default BookCard

BookCard.propTypes = {
  coverUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
}

function BookCard({ coverUrl, title, author, description, id }) {
  return (
    <BookCardWrapper>
      <img src={coverUrl} alt="" />
      <div>
        <h3>{title}</h3>
        <span>
          von<h4>{author}</h4>
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
  grid-template-columns: 40% 60%;
  grid-gap: 10px;
  padding: 10px;
  background: var(--primary-white);
  background: var(--primary-background-gradient);
  border: 2px solid var(--dark-blue);
  border-radius: 3px;

  h3 {
    margin: 10px;
  }

  h4 {
    display: inline;
    margin: 10px;
  }

  img {
    width: 100%;
  }
`
