import { Box, Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNext from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
    return (<Box m={2}>
    <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNext fontSize='small'/>} maxItems={2}>
            <Link underline="hover" href='#'>Home</Link>
            <Link underline="hover" href='#'>Catalog</Link>
            <Link underline="hover" href='#'>Accesories</Link>
           <Typography color='text.primary'>Shoes</Typography>

    </Breadcrumbs>
        
    </Box>)
}