import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import {TextField, Button} from '@material-ui/core'
import {SERVER_URL} from '../../constants/fetchURL'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

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
    margin: '0 3px',
    color: 'white',
    backgroundColor: '#757575',
    '&:hover': {
        backgroundColor: '#424242',
    },
},
searchResults: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
userList: {
  listStyle: 'none',
  marginLeft: '-55px',
},
userListItem: {
  fontSize: '2rem',
  margin: '10px auto',
  textAlign: 'center',
  width: '100%',
  borderRadius: '10px',
  padding: '10px',
  backgroundColor: '#e0e0e0',
},
userPicture: {
  height: '50px',
  width: '75px',
  borderRadius: '10px',
},
searchProfileLink: {
  textDecoration: 'none',
  color: '#424242',
},
[theme.breakpoints.down('xs')]: {
  paper: {
    width: '250px',
  },
  searchButton: {
    width: '180px',
  },
}
}));

export default function SimpleModal() {
  const [searchUser,setSearchUser] = useState('')
  const [userDetails,setUserDetails] = useState([])
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const userState = useSelector((state) => state.user)

  const handleOpen = () => {
    setOpen(true)
    setUserDetails([])
    setSearchUser('')
  };

  const handleClose = () => {
    setOpen(false)
    setUserDetails([])
    setSearchUser('')
  };

  // Fetch users
  const fetchUsers = (query) => {
    setSearchUser(query)
    fetch(`${SERVER_URL}/profile/search-user`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        query
      })
    })
    .then(res => res.json())
    .then(results => {
      setUserDetails(results.user)
    })
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Search User</h2>
      <TextField
          style={{marginBottom: '10px'}}
							type='text'
							label='Type users name...'
							variant='outlined'
							fullWidth
							value={searchUser}
							onChange={(e) => fetchUsers(e.target.value)}
						/>
            <ul className={classes.userList}>
              {userDetails.map(user => {
                return <Link className={classes.searchProfileLink} to={user._id !== userState._id ? '/profile/'+user._id : '/profile'}>
                  <div className={classes.searchResults} onClick={handleClose}>
                  <img className={classes.userPicture} src={user.picture} alt='userPicture'/>
                  <li className={classes.userListItem}>{user.name}</li>
                  </div>
                  </Link>
              })}
            </ul>
      <Button className={`${classes.searchButton}`} onClick={handleClose}>Close</Button>
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