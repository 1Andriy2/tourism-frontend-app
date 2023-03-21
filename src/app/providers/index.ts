import compose from 'compose-function'

import withRouter from './with-router/withRouter'
import withChakraUi from './with-chakra-ui/withChakraUi'
import withReactQuery from './with-react-query/withReactQuery'

const withProviders = compose(withRouter, withReactQuery, withChakraUi)

export default withProviders