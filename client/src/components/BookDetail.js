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

function BookDetail({
  buttonName,
  deleteBook,
  detailBook,
  onButtonClick,
  className,
}) {
  return (
    <BookDetailModal>
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
              <tbody>
                <tr>
                  <td>Autor: </td>
                  <td> {detailBook.volumeInfo.authors}</td>
                </tr>

                <tr>
                  <td>Kathegorien: </td>
                  <td> {detailBook.volumeInfo.categories}</td>
                </tr>
                <tr>
                  <td>Seiten: </td>
                  <td> {detailBook.volumeInfo.pageCount}</td>
                </tr>
                <tr>
                  <td>Format: </td>
                  <td> {detailBook.volumeInfo.printType}</td>
                </tr>
                <tr>
                  <td>
                    Erscheinungs-
                    <br />
                    datum:
                  </td>
                  <td> {detailBook.volumeInfo.publishedDate}</td>
                </tr>
                <tr>
                  <td>Verlag: </td>
                  <td> {detailBook.volumeInfo.publisher}</td>
                </tr>

                <tr>
                  <td>Sprache: </td>
                  <td> {detailBook.volumeInfo.language}</td>
                </tr>
              </tbody>
            </table>
            <p>{detailBook.volumeInfo.description}</p>
          </DetailsStyled>
        </DetailWrapperStyled>
      ))}
      <RectangleButton
        buttonName={buttonName}
        gridRow="2"
        gridPosition="end"
        onClick={onButtonClick}
      />
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

const DeleteBookButton = styled(RectangleButton)`
  margin-top: 20px;
`

const CloseButton = styled(RectangleButton)`
  bottom: 80px;
  position: fixed;
  right: 5%;
  width: 90%;
  z-index: 10;

  button {
    margin: 5px;
  }
`
