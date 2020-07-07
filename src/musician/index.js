import components from './components'
import * as actions from './actions'
import { musiciansReducer } from './reducer'

const musicians = {
  actions,
  components,
  reducer: musiciansReducer,
}

export default musicians