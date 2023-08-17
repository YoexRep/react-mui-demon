import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return (<div>
        <Typography variant="h1" gutterBottom>h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1">Sub title 1</Typography>
        <Typography variant="subtitle2">Sub title 2</Typography>

        <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laborum, laudantium quis architecto non doloribus tempore velit excepturi aliquam id eveniet, nemo minus tenetur nihil atque, eligendi dolor tempora beatae.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cumque ad. Quasi dolorum sunt perspiciatis animi vero iure aperiam, asperiores corporis quae sapiente deserunt rerum id reprehenderit similique quam est.</Typography>

    </div>)
}