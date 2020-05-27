//PRIMARY
const BLUE_1                  = "#0091EA"
const GRAY_1                  = "#333333"
const WHITE                   = "#FFFFFF"

//SECONDARY
const RED_1                   = "#EF3824"
const ORANGE_1                = "#FF9000"
const YELLOW_1                = "#F7B500"
const GREEN_1                 = "#72BF44"

//NEUTRAL PALETTE
const GRAY_2                  = "#666666"
const GRAY_3                  = "#999999"
const GRAY_4                  = "#CCCCCC"
const GRAY_5                  = "#EEEEEE"
const GRAY_6                  = "#F9F9F9"
const BACKGROUND              = "#F3F6F7"

//BLUE
const LIGHT_BLUE              = "#EAF7FF"
const BLUE_2                  = "#007CC8"
const BLUE_3                  = "#005C95"

//RED
const LIGHT_RED               = "#FFF0F0"
const RED_3                   = "#B90000"
const SUPPORT_BRIGHT_RED      = "#FF0000"

//YELLOW
const SUPPORT_DARK_YELLOW     = "#FFC418"

//ORANGE
const ORANGE_2                = "#FF7200"

//GREEN
const LIGHT_GREEN             = "#EAF6E3"

const UI_BLACK                = "#000000"

const primary = {
  blue:                     BLUE_1,
  gray:                     GRAY_1,
  white:                    WHITE,
}

const secondary = {
  red:                      RED_1,
  orange:                   ORANGE_1,
  yellow:                   YELLOW_1,
  green:                    GREEN_1,
}

const neutral = {
  white:                    WHITE,
  background:               BACKGROUND,
  gray6:                    GRAY_6,
  gray5:                    GRAY_5,
  gray4:                    GRAY_4,
  gray3:                    GRAY_3,
  gray2:                    GRAY_2,
  gray:                     GRAY_1,
}

const blue = {
  lightBlue:                LIGHT_BLUE,
  blue:                     BLUE_1,
  blue2:                    BLUE_2,
  blue3:                    BLUE_3,
}

const red = {
  lightRed:                 LIGHT_RED,
  red:                      RED_1,
  red3:                     RED_3,
}

const orange = {
  orange:                   ORANGE_1,
  orange2:                  ORANGE_2,
}

const green = {
  lightGreen:               LIGHT_GREEN,
  green:                    GREEN_1,
}

const extendedColors = {
  ...blue,
  ...red,
  ...orange,
  ...green
}

const depricated = {
  brightRed:                SUPPORT_BRIGHT_RED,
  uiBlack:                  UI_BLACK,
  darkYellow:               SUPPORT_DARK_YELLOW,
}

export const colorCategories = [primary, secondary, neutral, blue, red, orange, green]

export const theme =  {
  //PRIMARY
  ...primary,

  //SECONDARY
  ...secondary,

  //NEUTRAL
  ...neutral,

  //EXTENDED
  ...extendedColors,

  //DEPRICATED
  ...depricated
}

export default theme;