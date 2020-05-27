//MAIN
const DARK                     = "#28262C"
const PRIMARY                  = "#04C2B5"
const LIGHT                    = "#F9F5FF"

//NEUTRAL PALETTE
const GRAY_2                  = "#666666"
const GRAY_3                  = "#999999"
const GRAY_4                  = "#CCCCCC"
const GRAY_5                  = "#EEEEEE"
const GRAY_6                  = "#F9F9F9"

//PRIMARY
const LIGHT_PRIMARY           = "#B1F0EE"
const DARK_PRIMARY            = "#039081"

const main = {
  light:                    LIGHT,
  primary:                  PRIMARY,
  dark:                     DARK,
}

const neutral = {
  gray6:                    GRAY_6,
  gray5:                    GRAY_5,
  gray4:                    GRAY_4,
  gray3:                    GRAY_3,
  gray2:                    GRAY_2,
  gray:                     DARK,
}

const primary = {
  lightPrimary:                LIGHT_PRIMARY,
  primary:                     PRIMARY,
  darkPrimary:                 DARK_PRIMARY,
}

const extendedColors = {
  ...primary,
}


export const colorCategories = [main, primary, neutral]

export const theme =  {
  //PRIMARY
  ...main,

  //NEUTRAL
  ...neutral,

  //EXTENDED
  ...extendedColors,
}

export default theme;