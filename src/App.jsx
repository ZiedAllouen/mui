import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent,  CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles.js'
const App =()=>{
    const classes = useStyles();
    return(
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant='h6'> Album Of Photos </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color ='textPrimary' gutterBottom>
                            Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
Hello every one
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify = 'center'>
                                <Grid item>
                                    <Button variant ='contained' color='primary'>
                                        see my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant ='outlined' color='primary'>
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </main>
        </>

    )
}

export default App