import { musicians } from '../data'

export const GET_MUSICIANS = `musicians/GET_MUSICIANS`
export const GET_MUSICIANS_STARTED = 'musicians/GET_MUSICIANS_STARTED'
export const GET_MUSICIANS_SUCCEEDED = 'musicians/GET_MUSICIANS_SUCCEEDED'

export const getMusiciansStarted = () => ({
  type: GET_MUSICIANS_STARTED,
})

export const getMusiciansSucceeded = (musicians) => ({
  type: GET_MUSICIANS_SUCCEEDED,
  musicians
})
export const getMusicians = (dispatch) => {
  dispatch(getMusiciansStarted())
  setTimeout(() => {
    dispatch(getMusiciansSucceeded(musicians))
  }, 2000)
}