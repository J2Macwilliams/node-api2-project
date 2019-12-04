import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Card, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    Card: {
        background: 'green',
        collor: 'white'
    }
}))


function PostsList() {
    const [posts, setPosts] = useState()
    const classes = useStyles();

    useEffect(() => {
        axios
            .get('http://localhost:4001/api/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div className={classes.root}>
            <Grid container>
                {posts.map(midEarth => {
                    return (
                        <Grid item key={midEarth.id} >
                        <Card className={classes.card}>
                            <Typography variant="h3">
                                {midEarth.title}
                            </Typography>
                            <Typography variant="h5">
                                {midEarth.contents}
                            </Typography>
                        </Card>
                    </Grid>
                    );
                    }
                )}
            </Grid>
        </div>
    )
}

export default PostsList
