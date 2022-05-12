// >> Modules
import Head from 'next/head';

// >> Styles
import useStyles from '../components/indexPage/indexStyle.js';

// >> Components
import NavBar from '../components/navBar/navBar.js';
import Footer from '../components/footer/footer.js';
import Headline from '../components/indexPage/headline/headline.js';

export default function Home() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.container}>
			<Head>
				<title>Foo - Landing page</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Web: Marcel 'Zetty' Mikosza, UI/UX: Muteeb Mehraj"
				/>
			</Head>
			<div className={styles.mainDiv}>
				<NavBar />
				<Headline />
			</div>
			<Footer />
		</div>
	);
}
