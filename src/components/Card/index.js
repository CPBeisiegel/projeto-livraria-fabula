import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


export function ImgMediaCard(props) {


  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/livrariaFabula/${props.id}`
      );
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="card">
            <Card sx={{ maxWidth: 300 }}>

                <CardMedia 
                className="image_card"
                component="img"
                alt="book-cover"
                item xs={2}
                image={props.image}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Detalhes
                    {/* <Link to={`/detalhes/${props.id}`}>Detalhes</Link> */}
                </Typography>
                </CardContent>
                <CardActions>
                <Link to={`/edit-cadastro/${props.id}`}>
                <Button size="small">Edit</Button>
                </Link>
                <Button size="small" type="button" onClick={handleDelete}>Delete</Button>
                </CardActions>
            </Card>
    </div>  

  );
}

