import { useEffect, useState } from "react";
import styled from "styled-components";
import { Status } from "../../lib/enums";
import { UserList as UserListModel, UserListResponse } from "../../lib/models";
import "./main.style.css";
import UserRow from "./user-row";

const RowContainer = styled.div`
	display: flex;
	width: 70%;
	height: 100px;
	margin-bottom: 20px;
`;

const UserList = () => {
	const [users, updateUsers] = useState<UserListModel[]>();
	useEffect(() => {
		console.log("effect!")
		fetch("http://localhost:8080/user")
			.then(async response => {
				
				console.log("json")
				const json = await response.json()
				console.log(json)
				return json;
			})
			.then((users: UserListResponse) => updateUsers(users.data));
	}, []);

	return (
		<div className="container">
			{users?.map(user => (
				<RowContainer key={user.id}>
					<UserRow name={user.name} status={Status.Active}></UserRow>
				</RowContainer>
			))}
		</div>
	);
};

export default UserList;
