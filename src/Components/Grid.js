import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  gridList: {
    width: 500,
    height: 200,
  },
}));



 const tileData = [
   {
     img: "./images/img-1.png",
     title: 'Image',
     author: 'author',
     cols: 1
   },
   {
    img: "./images/img-2.png",
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: "./images/img-3.png",
    title: 'Image',
    author: 'author',
    cols: 1,
  }
 ];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
 
        <h1 style={{ color: 'lightgrey' }}>Recipy Search Engine</h1>
       
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}