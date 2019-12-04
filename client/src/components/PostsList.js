import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, makeStyles, Card, Typography } from '@material-ui/core'
// import PostCard from './PostCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: 10,
        padding: 10,
        background: 'green',
        color: 'white'
    }
}));


function PostsList() {
    const [posts, setPosts] = useState([])
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
        <div>
            <Typography variant="h3">
                Middle-Earth Wisdom
            </Typography>
            <Grid container className={classes.root} spacing={1}>
                {posts.map((midEarth, id) => (
                    <Grid item key={id} xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h5">
                                {midEarth.title}
                            </Typography>
                            <Typography variant="h6">
                                {midEarth.contents}
                            </Typography>
                        </Card>
                    </Grid>)


                )}
            </Grid>
        </div>
    )
}

export default PostsList
