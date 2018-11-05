import sec from 'blueimp-md5'
export const ha = pass => {
  return sec(pass + 'salt')
}