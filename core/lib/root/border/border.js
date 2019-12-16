import primary from '../theme/colors/primary';
import secondary from '../theme/colors/secondary';
import success from '../theme/colors/success';
import warning from '../theme/colors/warning';
import error from '../theme/colors/error';
import info from '../theme/colors/info';
import dark from '../theme/colors/dark';
import white from '../theme/colors/white';
const border = {
  '1px': {
    solid: {
      primary: {
        darken1: '1px solid ' + primary.darken1,
        default: '1px solid ' + primary.default,
        lighten1: '1px solid ' + primary.lighten1,
        lighten2: '1px solid ' + primary.lighten2,
        lighten3: '1px solid ' + primary.lighten3,
        lighten4: '1px solid ' + primary.lighten4,
        lighten5: '1px solid ' + primary.lighten5,
        lighten5: '1px solid ' + primary.lighten6
      },
      secondary: {
        darken1: '1px solid ' + secondary.darken1,
        default: '1px solid ' + secondary.default,
        lighten1: '1px solid ' + secondary.lighten1,
        lighten2: '1px solid ' + secondary.lighten2,
        lighten3: '1px solid ' + secondary.lighten3,
        lighten4: '1px solid ' + secondary.lighten4,
        lighten5: '1px solid ' + secondary.lighten5,
        lighten5: '1px solid ' + secondary.lighten6
      },
      success: {
        darken1: '1px solid ' + success.darken1,
        default: '1px solid ' + success.default,
        lighten1: '1px solid ' + success.lighten1,
        lighten2: '1px solid ' + success.lighten2,
        lighten3: '1px solid ' + success.lighten3,
        lighten4: '1px solid ' + success.lighten4,
        lighten5: '1px solid ' + success.lighten5,
        lighten5: '1px solid ' + success.lighten6
      },
      warning: {
        darken1: '1px solid ' + warning.darken1,
        default: '1px solid ' + warning.default,
        lighten1: '1px solid ' + warning.lighten1,
        lighten2: '1px solid ' + warning.lighten2,
        lighten3: '1px solid ' + warning.lighten3,
        lighten4: '1px solid ' + warning.lighten4,
        lighten5: '1px solid ' + warning.lighten5,
        lighten5: '1px solid ' + warning.lighten6
      },
      error: {
        darken1: '1px solid ' + error.darken1,
        default: '1px solid ' + error.default,
        lighten1: '1px solid ' + error.lighten1,
        lighten2: '1px solid ' + error.lighten2,
        lighten3: '1px solid ' + error.lighten3,
        lighten4: '1px solid ' + error.lighten4,
        lighten5: '1px solid ' + error.lighten5,
        lighten5: '1px solid ' + error.lighten6
      },
      info: {
        darken1: '1px solid ' + info.darken1,
        default: '1px solid ' + info.default,
        lighten1: '1px solid ' + info.lighten1,
        lighten2: '1px solid ' + info.lighten2,
        lighten3: '1px solid ' + info.lighten3,
        lighten4: '1px solid ' + info.lighten4,
        lighten5: '1px solid ' + info.lighten5,
        lighten5: '1px solid ' + info.lighten6
      },
      dark: {
        darken1: '1px solid ' + dark.darken1,
        default: '1px solid ' + dark.default,
        lighten1: '1px solid ' + dark.lighten1,
        lighten2: '1px solid ' + dark.lighten2,
        lighten3: '1px solid ' + dark.lighten3,
        lighten4: '1px solid ' + dark.lighten4,
        lighten5: '1px solid ' + dark.lighten5,
        lighten5: '1px solid ' + dark.lighten6
      },
      white: {
        darken1: '1px solid ' + white.darken1,
        default: '1px solid ' + white.default,
        lighten1: '1px solid ' + white.lighten1,
        lighten2: '1px solid ' + white.lighten2,
        lighten3: '1px solid ' + white.lighten3,
        lighten4: '1px solid ' + white.lighten4,
        lighten5: '1px solid ' + white.lighten5,
        lighten5: '1px solid ' + white.lighten6
      }
    },
    dashed: {
      primary: {
        darken1: '1px dashed ' + primary.darken1,
        default: '1px dashed ' + primary.default,
        lighten1: '1px dashed ' + primary.lighten1,
        lighten2: '1px dashed ' + primary.lighten2,
        lighten3: '1px dashed ' + primary.lighten3,
        lighten4: '1px dashed ' + primary.lighten4,
        lighten5: '1px dashed ' + primary.lighten5,
        lighten5: '1px dashed ' + primary.lighten6
      },
      secondary: {
        darken1: '1px dashed ' + secondary.darken1,
        default: '1px dashed ' + secondary.default,
        lighten1: '1px dashed ' + secondary.lighten1,
        lighten2: '1px dashed ' + secondary.lighten2,
        lighten3: '1px dashed ' + secondary.lighten3,
        lighten4: '1px dashed ' + secondary.lighten4,
        lighten5: '1px dashed ' + secondary.lighten5,
        lighten5: '1px dashed ' + secondary.lighten6
      },
      success: {
        darken1: '1px dashed ' + success.darken1,
        default: '1px dashed ' + success.default,
        lighten1: '1px dashed ' + success.lighten1,
        lighten2: '1px dashed ' + success.lighten2,
        lighten3: '1px dashed ' + success.lighten3,
        lighten4: '1px dashed ' + success.lighten4,
        lighten5: '1px dashed ' + success.lighten5,
        lighten5: '1px dashed ' + success.lighten6
      },
      warning: {
        darken1: '1px dashed ' + warning.darken1,
        default: '1px dashed ' + warning.default,
        lighten1: '1px dashed ' + warning.lighten1,
        lighten2: '1px dashed ' + warning.lighten2,
        lighten3: '1px dashed ' + warning.lighten3,
        lighten4: '1px dashed ' + warning.lighten4,
        lighten5: '1px dashed ' + warning.lighten5,
        lighten5: '1px dashed ' + warning.lighten6
      },
      error: {
        darken1: '1px dashed ' + error.darken1,
        default: '1px dashed ' + error.default,
        lighten1: '1px dashed ' + error.lighten1,
        lighten2: '1px dashed ' + error.lighten2,
        lighten3: '1px dashed ' + error.lighten3,
        lighten4: '1px dashed ' + error.lighten4,
        lighten5: '1px dashed ' + error.lighten5,
        lighten5: '1px dashed ' + error.lighten6
      },
      info: {
        darken1: '1px dashed ' + info.darken1,
        default: '1px dashed ' + info.default,
        lighten1: '1px dashed ' + info.lighten1,
        lighten2: '1px dashed ' + info.lighten2,
        lighten3: '1px dashed ' + info.lighten3,
        lighten4: '1px dashed ' + info.lighten4,
        lighten5: '1px dashed ' + info.lighten5,
        lighten5: '1px dashed ' + info.lighten6
      },
      dark: {
        darken1: '1px dashed ' + dark.darken1,
        default: '1px dashed ' + dark.default,
        lighten1: '1px dashed ' + dark.lighten1,
        lighten2: '1px dashed ' + dark.lighten2,
        lighten3: '1px dashed ' + dark.lighten3,
        lighten4: '1px dashed ' + dark.lighten4,
        lighten5: '1px dashed ' + dark.lighten5,
        lighten5: '1px dashed ' + dark.lighten6
      },
      white: {
        darken1: '1px dashed ' + white.darken1,
        default: '1px dashed ' + white.default,
        lighten1: '1px dashed ' + white.lighten1,
        lighten2: '1px dashed ' + white.lighten2,
        lighten3: '1px dashed ' + white.lighten3,
        lighten4: '1px dashed ' + white.lighten4,
        lighten5: '1px dashed ' + white.lighten5,
        lighten5: '1px dashed ' + white.lighten6
      }
    }
  },
  '2px': {
    solid: {
      primary: {
        darken1: '2px solid ' + primary.darken1,
        default: '2px solid ' + primary.default,
        lighten1: '2px solid ' + primary.lighten1,
        lighten2: '2px solid ' + primary.lighten2,
        lighten3: '2px solid ' + primary.lighten3,
        lighten4: '2px solid ' + primary.lighten4,
        lighten5: '2px solid ' + primary.lighten5,
        lighten5: '2px solid ' + primary.lighten6
      },
      secondary: {
        darken1: '2px solid ' + secondary.darken1,
        default: '2px solid ' + secondary.default,
        lighten1: '2px solid ' + secondary.lighten1,
        lighten2: '2px solid ' + secondary.lighten2,
        lighten3: '2px solid ' + secondary.lighten3,
        lighten4: '2px solid ' + secondary.lighten4,
        lighten5: '2px solid ' + secondary.lighten5,
        lighten5: '2px solid ' + secondary.lighten6
      },
      success: {
        darken1: '2px solid ' + success.darken1,
        default: '2px solid ' + success.default,
        lighten1: '2px solid ' + success.lighten1,
        lighten2: '2px solid ' + success.lighten2,
        lighten3: '2px solid ' + success.lighten3,
        lighten4: '2px solid ' + success.lighten4,
        lighten5: '2px solid ' + success.lighten5,
        lighten5: '2px solid ' + success.lighten6
      },
      warning: {
        darken1: '2px solid ' + warning.darken1,
        default: '2px solid ' + warning.default,
        lighten1: '2px solid ' + warning.lighten1,
        lighten2: '2px solid ' + warning.lighten2,
        lighten3: '2px solid ' + warning.lighten3,
        lighten4: '2px solid ' + warning.lighten4,
        lighten5: '2px solid ' + warning.lighten5,
        lighten5: '2px solid ' + warning.lighten6
      },
      error: {
        darken1: '2px solid ' + error.darken1,
        default: '2px solid ' + error.default,
        lighten1: '2px solid ' + error.lighten1,
        lighten2: '2px solid ' + error.lighten2,
        lighten3: '2px solid ' + error.lighten3,
        lighten4: '2px solid ' + error.lighten4,
        lighten5: '2px solid ' + error.lighten5,
        lighten5: '2px solid ' + error.lighten6
      },
      info: {
        darken1: '2px solid ' + info.darken1,
        default: '2px solid ' + info.default,
        lighten1: '2px solid ' + info.lighten1,
        lighten2: '2px solid ' + info.lighten2,
        lighten3: '2px solid ' + info.lighten3,
        lighten4: '2px solid ' + info.lighten4,
        lighten5: '2px solid ' + info.lighten5,
        lighten5: '2px solid ' + info.lighten6
      },
      dark: {
        darken1: '2px solid ' + dark.darken1,
        default: '2px solid ' + dark.default,
        lighten1: '2px solid ' + dark.lighten1,
        lighten2: '2px solid ' + dark.lighten2,
        lighten3: '2px solid ' + dark.lighten3,
        lighten4: '2px solid ' + dark.lighten4,
        lighten5: '2px solid ' + dark.lighten5,
        lighten5: '2px solid ' + dark.lighten6
      },
      white: {
        darken1: '2px solid ' + white.darken1,
        default: '2px solid ' + white.default,
        lighten1: '2px solid ' + white.lighten1,
        lighten2: '2px solid ' + white.lighten2,
        lighten3: '2px solid ' + white.lighten3,
        lighten4: '2px solid ' + white.lighten4,
        lighten5: '2px solid ' + white.lighten5,
        lighten5: '2px solid ' + white.lighten6
      }
    },
    dashed: {
      primary: {
        darken1: '2px dashed ' + primary.darken1,
        default: '2px dashed ' + primary.default,
        lighten1: '2px dashed ' + primary.lighten1,
        lighten2: '2px dashed ' + primary.lighten2,
        lighten3: '2px dashed ' + primary.lighten3,
        lighten4: '2px dashed ' + primary.lighten4,
        lighten5: '2px dashed ' + primary.lighten5,
        lighten5: '2px dashed ' + primary.lighten6
      },
      secondary: {
        darken1: '2px dashed ' + secondary.darken1,
        default: '2px dashed ' + secondary.default,
        lighten1: '2px dashed ' + secondary.lighten1,
        lighten2: '2px dashed ' + secondary.lighten2,
        lighten3: '2px dashed ' + secondary.lighten3,
        lighten4: '2px dashed ' + secondary.lighten4,
        lighten5: '2px dashed ' + secondary.lighten5,
        lighten5: '2px dashed ' + secondary.lighten6
      },
      success: {
        darken1: '2px dashed ' + success.darken1,
        default: '2px dashed ' + success.default,
        lighten1: '2px dashed ' + success.lighten1,
        lighten2: '2px dashed ' + success.lighten2,
        lighten3: '2px dashed ' + success.lighten3,
        lighten4: '2px dashed ' + success.lighten4,
        lighten5: '2px dashed ' + success.lighten5,
        lighten5: '2px dashed ' + success.lighten6
      },
      warning: {
        darken1: '2px dashed ' + warning.darken1,
        default: '2px dashed ' + warning.default,
        lighten1: '2px dashed ' + warning.lighten1,
        lighten2: '2px dashed ' + warning.lighten2,
        lighten3: '2px dashed ' + warning.lighten3,
        lighten4: '2px dashed ' + warning.lighten4,
        lighten5: '2px dashed ' + warning.lighten5,
        lighten5: '2px dashed ' + warning.lighten6
      },
      error: {
        darken1: '2px dashed ' + error.darken1,
        default: '2px dashed ' + error.default,
        lighten1: '2px dashed ' + error.lighten1,
        lighten2: '2px dashed ' + error.lighten2,
        lighten3: '2px dashed ' + error.lighten3,
        lighten4: '2px dashed ' + error.lighten4,
        lighten5: '2px dashed ' + error.lighten5,
        lighten5: '2px dashed ' + error.lighten6
      },
      info: {
        darken1: '2px dashed ' + info.darken1,
        default: '2px dashed ' + info.default,
        lighten1: '2px dashed ' + info.lighten1,
        lighten2: '2px dashed ' + info.lighten2,
        lighten3: '2px dashed ' + info.lighten3,
        lighten4: '2px dashed ' + info.lighten4,
        lighten5: '2px dashed ' + info.lighten5,
        lighten5: '2px dashed ' + info.lighten6
      },
      dark: {
        darken1: '2px dashed ' + dark.darken1,
        default: '2px dashed ' + dark.default,
        lighten1: '2px dashed ' + dark.lighten1,
        lighten2: '2px dashed ' + dark.lighten2,
        lighten3: '2px dashed ' + dark.lighten3,
        lighten4: '2px dashed ' + dark.lighten4,
        lighten5: '2px dashed ' + dark.lighten5,
        lighten5: '2px dashed ' + dark.lighten6
      },
      white: {
        darken1: '2px dashed ' + white.darken1,
        default: '2px dashed ' + white.default,
        lighten1: '2px dashed ' + white.lighten1,
        lighten2: '2px dashed ' + white.lighten2,
        lighten3: '2px dashed ' + white.lighten3,
        lighten4: '2px dashed ' + white.lighten4,
        lighten5: '2px dashed ' + white.lighten5,
        lighten5: '2px dashed ' + white.lighten6
      }
    }
  },
  '3px': {
    solid: {
      primary: {
        darken1: '3px solid ' + primary.darken1,
        default: '3px solid ' + primary.default,
        lighten1: '3px solid ' + primary.lighten1,
        lighten2: '3px solid ' + primary.lighten2,
        lighten3: '3px solid ' + primary.lighten3,
        lighten4: '3px solid ' + primary.lighten4,
        lighten5: '3px solid ' + primary.lighten5,
        lighten5: '3px solid ' + primary.lighten6
      },
      secondary: {
        darken1: '3px solid ' + secondary.darken1,
        default: '3px solid ' + secondary.default,
        lighten1: '3px solid ' + secondary.lighten1,
        lighten2: '3px solid ' + secondary.lighten2,
        lighten3: '3px solid ' + secondary.lighten3,
        lighten4: '3px solid ' + secondary.lighten4,
        lighten5: '3px solid ' + secondary.lighten5,
        lighten5: '3px solid ' + secondary.lighten6
      },
      success: {
        darken1: '3px solid ' + success.darken1,
        default: '3px solid ' + success.default,
        lighten1: '3px solid ' + success.lighten1,
        lighten2: '3px solid ' + success.lighten2,
        lighten3: '3px solid ' + success.lighten3,
        lighten4: '3px solid ' + success.lighten4,
        lighten5: '3px solid ' + success.lighten5,
        lighten5: '3px solid ' + success.lighten6
      },
      warning: {
        darken1: '3px solid ' + warning.darken1,
        default: '3px solid ' + warning.default,
        lighten1: '3px solid ' + warning.lighten1,
        lighten2: '3px solid ' + warning.lighten2,
        lighten3: '3px solid ' + warning.lighten3,
        lighten4: '3px solid ' + warning.lighten4,
        lighten5: '3px solid ' + warning.lighten5,
        lighten5: '3px solid ' + warning.lighten6
      },
      error: {
        darken1: '3px solid ' + error.darken1,
        default: '3px solid ' + error.default,
        lighten1: '3px solid ' + error.lighten1,
        lighten2: '3px solid ' + error.lighten2,
        lighten3: '3px solid ' + error.lighten3,
        lighten4: '3px solid ' + error.lighten4,
        lighten5: '3px solid ' + error.lighten5,
        lighten5: '3px solid ' + error.lighten6
      },
      info: {
        darken1: '3px solid ' + info.darken1,
        default: '3px solid ' + info.default,
        lighten1: '3px solid ' + info.lighten1,
        lighten2: '3px solid ' + info.lighten2,
        lighten3: '3px solid ' + info.lighten3,
        lighten4: '3px solid ' + info.lighten4,
        lighten5: '3px solid ' + info.lighten5,
        lighten5: '3px solid ' + info.lighten6
      },
      dark: {
        darken1: '3px solid ' + dark.darken1,
        default: '3px solid ' + dark.default,
        lighten1: '3px solid ' + dark.lighten1,
        lighten2: '3px solid ' + dark.lighten2,
        lighten3: '3px solid ' + dark.lighten3,
        lighten4: '3px solid ' + dark.lighten4,
        lighten5: '3px solid ' + dark.lighten5,
        lighten5: '3px solid ' + dark.lighten6
      },
      white: {
        darken1: '3px solid ' + white.darken1,
        default: '3px solid ' + white.default,
        lighten1: '3px solid ' + white.lighten1,
        lighten2: '3px solid ' + white.lighten2,
        lighten3: '3px solid ' + white.lighten3,
        lighten4: '3px solid ' + white.lighten4,
        lighten5: '3px solid ' + white.lighten5,
        lighten5: '3px solid ' + white.lighten6
      }
    },
    dashed: {
      primary: {
        darken1: '3px dashed ' + primary.darken1,
        default: '3px dashed ' + primary.default,
        lighten1: '3px dashed ' + primary.lighten1,
        lighten2: '3px dashed ' + primary.lighten2,
        lighten3: '3px dashed ' + primary.lighten3,
        lighten4: '3px dashed ' + primary.lighten4,
        lighten5: '3px dashed ' + primary.lighten5,
        lighten5: '3px dashed ' + primary.lighten6
      },
      secondary: {
        darken1: '3px dashed ' + secondary.darken1,
        default: '3px dashed ' + secondary.default,
        lighten1: '3px dashed ' + secondary.lighten1,
        lighten2: '3px dashed ' + secondary.lighten2,
        lighten3: '3px dashed ' + secondary.lighten3,
        lighten4: '3px dashed ' + secondary.lighten4,
        lighten5: '3px dashed ' + secondary.lighten5,
        lighten5: '3px dashed ' + secondary.lighten6
      },
      success: {
        darken1: '3px dashed ' + success.darken1,
        default: '3px dashed ' + success.default,
        lighten1: '3px dashed ' + success.lighten1,
        lighten2: '3px dashed ' + success.lighten2,
        lighten3: '3px dashed ' + success.lighten3,
        lighten4: '3px dashed ' + success.lighten4,
        lighten5: '3px dashed ' + success.lighten5,
        lighten5: '3px dashed ' + success.lighten6
      },
      warning: {
        darken1: '3px dashed ' + warning.darken1,
        default: '3px dashed ' + warning.default,
        lighten1: '3px dashed ' + warning.lighten1,
        lighten2: '3px dashed ' + warning.lighten2,
        lighten3: '3px dashed ' + warning.lighten3,
        lighten4: '3px dashed ' + warning.lighten4,
        lighten5: '3px dashed ' + warning.lighten5,
        lighten5: '3px dashed ' + warning.lighten6
      },
      error: {
        darken1: '3px dashed ' + error.darken1,
        default: '3px dashed ' + error.default,
        lighten1: '3px dashed ' + error.lighten1,
        lighten2: '3px dashed ' + error.lighten2,
        lighten3: '3px dashed ' + error.lighten3,
        lighten4: '3px dashed ' + error.lighten4,
        lighten5: '3px dashed ' + error.lighten5,
        lighten5: '3px dashed ' + error.lighten6
      },
      info: {
        darken1: '3px dashed ' + info.darken1,
        default: '3px dashed ' + info.default,
        lighten1: '3px dashed ' + info.lighten1,
        lighten2: '3px dashed ' + info.lighten2,
        lighten3: '3px dashed ' + info.lighten3,
        lighten4: '3px dashed ' + info.lighten4,
        lighten5: '3px dashed ' + info.lighten5,
        lighten5: '3px dashed ' + info.lighten6
      },
      dark: {
        darken1: '3px dashed ' + dark.darken1,
        default: '3px dashed ' + dark.default,
        lighten1: '3px dashed ' + dark.lighten1,
        lighten2: '3px dashed ' + dark.lighten2,
        lighten3: '3px dashed ' + dark.lighten3,
        lighten4: '3px dashed ' + dark.lighten4,
        lighten5: '3px dashed ' + dark.lighten5,
        lighten5: '3px dashed ' + dark.lighten6
      },
      white: {
        darken1: '3px dashed ' + white.darken1,
        default: '3px dashed ' + white.default,
        lighten1: '3px dashed ' + white.lighten1,
        lighten2: '3px dashed ' + white.lighten2,
        lighten3: '3px dashed ' + white.lighten3,
        lighten4: '3px dashed ' + white.lighten4,
        lighten5: '3px dashed ' + white.lighten5,
        lighten5: '3px dashed ' + white.lighten6
      }
    }
  },
  '4px': {
    solid: {
      primary: {
        darken1: '4px solid ' + primary.darken1,
        default: '4px solid ' + primary.default,
        lighten1: '4px solid ' + primary.lighten1,
        lighten2: '4px solid ' + primary.lighten2,
        lighten3: '4px solid ' + primary.lighten3,
        lighten4: '4px solid ' + primary.lighten4,
        lighten5: '4px solid ' + primary.lighten5,
        lighten5: '4px solid ' + primary.lighten6
      },
      secondary: {
        darken1: '4px solid ' + secondary.darken1,
        default: '4px solid ' + secondary.default,
        lighten1: '4px solid ' + secondary.lighten1,
        lighten2: '4px solid ' + secondary.lighten2,
        lighten3: '4px solid ' + secondary.lighten3,
        lighten4: '4px solid ' + secondary.lighten4,
        lighten5: '4px solid ' + secondary.lighten5,
        lighten5: '4px solid ' + secondary.lighten6
      },
      success: {
        darken1: '4px solid ' + success.darken1,
        default: '4px solid ' + success.default,
        lighten1: '4px solid ' + success.lighten1,
        lighten2: '4px solid ' + success.lighten2,
        lighten3: '4px solid ' + success.lighten3,
        lighten4: '4px solid ' + success.lighten4,
        lighten5: '4px solid ' + success.lighten5,
        lighten5: '4px solid ' + success.lighten6
      },
      warning: {
        darken1: '4px solid ' + warning.darken1,
        default: '4px solid ' + warning.default,
        lighten1: '4px solid ' + warning.lighten1,
        lighten2: '4px solid ' + warning.lighten2,
        lighten3: '4px solid ' + warning.lighten3,
        lighten4: '4px solid ' + warning.lighten4,
        lighten5: '4px solid ' + warning.lighten5,
        lighten5: '4px solid ' + warning.lighten6
      },
      error: {
        darken1: '4px solid ' + error.darken1,
        default: '4px solid ' + error.default,
        lighten1: '4px solid ' + error.lighten1,
        lighten2: '4px solid ' + error.lighten2,
        lighten3: '4px solid ' + error.lighten3,
        lighten4: '4px solid ' + error.lighten4,
        lighten5: '4px solid ' + error.lighten5,
        lighten5: '4px solid ' + error.lighten6
      },
      info: {
        darken1: '4px solid ' + info.darken1,
        default: '4px solid ' + info.default,
        lighten1: '4px solid ' + info.lighten1,
        lighten2: '4px solid ' + info.lighten2,
        lighten3: '4px solid ' + info.lighten3,
        lighten4: '4px solid ' + info.lighten4,
        lighten5: '4px solid ' + info.lighten5,
        lighten5: '4px solid ' + info.lighten6
      },
      dark: {
        darken1: '4px solid ' + dark.darken1,
        default: '4px solid ' + dark.default,
        lighten1: '4px solid ' + dark.lighten1,
        lighten2: '4px solid ' + dark.lighten2,
        lighten3: '4px solid ' + dark.lighten3,
        lighten4: '4px solid ' + dark.lighten4,
        lighten5: '4px solid ' + dark.lighten5,
        lighten5: '4px solid ' + dark.lighten6
      },
      white: {
        darken1: '4px solid ' + white.darken1,
        default: '4px solid ' + white.default,
        lighten1: '4px solid ' + white.lighten1,
        lighten2: '4px solid ' + white.lighten2,
        lighten3: '4px solid ' + white.lighten3,
        lighten4: '4px solid ' + white.lighten4,
        lighten5: '4px solid ' + white.lighten5,
        lighten5: '4px solid ' + white.lighten6
      }
    },
    dashed: {
      primary: {
        darken1: '4px dashed ' + primary.darken1,
        default: '4px dashed ' + primary.default,
        lighten1: '4px dashed ' + primary.lighten1,
        lighten2: '4px dashed ' + primary.lighten2,
        lighten3: '4px dashed ' + primary.lighten3,
        lighten4: '4px dashed ' + primary.lighten4,
        lighten5: '4px dashed ' + primary.lighten5,
        lighten5: '4px dashed ' + primary.lighten6
      },
      secondary: {
        darken1: '4px dashed ' + secondary.darken1,
        default: '4px dashed ' + secondary.default,
        lighten1: '4px dashed ' + secondary.lighten1,
        lighten2: '4px dashed ' + secondary.lighten2,
        lighten3: '4px dashed ' + secondary.lighten3,
        lighten4: '4px dashed ' + secondary.lighten4,
        lighten5: '4px dashed ' + secondary.lighten5,
        lighten5: '4px dashed ' + secondary.lighten6
      },
      success: {
        darken1: '4px dashed ' + success.darken1,
        default: '4px dashed ' + success.default,
        lighten1: '4px dashed ' + success.lighten1,
        lighten2: '4px dashed ' + success.lighten2,
        lighten3: '4px dashed ' + success.lighten3,
        lighten4: '4px dashed ' + success.lighten4,
        lighten5: '4px dashed ' + success.lighten5,
        lighten5: '4px dashed ' + success.lighten6
      },
      warning: {
        darken1: '4px dashed ' + warning.darken1,
        default: '4px dashed ' + warning.default,
        lighten1: '4px dashed ' + warning.lighten1,
        lighten2: '4px dashed ' + warning.lighten2,
        lighten3: '4px dashed ' + warning.lighten3,
        lighten4: '4px dashed ' + warning.lighten4,
        lighten5: '4px dashed ' + warning.lighten5,
        lighten5: '4px dashed ' + warning.lighten6
      },
      error: {
        darken1: '4px dashed ' + error.darken1,
        default: '4px dashed ' + error.default,
        lighten1: '4px dashed ' + error.lighten1,
        lighten2: '4px dashed ' + error.lighten2,
        lighten3: '4px dashed ' + error.lighten3,
        lighten4: '4px dashed ' + error.lighten4,
        lighten5: '4px dashed ' + error.lighten5,
        lighten5: '4px dashed ' + error.lighten6
      },
      info: {
        darken1: '4px dashed ' + info.darken1,
        default: '4px dashed ' + info.default,
        lighten1: '4px dashed ' + info.lighten1,
        lighten2: '4px dashed ' + info.lighten2,
        lighten3: '4px dashed ' + info.lighten3,
        lighten4: '4px dashed ' + info.lighten4,
        lighten5: '4px dashed ' + info.lighten5,
        lighten5: '4px dashed ' + info.lighten6
      },
      dark: {
        darken1: '4px dashed ' + dark.darken1,
        default: '4px dashed ' + dark.default,
        lighten1: '4px dashed ' + dark.lighten1,
        lighten2: '4px dashed ' + dark.lighten2,
        lighten3: '4px dashed ' + dark.lighten3,
        lighten4: '4px dashed ' + dark.lighten4,
        lighten5: '4px dashed ' + dark.lighten5,
        lighten5: '4px dashed ' + dark.lighten6
      },
      white: {
        darken1: '4px dashed ' + white.darken1,
        default: '4px dashed ' + white.default,
        lighten1: '4px dashed ' + white.lighten1,
        lighten2: '4px dashed ' + white.lighten2,
        lighten3: '4px dashed ' + white.lighten3,
        lighten4: '4px dashed ' + white.lighten4,
        lighten5: '4px dashed ' + white.lighten5,
        lighten5: '4px dashed ' + white.lighten6
      }
    }
  },
};
export default border;