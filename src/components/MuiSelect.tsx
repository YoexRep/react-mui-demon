import { Stack, Box, TextField, MenuItem } from "@mui/material";

import { useState } from "react";



export const MuiSelect = () => {
    const [country, setCountry] = useState('')

    console.log({ country })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }


    const [countries, setCountries] = useState<string[]>([])
    console.log({ countries })

    const handleChangeMulti = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <Stack padding={2}>
            <Box width='250px' marginBottom='10px'>

                <TextField label='Select country' select value={country} onChange={handleChange} fullWidth>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>

            </Box>

            <Box width='250px'>

                <TextField label='Select multiple country' select value={countries} onChange={handleChangeMulti} fullWidth SelectProps={{multiple: true,}}>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>

            </Box>

        </Stack>


    )
}