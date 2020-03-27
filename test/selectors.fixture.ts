import {asciinestring, asciistring, random, oneof, suchthat} from 'jsverify'
import {replace, test, complement} from 'ramda'

// eslint-disable-next-line no-useless-escape
const VALID_SELECTOR_NAME_REGEX = /^[a-z][a-z0-9_\-]+/i

const extractSelectorName = replace(/^[.#]/, '')
const selectorName = suchthat(asciinestring, test(VALID_SELECTOR_NAME_REGEX))

export const className = selectorName.smap((s) => `.${s}`, extractSelectorName)
export const id = selectorName.smap((s) => `#${s}`, extractSelectorName)
export const selector = oneof([className, id])
export const nonSelector = suchthat(
  asciistring,
  complement(test(VALID_SELECTOR_NAME_REGEX))
).smap(extractSelectorName, (s) => (s.length === 0 ? s : random(0, 100) > 50 ? `#${s}` : `.${s}`))
