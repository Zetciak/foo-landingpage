// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1359px',
		height: '60px',
		paddingTop: '39px',
		margin: '0 auto',
	},

	leftSection: {
		float: 'left',
		marginTop: '10px',
	},

	logo: {
		width: '32px',
		height: '32px',
		float: 'left',
	},

	logoText: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '32px',
		lineHeight: '139.8%',
		color: '#000000',
		float: 'left',
		marginLeft: '4px',
		marginTop: '-2px',
	},

	rightSection: {
		float: 'right',
	},

	navLinks: {
		float: 'left',
		marginRight: '160px',
		marginTop: '5px',
		'& ul': {
			color: 'transparent',
			'& li': {
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '22px',
				lineHeight: '94.8%',
				float: 'left',
				marginLeft: '56px',
				'& a': {
					color: '#000000',
					opacity: '1',
					transition: 'color .5s, opacity .5s',
					'&:hover': {
						color: '#444444',
						opacity: '0.6',
						cursor: 'pointer',
					},
				},
			},
			'& li:nth-child(1)': {
				marginLeft: '0px',
			},
		},
	},

	searchBar: {
		width: '314px',
		height: '60px',
		background: 'rgba(255, 249, 240, 0.1)',
		boxShadow: '0px 12px 40px -16px rgba(0, 0, 0, 0.1)',
		borderRadius: '30px',
		float: 'left',
	},

	searchBarInside: {
		color: '#909090',
		transition: 'color .4s',

		'& input': {
			height: '25px',
			width: '151px',
			border: 'none',
			outline: 'none',
			float: 'left',
			background: 'none',
			marginTop: '18px',

			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '22px',
			lineHeight: '94.8%',
			color: '#000000',

			'&::placeholder': {
				transition: 'color .4s',
				color: '#909090',
			},
		},

		'&:hover': {
			color: '#444444',
			cursor: 'text',

			'& input': {
				'&::placeholder': {
					color: '#444444',
				},
			},
		},
	},

	searchIcon: {
		width: '26px',
		height: 'auto',
		marginTop: '17px',
		marginRight: '7px',
		marginLeft: '41px',
		float: 'left',
	},

	line: {
		float: 'left',
		width: '1px',
		height: '33px',
		background: 'rgba(148, 140, 140, 0.31)',
		marginTop: '14px',
		marginLeft: '7px',
	},

	cart: {
		color: '#909090',
		width: '60px',
		height: '35px',
		float: 'left',

		'&:hover': {
			color: '#444444',
			cursor: 'pointer',
		},
	},

	cartIcon: {
		width: '23px',
		height: 'auto',
		marginTop: '19px',
		marginLeft: '15px',
		float: 'left',
		transition: 'color .4s',
	},

	redDot: {
		background: '#EC2633',
		boxShadow: '0px 2px 23px 1px rgba(255, 51, 52, 0.72)',
		minWidth: '15px',
		height: '15px',
		borderRadius: '100%',
		marginTop: '10px',
		float: 'left',
	},

	redDotText: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '10px',
		lineHeight: '94.8%',
		color: '#ffffff',
		minWidth: '6px',
		marginLeft: '4px',
		paddingRight: '3px',
		marginTop: '3px',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1500px
	['@media (max-width: 1500px)']: {
		mainDiv: {
			width: '90%',
		},
	},

	//1310px
	['@media (max-width: 1310px)']: {
		leftSection: {
			width: '10%',
		},

		rightSection: {
			width: '90%',
		},

		searchBar: {
			float: 'right',
		},

		navLinks: {
			marginRight: '0px',
			marginLeft: 'auto',
		},
	},

	//1070px
	['@media (max-width: 1070px)']: {
		navLinks: {
			display: 'none',
		},

		leftSection: {
			width: '50%',
		},

		rightSection: {
			width: '50%',
		},
	},

	//510px
	['@media (max-width: 510px)']: {
		leftSection: {
			width: '100px',
			float: 'none',
			margin: '0 auto',
		},

		rightSection: {
			width: '100%',
			float: 'none',
			margin: '0 auto',
		},

		searchBar: {
			width: '314px',
			float: 'none',
			margin: '0 auto',
			marginTop: '60px',
		},
	},

	//370px
	['@media (max-width: 370px)']: {
		searchBar: {
			width: '100%',
		},

		searchBarInside: {
			'& input': {
				width: '50%',
			},
		},

		searchIcon: {
			marginLeft: '10%',
		},

		cart: {
			width: '20%',
		},
	},
});

export default useStyles;
