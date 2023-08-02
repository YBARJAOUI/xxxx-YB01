const COLORS = {
  primary: "#CC2936",
  secondary: "#08415C",
  tertiary: "#38BDF8",

  gray: "#94A3B8",
  gray2: "#F1F5F9",
  gray3: "#ECF0F1",

  white: "#ECFDF5",
  lightWhite: "#D1FAE5",
  black: '#2C3E50',
  lightGray: '#BDC3C7',
  transparent: 'rgba(0, 0, 0, 0)',
  success: "#388697",
  danger: "#EBBAB9",
  info: "#388697"
  
};

const FONT = {
  thin: "RBThin",
  regular: "RBRegular",
  medium: "RBMedium",
  bold: "RBBold",
  black: "RBBlack",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const IMAGES = {
	onnboarding : require('../assets/images/onboarding.png'),
  bg : require('../assets/images/bg.jpg'),
  logo: require('../assets/icon.png'),
  fr : require('../assets/icons/france.png'),
  uk : require('../assets/icons/uk.png'),
  planting: require('../assets/images/planting.png'),
  irrigation: require('../assets/images/irrigation.png'),
  weather: require('../assets/images/weather.png'),
  chat: require('../assets/images/chat.png'),
  exclamation: require('../assets/images/exclamation-mark.png')
}


export { COLORS, FONT, SIZES, SHADOWS, IMAGES };
