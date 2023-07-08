import { CSSObject } from '@emotion/css'

export type Style = {
    readonly [key: string]: CSSObject
}

export type StyleClasses<S extends Style> = {
    readonly [key in keyof S]: string
}

export type StyleFactory<S extends Style> = () => S
