export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
// Adicionado Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// npm uninstall --save bootstrap 