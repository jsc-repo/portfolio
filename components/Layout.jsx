import { Container } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container maxW={"container.lg"}>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
