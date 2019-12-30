import colors from '../colors';
import blending from '../blending';
import Color from 'color';
const linkedin = {
  darken1: Color(colors.twitter).darken(blending.darken1.basic).hex(),
  default: colors.twitter,
  lighten1: Color(colors.twitter).alpha(blending.lighten1.basic).rgb().string(),
  lighten2: Color(colors.twitter).alpha(blending.lighten2.basic).rgb().string(),
  lighten3: Color(colors.twitter).alpha(blending.lighten3.basic).rgb().string(),
  lighten4: Color(colors.twitter).alpha(blending.lighten4.basic).rgb().string(),
  lighten5: Color(colors.twitter).alpha(blending.lighten5.basic).rgb().string(),
  lighten6: Color(colors.twitter).alpha(blending.lighten6.basic).rgb().string()
};
export default linkedin;