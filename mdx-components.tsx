import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components?: any): any {
  return getDocsMDXComponents(components)
}
