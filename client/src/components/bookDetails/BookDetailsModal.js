import BookDetails from "./BookDetails";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,

} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"

function BookDetailsModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Book Details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookDetails/>
         
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Add Entry</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BookDetailsModal;
