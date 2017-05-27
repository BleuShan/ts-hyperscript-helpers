import {both, either} from 'ramda'
import {isValidString, startsWith} from './utils'

export default both(isValidString, either(startsWith('.'), startsWith('#')))
