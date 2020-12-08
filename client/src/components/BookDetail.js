import PropTypes from 'prop-types'
import RectangleButton from './RectangleButton'
import styled from 'styled-components/macro'

/** @component */
export default BookDetail

BookDetail.propTypes = {
  author: PropTypes.array,
  buttonName: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
}

function BookDetail({
  cover,
  title,
  subtitle,
  author,
  categories,
  pageCount,
  printType,
  publishedDate,
  publisher,
  language,
  description,
  onButtonClick,
  buttonName,
}) {
  return (
    <BookDetailModal>
      <StyledCover src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
        <span>
          Autor: <p>{author}</p>
        </span>
        <span>
          Kathegorien: <p>{categories}</p>
        </span>
        <span>
          Seiten: <p>{pageCount}</p>
        </span>
        <span>
          Format: <p>{printType}</p>
        </span>
        <span>
          Erscheinungsdatum: <p>{publishedDate}</p>
        </span>
        <span>
          Verlag: <p>{publisher}</p>
        </span>
        <span>
          Sprache: <p>{language}</p>
        </span>
        <p>{description}</p>
      </div>
      <RectangleButton
        buttonName={buttonName}
        gridColumn="2 / -1"
        gridPosition="end"
        onClick={onButtonClick}
      ></RectangleButton>
    </BookDetailModal>
  )
}

const BookDetailModal = styled.li`
  background: var(--primary-background-gradient);
  background: var(--primary-white);
  border-radius: 3px;
  border: 2px solid var(--dark-blue);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 45px;
  min-width: 0;
  place-items: center;
  position: fixed;
  right: 0px;
  z-index: 10;

  h3 {
    color: var(--dark-blue);
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
