import { execaCommand } from 'execa'
import { test, expect } from 'vitest'
import JSON5 from 'json5'


test('program', async () => {
  const { stdout = '{}' } = await execaCommand('ts-node ../src/program.ts')
  const result = JSON5.parse(stdout)
  expect(result).toEqual()
})
