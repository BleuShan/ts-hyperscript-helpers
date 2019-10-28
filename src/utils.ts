import {complement, isEmpty, head, is, isNil as _isNil, pipe, equals} from 'ramda'

export const isValidString = (value: unknown): value is string =>
  is(String, value) && complement(isEmpty)(value)
export const startsWith = <T>(value: T): ((collection: T[]) => boolean) =>
  pipe(
    head,
    equals(value)
  )
export const isNil = (value: unknown): value is undefined | null => _isNil(value)
