import black from './colors/black';
import primary from './colors/primary';
import error from './colors/error';
const shadows = {
  xxs: '0px 1px 2px 0px ' + black.lighten4,
  xs: '0px 2px 4px 0px ' + black.lighten4,
  sm: '0px 4px 8px 0px ' + black.lighten4,
  md: '0px 8px 16px 0px ' + black.lighten4,
  lg: '0px 16px 24px 0px ' + black.lighten4,
  xl: '0px 24px 32px 0px ' + black.lighten4,
  buttonPrimary: '0px 0px 0px 4px ' + primary.lighten4,
  buttonDanger: '0px 0px 0px 4px ' + error.lighten4
};
export default shadows;