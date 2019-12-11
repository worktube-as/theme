import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const black = {
  default: colors.black,
  lighten1: Color(colors.black)
    .alpha(blending.lighten1.basic)
    .rgb()
    .string(),
  lighten2: Color(colors.black)
    .alpha(blending.lighten2.basic)
    .rgb()
    .string(),
  lighten3: Color(colors.black)
    .alpha(blending.lighten3.basic)
    .rgb()
    .string(),
  lighten4: Color(colors.black)
    .alpha(blending.lighten4.basic)
    .rgb()
    .string(),
  lighten5: Color(colors.black)
    .alpha(blending.lighten5.basic)
    .rgb()
    .string(),
  lighten6: Color(colors.black)
    .alpha(blending.lighten6.basic)
    .rgb()
    .string()
}

export default black
