import { useMemo } from 'react'

const uniquePrefix = 'unique-id'
let count = 0

export function useUniqueId(): string {
  const name = useMemo(() => `${uniquePrefix}-${count++}`, [])
  return name
}
