import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class myList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(myList);
