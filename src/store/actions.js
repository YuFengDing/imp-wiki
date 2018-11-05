import * as types from './mutations-types'

export default {
  toggleRightShow: ({commit, state}) => {
    commit(types.TOGGLE_RIGHT_SHOW)
  }
}
