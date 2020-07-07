import * as actions from './actions'

const initialState = {
  musicians: [],
  isLoading: false,
  error: null,
}

export function musiciansReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MUSICIANS_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_MUSICIANS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        musicians: action.musicians,
      }
    default:
      return state
  }
}

