import {complement, isEmpty, head, both, is, isNil as _isNil, pipe, equals, Variadic} from 'ramda'

export const isValidString = both(is(String), complement(isEmpty))
export const startsWith = (value: any) => pipe(head, equals(value))
export const isNil = (value: any): value is undefined|null => _isNil(value)
