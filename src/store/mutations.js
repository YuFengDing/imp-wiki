import * as types from './mutations-types'

export default {
  [types.TEST]: (state) => {
    state.test = 'helllo world'
  },
  [types.TOGGLE_RIGHT_SHOW]: (state) => {
    state.isRightShow = !state.isRightShow
  }
}
