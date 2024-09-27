import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DrawerContent = ({handleDrawerToggle,routes}) => {
    const route = usePathname()
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      MUI
    </Typography>
    <Divider />
    <List>
      {routes.map((page, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className={`text-lg inline-block py-2 px-3  hover:border-b transition-all duration-200 ${
              page.route === route
                ? "bg-teal-500 py-2 hover:text-dark text-white"
                : "text-dark hover:text-teal-500"
            }`}
          >
            <Link href={page.route}>
              <ListItemText primary={page.name} />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
  )
}

export default DrawerContent