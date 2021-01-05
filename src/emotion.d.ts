import 'emotion/react'
import {theme} from './theme'

declare module '@emotion/react' {
    type ChakraTheme = typeof theme
    export interface Theme extends ChakraTheme {}
}