import {useState} from 'react'
import {Link} from 'react-router'

import {supabase} from '../supabase/supabase-client'

export const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) =>{
		e.preventDefault()
		console.log('Prihlasuji...', email, password)

		const {data, error} = await supabase.auth.signInWithPassword({ email, password });

		if (!error && data) {
			console.log(data)
		}

		if (error) {
			console.log(error)
		}
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