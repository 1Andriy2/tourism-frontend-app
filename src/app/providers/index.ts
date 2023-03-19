import compose from 'compose-function'
import withRouter from './with-router/withRouter'

const withProviders = compose(withRouter)

export default withProviders