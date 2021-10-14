import AddBook from "./AddBook";

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

function AddBookModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Add Book</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddBook />
         
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

export default AddBookModal;
