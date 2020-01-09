import colors from '../colors';
import blending from '../blending';
import Color from 'color';
const youtube = {
  darken1: Color(colors.youtube).darken(blending.darken1.basic).hex(),
  default: colors.youtube,
  lighten1: Color(colors.youtube).alpha(blending.lighten1.basic).rgb().string(),
  lighten2: Color(colors.youtube).alpha(blending.lighten2.basic).rgb().string(),
  lighten3: Color(colors.youtube).alpha(blending.lighten3.basic).rgb().string(),
  lighten4: Color(colors.youtube).alpha(blending.lighten4.basic).rgb().string(),
  lighten5: Color(colors.youtube).alpha(blending.lighten5.basic).rgb().string(),
  lighten6: Color(colors.youtube).alpha(blending.lighten6.basic).rgb().string()
};
export default youtube;