import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  CircularProgress,
  ModalBody,
} from '@chakra-ui/react'

type KeywordsModalProps = {
  keywords: string
  loading: boolean
  isOpen: boolean
  closeModal: () => void
}

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }: KeywordsModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' alignItems='center' justifyContent='center'>
            {loading ? (
              <CircularProgress isIndeterminate color='blue.300' />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default KeywordsModal
