// eslint-disable-next-line no-useless-escape
const SELECTOR_TEST_REGEX = /^[.#][a-z][a-z0-9_\-]/i

export default function isClassOrIdSelector(value: unknown): value is string {
  if (typeof value === 'string') {
    return SELECTOR_TEST_REGEX.test(value)
  }

  return false
}
