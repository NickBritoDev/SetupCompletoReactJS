import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { setKey, verificarChave } from '../verificaChaveDeAutorizacao'

describe('Testes para as funções de localStorage', () => {
  let localStorageMock = {}

  beforeEach(() => {
    localStorageMock = {
      store: {},
      getItem: function (key) {
        return this.store[key] !== undefined ? this.store[key] : null
      },
      setItem: function (key, value) {
        this.store[key] = value.toString()
      },
      clear: function () {
        this.store = {}
      }
    }
    global.localStorage = localStorageMock
  })

  afterEach(() => {
    global.localStorage = null
  })

  test('setKey deve salvar um item no localStorage simulado', () => {
    const chave = 'testChave'
    const valor = 'testValor'

    setKey(chave, valor)

    expect(localStorageMock.getItem(chave)).toBe(valor)
  })

  test('verificarChave deve retornar o valor correspondente à chave no localStorage simulado', () => {
    const chave = 'testChave'
    const valor = 'testValor'

    setKey(chave, valor)

    const valorRetornado = verificarChave(chave)

    expect(valorRetornado).toBe(valor)
  })

  test('verificarChave deve retornar null se a chave não existir no localStorage simulado', () => {
    const chaveInexistente = 'chaveInexistente'

    const valorRetornado = verificarChave(chaveInexistente)

    expect(valorRetornado).toBeNull()
  })
})
