import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">CSV Upload and Edit Tool</Text>
        <Button onClick={() => navigate('/create')}>Create CSV</Button>
        <Button onClick={() => navigate('/upload')}>Upload CSV</Button>
      </VStack>
    </Container>
  );
};

export default Index;