export function setKey (chave, valor) {
  localStorage.setItem(chave, valor)
}

export function verificarChave (chave) {
  const valorChave = localStorage.getItem(chave)
  return valorChave
}
