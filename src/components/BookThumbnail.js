//import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

//import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg'
//import CircleButton from './CircleButton'

/** @component */
export default function BookThumbnail({ volume }) {
  return (
    <BookThumbnailWrapper>
      <StyledCover src={volume.cover} alt="" />
      <StyledTitle src={volume.title} alt="" />
      <StyledAuthor src={volume.author} alt="" />
      {/* <StyledAddButton src={volume.addBook} alt="" /> */}
      {/* <CircleButton
        onClick={onDelete}
        buttonIcon={<DeleteIcon />}
        gridColumn="2 / -1"
        gridPosition="end"
      /> */}
    </BookThumbnailWrapper>
  )
}

const BookThumbnailWrapper = styled.div`
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
`

const StyledCover = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  justify-self: stretch;
`

const StyledTitle = styled.h2`
  font-size: 1.2em;
`
const StyledAuthor = styled.p`
  font-size: 1em;
`
/* const StyledAddButton = styled.button`
  font-size: 0.8rem;
` */
