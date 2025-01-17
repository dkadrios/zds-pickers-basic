import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import ccValues from '../midi/ccValues'
import Select from './Select'

const CCPicker = forwardRef((props, ref) => (
  <Select
    {...props}
    options={ccValues}
    ref={ref}
  />
))

CCPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default CCPicker
