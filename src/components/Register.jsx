import { useState } from 'react'

export function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	const handleSubmit = (e) =>{
		e.preventDefault()
		console.log('Registruji...', email, password, firstName, lastName, age)
	}

	return (
		<>
			<h2>Registrace</h2>

			<form onSubmit={handleSubmit}>

				<div className="form-field">
					<label>E-mail</label>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<hr />

				<div className="form-field">
					<label>Jméno</label>
					<input
						type="text"
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Příjmení</label>
					<input
						type="text"
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>

				<div className="form-field">
					<label>Věk</label>
					<input
						type="text"
						value={age}
						onChange={e => setAge(e.target.value)}
					/>
				</div>

				<button type="submit">Registrovat</button>
			</form>
		</>
	)
}

export default Register;