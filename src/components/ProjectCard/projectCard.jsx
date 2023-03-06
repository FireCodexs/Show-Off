import React from "react";
import "./projectCard.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ProjectCard(props) {
  return (
    <div className="card-container">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        id={props.id}
        image={props.image}
        title={props.title}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.repository_link}>Repository</Button>
        <Button size="small" href={props.deployed_link}>Deployed</Button>
      </CardActions>
    </Card>
        </div>
  );
}

export default ProjectCard;