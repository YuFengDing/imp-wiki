import * as types from './mutations-types'

export default {
  [types.TEST]: (state) => {
    state.test = 'helllo world'
  },
  [types.TOGGLE_COLLAPSE]: (state) => {
    state.collapse = !state.collapse
  }
}
