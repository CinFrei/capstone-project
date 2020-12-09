import PropTypes from 'prop-types'
import RectangleButton from './RectangleButton'
import styled from 'styled-components/macro'

/** @component */
export default BookDetail

BookDetail.propTypes = {
  detailBook: PropTypes.array,
  onButtonClick: PropTypes.func,
  buttonName: PropTypes.string,
}

function BookDetail({ detailBook, onButtonClick, buttonName }) {
  return (
    <BookDetailModal>
      {detailBook.map((detailBook) => (
        <div key={detailBook.id}>
          <StyledCover
            src={detailBook.volumeInfo.imageLinks.thumbnail}
            alt={detailBook.volumeInfo.title}
          />
          <div>
            <h3>{detailBook.volumeInfo.title}</h3>
            <h3>{detailBook.volumeInfo.subtitle}</h3>
            <span>
              Autor: <p>{detailBook.volumeInfo.authors}</p>
            </span>
            <span>
              Kathegorien: <p>{detailBook.volumeInfo.categories}</p>
            </span>
            <span>
              Seiten: <p>{detailBook.volumeInfo.pageCount}</p>
            </span>
            <span>
              Format: <p>{detailBook.volumeInfo.printType}</p>
            </span>
            <span>
              Erscheinungsdatum: <p>{detailBook.volumeInfo.publishedDate}</p>
            </span>
            <span>
              Verlag: <p>{detailBook.volumeInfo.publisher}</p>
            </span>
            <span>
              Sprache: <p>{detailBook.volumeInfo.language}</p>
            </span>
            <p>{detailBook.volumeInfo.description}</p>
          </div>
        </div>
      ))}
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
