// Copyright 2024 Northern.tech AS
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
import type { FormControlProps } from '@mui/material';
import { Color, autocompleteClasses, inputBaseClasses, outlinedInputClasses, switchClasses } from '@mui/material';

const componentProps = {
  MuiTextField: {
    defaultProps: {
      variant: 'standard' as FormControlProps['variant']
    }
  },
  MuiFormControl: {
    defaultProps: {
      variant: 'standard' as FormControlProps['variant']
    }
  },
  MuiSelect: {
    defaultProps: {
      autoWidth: true,
      variant: 'standard' as FormControlProps['variant']
    },
    styleOverrides: {
      select: {
        paddingLeft: '12px',
        minHeight: 'inherit'
      }
    }
  }
};
const fontSize = 13;
const round = (value: number) => Math.round(value * 1e4) / 1e4;
const htmlFontSize = 10;
const coef = fontSize / 14;
const pxToRem = (size: number) => `${round((size / htmlFontSize) * coef)}rem`;

export const typography = {
  fontFamily: 'Red Hat Text',
  fontSize,
  body1: {
    lineHeight: 1.5,
    fontWeight: 400
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400
  },
  pxToRem,
  htmlFontSize
};
export const gray = {
  900: '#303030',
  800: '#333435',
  700: '#515253',
  600: '#646566',
  500: '#8C8D8E',
  400: '#ACADAE',
  300: '#D1D2D3',
  200: '#E3E4E5',
  100: '#EEEFF0',
  50: '#F7F8F9'
};
export const red = {
  900: '#A83220',
  800: '#B83A2A',
  700: '#C54030',
  600: '#D74936',
  400: '#E25D50',
  300: '#DA7972',
  200: '#E79D99',
  100: '#F5D3CF',
  50: '#FCF1EF'
};
export const orange = {
  900: '#F5821F',
  850: '#D18F24',
  800: '#F9AB2D',
  700: '#FCC335',
  600: '#FEDB3E',
  500: '#F9E73C',
  400: '#FBEC5A',
  300: '#FDF179',
  200: '#FEF59F',
  100: '#FFF9C5',
  50: '#FFFDE8'
};
export const darkBlue = {
  900: '#052569',
  800: '#15357F',
  700: '#1E3F8B',
  600: '#274B97',
  500: '#2E50A0',
  400: '#5069AD',
  300: '#7084BA',
  200: '#98A6CE',
  100: '#C1C9E2',
  50: '#E6E9F3'
};
export const blue = {
  900: '#1642A2',
  800: '#1B60C1',
  700: '#1D71D3',
  600: '#1F83E7',
  500: '#1F91F5',
  400: '#3FA1F7',
  300: '#62B1F8',
  200: '#8FC7FA',
  100: '#BADCFC',
  50: '#E3F1FD'
};
export const green: Partial<Color> = {
  900: '#00551F',
  800: '#007332',
  700: '#00843D',
  600: '#079649',
  500: '#13A552',
  400: '#45B26B',
  300: '#69BF84',
  200: '#95D0A7',
  100: '#BFE3C9',
  50: '#E4F4E9'
};
export const darkBackground: Partial<Color> = {
  900: '#21262A',
  800: '#2B3137',
  700: '#30353C',
  600: '#32373E',
  500: '#343A40',
  400: '#393E44',
  300: '#3B4046',
  200: '#3F444A',
  100: '#41474C',
  50: '#44494F'
};
export const darkThemeText = 'rgba(255, 255, 255, 0.87)';
export const actionDisabledBackground = 'rgba(0, 0, 0, 0.12)';
export const actionDisabledBackgroundDark = 'rgba(0, 0, 0, 0.9)';

