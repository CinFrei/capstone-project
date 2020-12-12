import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import RectangleButton from './RectangleButton'

/** @component */
export default BookDetail

BookDetail.propTypes = {
  buttonName: PropTypes.string,
  deleteBook: PropTypes.func,
  detailBook: PropTypes.array,
  onButtonClick: PropTypes.func,
}

function BookDetail({ buttonName, deleteBook, detailBook, onButtonClick }) {
  return (
    <BookDetailModal>
      <div>
        {detailBook.map((detailBook) => (
          <DetailWrapperStyled key={detailBook.id}>
            <CoverStyled
              src={detailBook.volumeInfo.imageLinks.thumbnail}
              alt={detailBook.volumeInfo.title}
            />
            <DetailsStyled>
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
                    datum:
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
              <RectangleButton
                buttonName="Buch entfernen"
                onClick={() => deleteBook(detailBook.id)}
              />
            </DetailsStyled>
          </DetailWrapperStyled>
        ))}
      </div>
      <ButtonWrapper>
        <RectangleButton buttonName={buttonName} onClick={onButtonClick} />
      </ButtonWrapper>
    </BookDetailModal>
  )
}

const BookDetailModal = styled.section`
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
  z-index: 5;

  h2 {
    margin-top: 20px;
  }
  h3 {
    margin: 5px 0 20px;
  }

  p {
    margin: 15px 5px 0 3px;
  }
`

const CoverStyled = styled.img`
  grid-row: 1;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
`

const DetailsStyled = styled.div`
  background: var(--dark-blue-gradient);
  grid-row: 2;
  margin-top: 180px;
  padding: 125px 60px 180px 60px;
  z-index: 2;
`

const DetailWrapperStyled = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-row: 1;
  grid-template-rows: 25% auto;
  height: 100%;

  table {
    text-align: left;
  }
`

const ButtonWrapper = styled.div`
  bottom: 63px;
  position: fixed;
  right: 5%;
  width: 90%;
  z-index: 10;

  button {
    margin: 5px;
  }
`
