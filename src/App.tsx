import styled from "styled-components";
import SideMenu from "./components/side-menu/side-menu";
import UserList from "./components/user-list/main";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
`;


const App = () => {
  return (
    <Container>
      <SideMenu></SideMenu>
      <UserList />
    </Container>
  );
};

export default App;
