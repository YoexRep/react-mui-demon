import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";

export const MuiCard = () => {
    return (
    <Box width='300px'>
        <Card>
            <CardMedia 
            
                component='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography  variant='body2' color='text.secondary'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quasi inventore architecto autem alias molestiae, unde minima consequatur vel consectetur corporis ratione impedit dolorem dolore tempore excepturi distinctio optio exercitationem.
                </Typography>

            </CardContent>
            <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
    </Box>

    )
}