import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="end" 
    p={2} 
    sx={{position:'sticky', background:'#000', top:'0' ,justifyContent:'space-between'}}>
      
      <Link to="/" style={{display:'flex',alignItems:'centre'}}>
      <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchBar/>
      </Stack>
  )


export default Navbar