export const commonPalette = {
  gray,
  red,
  orange,
  darkBlue,
  blue,
  green
};
export const overrides = {
  ...componentProps,
  MuiTextField: {
    styleOverrides: {
      root: ({ props }: { props: { multiline?: boolean } }) => ({
        width: '100%',
        fontSize: '16px',
        padding: 0,
        ...(props.multiline ? {} : { height: '40px' })
      })
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        lineHeight: 'inherit',
        '&:has(.MuiSelect-select)': {
          paddingLeft: 0
        },
        '& textarea': {
          '&:focus': {
            border: 'none !important',
            boxShadow: 'none'
          }
        },
        '& input, &input:focus': {
          padding: '6px 12px !important',
          margin: 0,
          border: 'none !important',
          boxShadow: 'none',
          color: 'inherit'
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        fontSize: 14,
        fontWeight: 500
      }
    }
  },
  MuiAutocomplete: {
    styleOverrides: {
      popper: {
        [`& .${autocompleteClasses.option}`]: {
          //TODO: find a way to get rid of !important
          padding: '11px 24px !important'
        }
      },
      root: {
        minWidth: 200,
        [`& .${autocompleteClasses.input}`]: {
          margin: 0
        },
        [`& .${outlinedInputClasses.root}`]: {
          padding: '0 !important'
        },
        [`& .${inputBaseClasses.input}::placeholder`]: {
          opacity: 0.42
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          border: '0px solid transparent',
          borderRadius: '4px'
        }
      },
      noOptions: {
        padding: '30px 24px',
        wordBreak: 'break-word',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        backgroundColor: '#FFF',
        color: '#0B132A',
        border: 'none',
        margin: 0
      }
    }
  },
  MuiTablePagination: {
    styleOverrides: {
      root: {
        justifyContent: 'flex-end',
        flexGrow: 1
      }
    }
  },
  MuiFormControl: {
    ...componentProps.MuiFormControl,
    styleOverrides: {
      root: {
        minWidth: '140px'
      }
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontSize: '1.2rem'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'none'
      },
      text: {
        padding: '10px 15px'
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingTop: 11,
        paddingBottom: 11,
        '&.Mui-disabled': {
          opacity: 1
        }
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        '& input[type="checkbox"]': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minWidth: 0,
          height: '100%',
          minHeight: 0,
          margin: 0,
          padding: 0,
          border: 0,
          borderRadius: 0,
          background: 'none'
        },
        [`& .${switchClasses.switchBase}`]: {
          color: '#F4F4F5',
          [`& + .${switchClasses.track}`]: {
            backgroundColor: actionDisabledBackground,
            opacity: 1
          },
          [`&.${switchClasses.checked}`]: {
            color: blue[500],
            [`& + .${switchClasses.track}`]: {
              backgroundColor: blue[500],
              opacity: 0.5
            }
          }
        }
      }
    }
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none'
      }
    }
  },
  MuiTable: {
    styleOverrides: {
      root: {
        border: '1px solid #E5E5E5',
        borderCollapse: 'collapse',
        fontSize: 14,
        fontWeight: 500,
        backgroundColor: '#fff'
      }
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent'
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: '8px 12px',
        height: 'auto',
        lineHeight: 1.5,
        // grid-style table: every cell carries its own bottom + right border
        borderBottom: '1px solid #E5E5E5',
        borderRight: '1px solid #E5E5E5',
        fontSize: 14,
        fontWeight: 500,
        color: 'inherit',
        wordBreak: 'break-word',
        // last cell in a row drops the right border so we don't double up
        // against the table's outer border
        '&:last-child': {
          borderRight: 'none'
        }
      },
      head: {
        padding: '12px 12px',
        color: '#767676',
        fontWeight: 600,
        backgroundColor: 'transparent',
        whiteSpace: 'nowrap'
      },
      paddingCheckbox: {
        // !important needed so `paddingCheckbox` wins against the `head`
        // padding override above when both classes are applied to the same
        // <th> in the table header
        padding: '0 0 0 6px !important',
        width: '40px',
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    }
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backgroundColor: 'transparent'
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        '&.MuiDialog-paper': {
          padding: 0
        }
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: 16,
        fontWeight: 700,
        padding: '16px 8px 16px 16px',
        marginBottom: 16
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 16,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '20px'
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 16
      }
    }
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        '&:not(.MuiBackdrop-invisible)': {
          backgroundColor: 'rgba(0, 0, 0, 0.64)'
        }
      }
    }
  }
};
