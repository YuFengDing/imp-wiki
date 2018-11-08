import * as types from './mutations-types'

export default {
  toggleCollapse: ({commit}) => {
    commit(types.TOGGLE_COLLAPSE)
  }
}
