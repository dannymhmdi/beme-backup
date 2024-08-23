import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    // backgroundColor: '#44b700',
    // color: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));



export default function BadgeAvatar({image}) {
    const onlineStatus = typeof(window) !== 'undefined' && navigator && navigator?.onLine ? navigator.onLine : true
    console.log('onlineStatus',onlineStatus)
  return (
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        title='online'
        sx={{'& .MuiBadge-badge':{backgroundColor:onlineStatus ? '#44b700':'red',color:onlineStatus ? '#44b700':'red'}}}
      >
        <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={image} />
      </StyledBadge>

  );
}
