import {useState} from 'react'
import {Link} from 'react-router-dom'

export const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) =>{
		e.preventDefault()
		console.log('Prihlasuji...', email, password)
	}

	return (
		<>
			<h2>Přihlášení</h2>

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

				<button type="submit">Přihlásit se</button>

				<p>Ještě nemáš účet? <Link to="/register">Zaregistruj se.</Link></p>
			</form>
		</>
	)
}

export default Login