import {asciinestring, asciistring, random, Arbitrary, oneof} from 'jsverify'
import {replace} from 'ramda'

export const selectorName = replace(/^[.#]/, '')
export const className: Arbitrary<string> = asciinestring.smap(s => `.${s}`, selectorName)
export const id: Arbitrary<string> = asciinestring.smap(s => `#${s}`, selectorName)
export const selector: Arbitrary<string> = oneof([className, id])
export const nonSelector: Arbitrary<string> = asciistring.smap(selectorName, s => random(0, 100) > 50 ? `#${s}` : `.${s}`)
