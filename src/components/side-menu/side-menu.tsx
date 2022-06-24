import styled from "styled-components";
import "./side-menu.css";

const Row = styled.div`
  margin: 10px 0px;
  padding: 20px 50px;
  margin-top: 20px;
  background-color: #dee1e3;
  border-radius: 10%;
`;

const SideMenu = () => {
  return (
    <div className="container-side">
      <header className="side-menu-header">Project Name</header>
      <ul className="side-menu-item">
        <Row>
          <li>Kullanıcılar</li>
        </Row>
        <Row>
          <li>Raporlar</li>
        </Row>
        <Row>
          <li>Ayarlar</li>
        </Row>
      </ul>
    </div>
  );
};

export default SideMenu;
