import produce from 'immer'

export default theme => produce(theme, (draft) => {
  const {
    // breakpoints,
    mixins: {
    //   absWidth,
    //   borderS,
    //   em,
      important,
    //   importantPx,
    //   importantRem,
    //   marginR,
    //   paddingR,
    //   rem,
    //   sizeR,
    //   transition,
    //   when,
    },
    // name,
    palette,
    // spacing,
  } = theme

  draft.overrides = {
    MuiAppBar: {
      root: {
        background: 'linear-gradient(45deg, #000 30%, #000 90%)',
      },
    },
    MuiButton: {
      root: {
        '&$disabled:': {
          background: 'linear-gradient(180deg, #aaa 30%, #aaa 90%)',
          color: '#555',
        },
      },
      containedPrimary: {
        borderRadius: 3,
        border: 0,
        color: 'white',
      },
    },
    MuiDialogContent: {
      root: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '1rem',
      },
    },
    MuiExpansionPanel: {
      root: {
        backgroundColor: '#444',
        color: 'white',
        marginTop: 4,
      },
      '&$expanded': {
        marginTop: '4px !important',
      },
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        color: 'white',
      },
    },
    MuiFormControlLabel: {
      label: {
        color: 'white',
      },
    },
    MuiListItem: {
      default: {
        paddingTop: 3,
        paddingBottom: 3,
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 5,
        paddingBottom: 5,
      },
    },
    MuiSelect: {
      root: {
        marginRight: 5,
        backgroundColor: palette.primary[600],
        color: 'white',
        borderRadius: 5,
        height: 30,
        paddingLeft: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.primary[500],
        boxShadow: `inset 1px 1px 0 ${palette.primary[400]}`,
      },
      icon: {
        color: 'white',
      },
    },
    MuiTab: {
      root: {
        backgroundColor: palette.primary[100],
        minWidth: '130px !important',
        maxWidth: '130px !important',
        borderRadius: '8px 8px 0 0',
        marginRight: 5,
        '&$selected': {
          backgroundColor: important(palette.primary[500]),
          color: palette.common.white,
        },
      },
      textColorInherit: {
        color: palette.text.dimmer,
      },
      wrapper: {
        flexDirection: 'row',
      },
      labelIcon: {
        minHeight: 48,
      },
    },
    MuiTabs: {
      indicator: {
        display: 'none',
      },
    },
    MuiToolbar: {
      root: {
        color: 'white',
      },
    },
    MuiTooltip: {
      tooltipPlacementTop: {
        fontSize: 14,
      },
      tooltipPlacementRight: {
        fontSize: 14,
      },
      tooltipPlacementBottom: {
        fontSize: 14,
      },
      tooltipPlacementLeft: {
        fontSize: 14,
      },
    },
  }
})
