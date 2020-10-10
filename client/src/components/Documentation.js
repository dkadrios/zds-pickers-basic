import React from 'react'
import Link from '@material-ui/core/Link'
import HelpIcon from '@material-ui/icons/Help'

const Documentation = () => (
  <Tooltip title="View documentation">
    <Link
      href="https://s3.amazonaws.com/zds-shifter/ZDS+Shifter+-+User+Manual+v1.pdf"
      target="_blank"
    >
      <HelpIcon />
    </Link>
  </Tooltip>
)

export default Documentation