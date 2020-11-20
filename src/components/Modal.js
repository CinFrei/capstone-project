import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import downArrow from '../assets/arrow-down.svg'

const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null

  // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
  // use this component inside our React tree
  return ReactDOM.createPortal(
    <StyledModal>
      <StyledButton onClick={closeModal}>
        <img src={downArrow} alt="" />
      </StyledButton>
      {children}
    </StyledModal>,
    domEl
  )
})

Modal.propTypes = {
  children: PropTypes.object,
  closeModal: PropTypes.func,
}

export default Modal

const StyledModal = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 10;

  display: grid;
  place-items: center;

  background: var(--secondary-background-gradient);
`

const StyledButton = styled.button`
  width: 80px;
  height: 20px;
  border: none;
  background-color: transparent;
  justify-self: end;

  img {
    width: 25px;
  }
`
