import {useAuth} from '../context/AuthContext'

export function UserStatus() {

	const {user, isAuth} = useAuth()

	return (
		<div className="user-status">

			{isAuth
				? <p>{user.firstName} {user.lastName}</p>
				: <p>Neni prihlaseny</p>
			}

		</div>
	);
}

export default UserStatus;