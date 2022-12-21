import { ChakraTheme, extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles: ChakraTheme["styles"] = {
    global: (props) => ({
        "html, body": {
            background: "black",
            color: "white"
        }
    })
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme