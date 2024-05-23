import {useContext} from 'react';
import {MyContext} from './../context/MyContext'

const About = () => {

	const {edition, setEdition} = useContext(MyContext)

	return (
		<>
			<h2>About</h2>

			<p>Developed by Jakub Seyček</p>

		</>
	);
}

export default About;