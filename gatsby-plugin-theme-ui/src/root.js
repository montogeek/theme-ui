import React from 'react'
import { ThemeProvider, ColorModeProvider } from 'theme-ui'
import merge from 'lodash.merge'
import { themes, components } from 'gatsby-plugin-theme-ui/theme-loader'

const theme = merge({}, ...themes)
const comps = merge({}, ...components)

export const wrapRootElement = ({ element, props }, opts) => {
  const children = (
    <ThemeProvider
      components={comps}
      theme={theme}>
      {element}
    </ThemeProvider>
  )

  // todo: figure out how to enable and disable this
  // if (!opts.initialColorMode) return children

  return (
    <ColorModeProvider initialColorMode={opts.initialColorMode}>
      {children}
    </ColorModeProvider>
  )
}
