import { ThemeContext } from '@emotion/react'
import { Box, styled } from '@mui/material'

const StyleBox = styled(Box) (({theme}) => ({
        height: '250px',
        witdg: '250px',
        backgroundColor: theme.palette.neutral?.darker,
}))

export const MuiCustomizingTheme = () => {
  return (
    <>
    <Box bgcolor='secondary.main' sx={{

        height: '300px',
        width: {
            xs: 100, //0
            sm: 200, //600
            md: 300,  //900
            lg: 400,  //1200
            xl: 500,  //1536

        }

}}>

</Box>
<StyleBox/>
</>
  )
}