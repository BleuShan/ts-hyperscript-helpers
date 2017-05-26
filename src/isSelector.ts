import {complement, isEmpty, either, head, both, is, pipe, equals} from 'ramda'

const isValidString = both(is(String), complement(isEmpty))
const startsWith = (value: any) => pipe(head, equals(value))

export default both(isValidString, either(startsWith('.'), startsWith('#')))
