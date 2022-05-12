// >> Modules
import Image from 'next/image';
import { Button, IconButton, Typography } from '@mui/material';

// >> Styles
import useStyles from './headlineStyle.js';

// >> Images
import bigGraphic from '../../../public/indexPage/bigGraphic.png';
import titleArrow from '../../../public/indexPage/titleArrow.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

//Script
function NavBar() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.leftSection}>
				<div className={styles.titleSection}>
					<Typography className={styles.orangeTitle}>Fast</Typography>
					<Typography className={styles.blackTitle}>
						Food Delivery
					</Typography>
					<div className={styles.titleArrowDiv}>
						<Image
							src={titleArrow}
							alt=""
							layout="responsive"
							objectFit="contain"
							priority={true}
							quality="100"
						/>
					</div>
				</div>
				<Typography className={styles.titleDesc}>
					Sed ut perspiciatis unde omnis iste natus sit voluptatem
					accusantium doloremque laudantium
				</Typography>
				<div className={styles.buttonsDiv}>
					<Button variant="contained" className={styles.leftButton}>
						<Typography>Order Now</Typography>
					</Button>
					<Button
						variant="contained"
						className={styles.rightButton}
						centerRipple={false}
						href="https://youtu.be/dQw4w9WgXcQ?t=43"
						target="_blank"
					>
						<PlayArrowIcon className={styles.playArrow} />
						<Typography className={styles.rightButtonText}>
							Watch
						</Typography>
						<Typography className={styles.rightButtonText2}>
							Video
						</Typography>
					</Button>
					<Button variant="contained" className={styles.mobileButton}>
						<Typography>Watch Video</Typography>
					</Button>
				</div>
				<div className={styles.ratingDiv}>
					<div className={styles.starsDiv}>
						<StarIcon className={styles.starIcon} />
						<StarIcon className={styles.starIcon} />
						<StarIcon className={styles.starIcon} />
						<StarHalfIcon className={styles.starIcon} />
						<StarBorderIcon className={styles.starIcon} />
					</div>
					<Typography className={styles.ratingTitle}>
						5 star rating
					</Typography>
					<Typography className={styles.ratingDesc}>
						based on 1788 reviews
					</Typography>
				</div>
			</div>
			<div className={styles.rightSection}>
				<Image
					src={bigGraphic}
					alt=""
					layout="responsive"
					objectFit="contain"
					priority={true}
					quality="100"
				/>
			</div>
		</div>
	);
}

export default NavBar;
