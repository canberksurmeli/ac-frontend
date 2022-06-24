import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
`;
const Image = styled.img`
	max-width: 80px;
	max-height: 80px;
	margin-right: 15px;
	border-radius: 50%;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Name = styled.p`
	color: #23527c;
`;

const Title = styled.p`
	font-size: 0.875em;
	font-style: italic;
	color: black;
`;

const Profile = (params: { name: string; title: string }) => {
	return (
		<Container>
			<Image
				src="https://bootdey.com/img/Content/avatar/avatar1.png"
				alt=""
			></Image>
			<TextContainer>
				<Name> {params.name} </Name>
				<Title> {params.title} </Title>
			</TextContainer>
		</Container>
	);
};

export default Profile;
