import { Container, VStack, Button } from "@chakra-ui/react";
import CSVUploader from "../components/CSVUploader";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <CSVUploader />
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </VStack>
    </Container>
  );
};

export default Create;