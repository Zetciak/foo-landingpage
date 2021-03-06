// >> Modules
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './footerStyle.js';

//Script
function Footer() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<Typography className={styles.footerText}>
				Web: mikoszamar@gmail.com, UI/UX: Muteeb Mehraj
			</Typography>
		</div>
	);
}

export default Footer;
