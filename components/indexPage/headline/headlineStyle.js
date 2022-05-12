// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1359px',
		paddingTop: '90px',
		margin: '0 auto',
	},

	leftSection: {
		width: '595px',
		height: '603px',
		float: 'left',
	},

	mobileButton: {
		display: 'none',
	},

	titleSection: {
		width: '500px',
		height: '120px',
		marginTop: '103px',
		position: 'relative',
	},

	orangeTitle: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '125px',
		lineHeight: '94.8%',
		letterSpacing: '-0.035em',
		color: '#FF7E00',
		float: 'left',
		marginRight: '18px',
	},

	blackTitle: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '52px',
		lineHeight: '94.8%',
		color: '#2F2F2F',
		float: 'left',
		width: '221px',
		marginTop: '15px',
	},

	titleArrowDiv: {
		position: 'absolute',
		width: '140px',
		height: '176px',
		transform: 'rotate(17.84deg)',
		right: '-60px',
		top: '-100px',
	},

	titleDesc: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '22px',
		lineHeight: '138.8%',
		color: '#909090',
		marginTop: '24px',
	},

	buttonsDiv: {
		marginTop: '44px',
	},

	leftButton: {
		width: '188px',
		height: '70px',
		background: '#2F2F2F',
		boxShadow: '0px 20px 32px -8px rgba(0, 0, 0, 0.2)',
		borderRadius: '84px',
		transition: 'all .5s',
		float: 'left',

		'&:hover': {
			background: '#292929',
			boxShadow: '0px 20px 32px -8px rgba(0, 0, 0, 0.7)',
		},

		'& p': {
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '20px',
			lineHeight: '94.8%',
			textTransform: 'none',
			color: '#F4ECE1',
		},

		'& span': {
			color: '#F4ECE1',
		},
	},

	rightButton: {
		width: '57px',
		height: '65px',
		transform: 'scale(0.85)',
		background: '#FFF8F0',
		boxShadow: '0px 20px 32px -8px rgba(0, 0, 0, 0.2)',
		transition: 'all .5s',
		borderRadius: '100%',
		marginLeft: '23px',
		marginTop: '2px',
		float: 'left',

		'&:hover': {
			background: '#fff0de',
			boxShadow: '0px 20px 32px -8px rgba(0, 0, 0, 0.7)',
		},

		'& span': {
			color: '#2F2F2F',
		},

		'& p': {
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '23px',
			lineHeight: '94.8%',
			color: '#2F2F2F',
			textTransform: 'none',
		},
	},

	rightButtonText: {
		paddingLeft: '30px',
		marginTop: '10px',
	},

	rightButtonText2: {
		paddingLeft: '8px',
		marginTop: '10px',
	},

	playArrow: {
		width: '32px',
		height: 'auto',
		color: '#2F2F2F',
		marginLeft: '188px',
	},

	ratingDiv: {
		width: '255px',
		height: '92px',
		paddingTop: '69px',
		clear: 'both',
	},

	starIcon: {
		width: '32px',
		height: 'auto',
		color: '#FEBB41',
		marginRight: '3px',
	},

	ratingTitle: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '139.8%',
		color: '#2F2F2F',
		marginTop: '1px',
		marginLeft: '6px',
	},

	ratingDesc: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '139.8%',
		color: '#909090',
		marginTop: '2px',
		marginLeft: '6px',
	},

	rightSection: {
		width: '750px',
		height: '712px',
		float: 'left',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1500px
	['@media (max-width: 1500px)']: {
		mainDiv: {
			width: '90%',
		},

		leftSection: {
			width: '43%',
			height: '603px',
			float: 'left',
		},

		rightSection: {
			width: '55%',
			height: '712px',
			float: 'left',
		},
	},

	//1300px
	['@media (max-width: 1300px)']: {
		leftSection: {
			width: '100%',
			float: 'none',
		},

		rightSection: {
			float: 'none',
			width: '60%',
			margin: '0 auto',
			marginTop: '-80px',
		},

		titleSection: {
			margin: '0 auto',
			marginTop: '100px',
		},

		titleDesc: {
			width: '60%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '24px',
		},

		buttonsDiv: {
			width: '500px',
			margin: '0 auto',
			marginTop: '44px',
		},

		leftButton: {
			width: '250px',
		},

		ratingDiv: {
			margin: '0 auto',
			paddingTop: '30px',
			clear: 'both',
		},

		starsDiv: {
			width: '170px',
			margin: '0 auto',
		},

		starIcon: {
			width: '20%',
			height: 'auto',
			color: '#FEBB41',
			marginRight: '0px',
		},

		ratingTitle: {
			width: '100%',
			textAlign: 'center',
		},

		ratingDesc: {
			width: '100%',
			textAlign: 'center',
		},
	},

	//710px
	['@media (max-width: 710px)']: {
		mainDiv: {
			paddingTop: '30px',
		},

		titleSection: {
			width: '100%',
			height: '190px',
		},

		titleArrowDiv: {
			display: 'none',
		},

		orangeTitle: {
			float: 'none',
			width: '100%',
			textAlign: 'center',
		},

		blackTitle: {
			float: 'none',
			width: '100%',
			textAlign: 'center',
			marginTop: '15px',
		},

		rightSection: {
			display: 'none',
		},
	},

	//555px
	['@media (max-width: 555px)']: {
		buttonsDiv: {
			width: '90%',
			margin: '0 auto',
			marginTop: '44px',
		},

		rightButton: {
			display: 'none',
		},

		leftButton: {
			width: '100%',
			margin: '0 auto',
			float: 'none',
		},

		mobileButton: {
			display: 'block',
			marginTop: '15px',
			width: '65%',
			margin: '0 auto',
			height: '70px',
			background: '#FFF8F0',
			boxShadow: '0px 20px 32px -8px rgba(0, 0, 0, 0.2)',
			borderRadius: '84px',
			transition: 'all .5s',
			float: 'none',

			'&:hover': {
				background: '#fff0de',
				boxShadow: '0px 20px 32px -8px rgba(0, 0, 0, 0.7)',
			},

			'& p': {
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: '600',
				fontSize: '20px',
				lineHeight: '94.8%',
				textTransform: 'none',
				color: '#2F2F2F',
			},

			'& span': {
				color: '#2F2F2F',
			},
		},

		titleDesc: {
			width: '90%',
		},
	},

	//480px
	['@media (max-width: 480px)']: {
		ratingDiv: {
			height: '170px',
		},
	},

	//427px
	['@media (max-width: 427px)']: {
		titleDesc: {
			marginTop: '60px',
		},
	},
});

export default useStyles;
