import { Style, StyleClasses, StyleFactory } from './types'
import { css } from '@emotion/css'

const cache = new Map<StyleFactory<Style>, StyleClasses<Style>>()

// Using this function will maintain the schema of "S" when the factory is invoked.
export const createStyle = <S extends Style>(factory: StyleFactory<S>): StyleFactory<S> => {
    return factory
}

export const createStyleClasses = <S extends Style>(factory: StyleFactory<S>): StyleClasses<S> => {
    if (cache.has(factory) === false) {
        const scheme = factory()
        const classes = {} as { [key: string]: string }

        for (const key of Object.keys(scheme)) {
            classes[key] = css(scheme[key])
        }

        cache.set(factory, classes)
    }

    return cache.get(factory) as StyleClasses<S>
}
