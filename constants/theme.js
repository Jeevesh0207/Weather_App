const COLORS = {
    PurpleVeryLight: "#ebe5fe",
    PurpleLight: "#cfc8fd",
    PurpleLiteDark: "#725ee9",
    PurpleDark: "#6852e3",
    WhiteVeryLight: "#ffffff",
    WhiteLight: "#e7e7e7",
    WhiteLiteDark: "#e5e5e5",
    WhiteDark: "#cecece",
    BlackVeryLight: "#4c4c4c",
    BlackLight: "#323232",
    BlackLiteDark: "#191919",
    BlackDark: "#000000",
};

const FONTS = {
    LatoBlack: "LatoBlack",
    LatoBold: "LatoBold",
    LatoLight: "LatoLight",
    LatoRegular: "LatoRegular",
    LatoThin: "LatoThin",
    GothamBold:"GothamBold"
};

const SIZES = {
    xSmall: 10,
    Small: 12,
    Medium: 16,
    Large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const SHADOWS = {
    Small: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
    Medium: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    Large: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
};

export { COLORS, SIZES, FONTS, SHADOWS }