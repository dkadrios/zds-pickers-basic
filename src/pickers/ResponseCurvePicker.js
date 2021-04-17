import PropTypes from 'prop-types'
import { findObj } from '../utils'
import ResponseCurve, { DefaultTooltip, RESPONSE_CURVES } from './ResponseCurve'
import Select from './Select'

const ResponseCurvePicker = (props) => {
  const { Tooltip, inverted, onChange, value, ...rest } = props

  return (
    <Select
      onChange={f => f}
      {...rest}
      components={{
        Placeholder: () => (
          <div className="singleValue">
            {findObj('value', value)(RESPONSE_CURVES)?.label}
          </div>
        ),
        // eslint-disable-next-line react/prop-types
        MenuList: ({ setValue }) => (
          <ResponseCurve
            autosize
            inverted={inverted}
            onChange={({ target: { value: v } }) => {
              setValue(v)
              onChange(v)
            }}
            Tooltip={Tooltip}
            value={value}
          />
        ),
      }}
      value={value}
    />
  )
}

ResponseCurvePicker.propTypes = {
  value: PropTypes.number.isRequired,
  inverted: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  Tooltip: PropTypes.elementType,
}

ResponseCurvePicker.defaultProps = {
  inverted: false,
  Tooltip: DefaultTooltip,
}

export default ResponseCurvePicker
