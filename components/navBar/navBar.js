// >> Modules
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './navStyle.js';

// >> Images
import logo from '../../public/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Script
function NavBar() {
	// >> Style
	const styles = useStyles();

	// >> Script
	function focusInput() {
		document.getElementById('inputText').focus();
	}

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.leftSection}>
				<div className={styles.logo}>
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						priority={true}
						quality="100"
					/>
				</div>
				<Typography className={styles.logoText}>Foo</Typography>
			</div>
			<div className={styles.rightSection}>
				<div className={styles.navLinks}>
					<ul>
						<li>
							<Link to="home">Home</Link>
						</li>
						<li>
							<Link to="menu">Menu</Link>
						</li>
						<li>
							<Link to="contract">Contract</Link>
						</li>
						<li>
							<Link to="shop">Shop</Link>
						</li>
					</ul>
				</div>
				<div className={styles.searchBar}>
					<div className={styles.searchBarInside}>
						<SearchIcon
							className={styles.searchIcon}
							onClick={() => focusInput()}
						/>
						<input
							type="text"
							id="inputText"
							placeholder="Search"
						></input>
					</div>
					<div className={styles.line}></div>
					<div className={styles.cart}>
						<ShoppingCartIcon className={styles.cartIcon} />
						<div className={styles.redDot}>
							<Typography className={styles.redDotText}>
								4
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
