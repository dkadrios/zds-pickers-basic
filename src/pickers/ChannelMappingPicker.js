import React, { forwardRef, useCallback } from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import { arraySequence } from '../utils'
import Select from './Select'

const options = arraySequence(16).map(value => ({ value, label: value }))

const ChannelMappingPicker = forwardRef(({ channels, className, ...rest }, ref) => {
  const formatOptionLabel = useCallback(
    ({ value }, { context }) => {
      const mapping = channels[value]

      return mapping ? (
        <span className="mapping-entry">
          <b>
            {value + 1}
            {context === 'value' && ' -'}
          </b>
          <span className="mapping-entry-label">{mapping}</span>
        </span>
      ) : (
        <span className="mapping-entry empty-mapping-entry">
          <b>
            {value + 1}
            {context === 'value' && ' -'}
          </b>
          <span className="mapping-entry-label">no mapping</span>
        </span>
      )
    },
    [channels],
  )

  return (
    <Select
      {...rest}
      className={cl(className, 'channel-mapping-picker')}
      formatOptionLabel={formatOptionLabel}
      options={options}
      ref={ref}
    />
  )
})

ChannelMappingPicker.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default ChannelMappingPicker
