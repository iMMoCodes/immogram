import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import SearchIcon from '@material-ui/icons/Search'
import {TextField, Button} from '@material-ui/core'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  searchButton: {
    width: '120px',
    margin: '0 5px',
    color: 'white',
    backgroundColor: '#757575',
    '&:hover': {
        backgroundColor: '#424242',
    },
},
[theme.breakpoints.down('xs')]: {
  searchButton: {
    width: '180px',
  },
}
}));

export default function SimpleModal() {
  const [searchUser,setSearchUser] = useState('')
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Search User</h2>
      <TextField
          style={{marginBottom: '10px'}}
							type='text'
							label='Type user here...'
							variant='outlined'
							fullWidth
							value={searchUser}
							onChange={(e) => setSearchUser(e.target.value)}
						/>
      <Button className={`${classes.searchButton}`}>Search</Button>
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen} className={`${classes.searchButton}`}>
        <SearchIcon/>&nbsp;Search
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="search-modal"
        aria-describedby="search-modal"
      >
        {body}
      </Modal>
    </div>
  );
}