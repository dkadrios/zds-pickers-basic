import MuiDialog from '@material-ui/core/Dialog'
import withTabSupport from 'hoc/withTabSupport'
import Transition from './Transition'

const TabSupportedDialog = withTabSupport(MuiDialog)

const Dialog = props => (
  <TabSupportedDialog
    disablePortal
    TransitionComponent={Transition}
    {...props}
  />
)

Dialog.propTypes = {}

export default Dialog
