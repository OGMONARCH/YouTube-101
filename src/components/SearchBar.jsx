import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import  { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    // Note the paper here is nothing more than a div with a whitebackground
    //sx is for styles. with sx we can shorten the length of what we are to write for pl= padding left
    <Paper
    component="form"
    onSubmit={()=>{}}
    sx={{
        borderRadius: 20,
        border: "1px solid e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: {sm: 5}
    }}
    >
        <input
        className='search-bar'
        placeholder='Search....'
        value=""
        onChange={()=>{}}
        />
        <IconButton type='Submit' sx={{
            p: '10px',
            color: 'red'

        }}>
            <Search/> 
        </IconButton>
    </Paper>
  )
}

export default SearchBar