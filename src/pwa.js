let deferredPrompt

export function initPWA () {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    deferredPrompt = event
    showInstallPrompt()
  })
}

export function showInstallPrompt () {
  const installButton = document.getElementById('installButton')
  installButton.style.display = 'block'

  installButton.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação do PWA')
        } else {
          console.log('Usuário recusou a instalação do PWA')
        }
        deferredPrompt = null
      })
    }
  })
}
