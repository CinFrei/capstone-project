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
        <StyledDetailWrapper key={detailBook.id}>
          <StyledCover
            src={detailBook.volumeInfo.imageLinks.thumbnail}
            alt={detailBook.volumeInfo.title}
          />
          <StyledDetails>
            <h2>{detailBook.volumeInfo.title}</h2>
            <h3>{detailBook.volumeInfo.subtitle}</h3>
            <table>
              <tr>
                <th>Autor: </th>
                <th> {detailBook.volumeInfo.authors}</th>
              </tr>
              <tr>
                <th>Kathegorien: </th>
                <th> {detailBook.volumeInfo.categories}</th>
              </tr>
              <tr>
                <th>Seiten: </th>
                <th> {detailBook.volumeInfo.pageCount}</th>
              </tr>
              <tr>
                <th>Format: </th>
                <th> {detailBook.volumeInfo.printType}</th>
              </tr>
              <tr>
                <th>
                  Erscheinungs-
                  <br />
                  datum:{' '}
                </th>
                <th> {detailBook.volumeInfo.publishedDate}</th>
              </tr>
              <tr>
                <th>Verlag: </th>
                <th> {detailBook.volumeInfo.publisher}</th>
              </tr>
              <tr>
                <th>Sprache: </th>
                <th> {detailBook.volumeInfo.language}</th>
              </tr>
            </table>
            <p>{detailBook.volumeInfo.description}</p>
          </StyledDetails>
        </StyledDetailWrapper>
      ))}
      <RectangleButton
        buttonName={buttonName}
        gridRow="2"
        gridPosition="end"
        onClick={onButtonClick}
      ></RectangleButton>
    </BookDetailModal>
  )
}

const BookDetailModal = styled.div`
  background: var(--dark-blue);
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto 50px;
  height: 100%;
  min-width: 0;
  overflow-y: scroll;
  place-items: center;
  position: fixed;
  right: 0;
  top: 0px;
  width: 100%;
  z-index: 20;

  h2 {
    margin: 20px 0 0;
  }
  h3 {
    margin: 5px 0 20px;
  }

  span {
    margin: 0 0 0 3.5px;
  }

  p {
    margin: 15px 5px 0 3px;
  }

  button {
    position: fixed;
    right: 5%;
    width: 90%;
    z-index: 10;
    bottom: 20px;
  }
`

const StyledCover = styled.img`
  grid-row: 1;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
`

const StyledDetails = styled.div`
  grid-row: 2;
  height: 100%;
  z-index: 2;
  background: var(--dark-blue-gradient);
  padding: 110px 60px;
`

const StyledDetailWrapper = styled.div`
  grid-row: 1;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 25% auto;
  height: 100%;

  table {
    text-align: left;
  }
`
