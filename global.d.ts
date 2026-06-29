declare module '*.css'

declare module 'next/font/google' {
  const Geist: any
  const Geist_Mono: any
  export { Geist, Geist_Mono }
  export default Geist
}

declare module '@vercel/analytics/next' {
  import { ComponentType } from 'react'
  export const Analytics: ComponentType<any>
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'test' | string
  }
}

declare var process: NodeJS.Process

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any
  export function jsxs(type: any, props: any, key?: any): any
  export const Fragment: any
}
