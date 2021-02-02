import Head from 'next/head';
import Nav from './navbar'
import "./layout.module.css"

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>ChuckNorris</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="chuck.png"></link>
			</Head>
			<Nav />
			<div className="scroll">
				{props.children}
			</div>
		</div>
	)

}
export default Layout