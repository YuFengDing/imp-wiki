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
export default goRoute
