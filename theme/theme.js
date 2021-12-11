import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: props => ({
    body: {
      color: mode('black', 'white')(props),
      bg: mode('#FFF', 'teal')(props),
    },
  }),
}

const components = {

}

const colors = {
    eye: {
        head: 'purple',
    }
}

const theme = extendTheme({
    colors,
    components,
    styles,
})

export default theme
