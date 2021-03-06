import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
    maxHeight: 200
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function PlaceCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="30"
          image="src/images/barcelona.jpeg"  
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Barcelona
          </Typography>
          <Typography component="p">
            Beautiful City.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

PlaceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaceCard);
