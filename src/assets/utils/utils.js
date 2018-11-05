const goRoute = (vue, name, isSave) => {
  if (!isSave) {
    vue.$router.replace({
      path: name
    })
  } else {
    vue.$router.push({
      path: name
    })
  }
}
module.exports = {
  goRoute
}
