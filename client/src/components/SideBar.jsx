import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react"
import { Box, IconButton} from "@mui/material";
import {Link} from "react-router-dom"
import CottageIcon from '@mui/icons-material/Cottage';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ContactPage from "@mui/icons-material/ContactPage";
import Cookies from "js-cookie";

const isLoggedInCookie = Cookies.get("isLoggedIn");

const Item=({title,to,icon})=>{ //create a function for holding the sidevar details
    return(
    <Link to={to}>  
    <MenuItem
    style={{color:"rgb(200,200,200)"}}
    icon={icon}
    >
      <h4 className="bg-amber-950 text-sm" color="rgb(255,240,200)">{title}</h4> 
      
    </MenuItem>
    </Link>
     )
   }


function SideBar({ThemeStyles}) {
  const [isCollapsed, setCollapsed]=useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line
  
  useEffect(() => {
    const isLoggedInCookie = Cookies.get("isLoggedIn");
    if (isLoggedInCookie === "true") {
      setIsLoggedIn(true);
    }
  }, []);
    
  return (
    <div className="flex-col w-fit h-screen border-x-4 border-neutral-700 bg-amber-950 border-solid ">
    <Box className="flex-col" style={ThemeStyles}>
   
<Sidebar collapsed={isCollapsed} style={ThemeStyles}>
<Menu  className="bg-amber-950">
<Box>
<MenuItem
        className="text-slate-200 justify-between"
        onClick={()=>setCollapsed(!isCollapsed)}   //set the collapse functionality when the menu ico is clicked
        icon={isCollapsed?<MenuIcon/>:undefined } //when collapsed the menu ico is visible
       style={{margin:"10px 0", cursor:"pointer"}}>

        {!isCollapsed&&( //when in a state of collapsed
             <Box className='flex justify-between p-3'>
         <h1 className="text-2xl font-bold">ADMIN</h1>
            <IconButton className="text-slate-200" onClick={()=>setCollapsed(!isCollapsed)}>
                <MenuIcon/>
            </IconButton>
            </Box>
        )}
       
           
        </MenuItem>

    </Box>
    {!isCollapsed &&(
        <Box>
         <Box className="mt-5">
         {/* <img id="admin" className="mx-auto" src="client\public\logo.jpg" width="100px" height="100px" alt='logo' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} /> */}
</Box>   
 <Box className="mt-4">
   <h1 className="text-2xl text-center text-white font-bold">Nexin Ltd</h1>
   <h5 className="text-center text-green-600">Ticket System</h5>
</Box>  
 </Box>
      
    )}
  
</Menu>
<Menu className="bg-amber-950">
            <Box paddingLeft={!isCollapsed ? undefined : "10%"}>
              <Item icon={<CottageIcon />} title="Dashboard" to="/" />
              {isLoggedInCookie === "true" && (
                <>
                  <h1 className="text-slate-500">Users</h1>
                  <Box>
                    <Item icon={<GroupIcon />} title="Staff" to="/admin" />
                  </Box>
                  {/* <Box>
                    <Item icon={<ContactPageIcon />} title="Clients" to="/Contacts" />
                  </Box> */}
                  <Box>
                    <Item icon={<ReceiptIcon />} title="Portfolio" to="/Portfolio" />
                  </Box>
                  <h1 className="text-slate-500">Items</h1>
                  <Box>
                    <Item icon={<AccountBoxIcon />} title="Tasks" to="/TaskForm" />
                  </Box>
                  <Box>
                    <Item icon={<AccountBoxIcon />} title="Tickets" to="/TicketList" />
                  </Box>
                  <Box>
                    <Item icon={<CalendarMonthOutlinedIcon />} title="Calendar" to="/Calendar" />
                  </Box>
                  <h1 className="text-slate-500">Charts</h1>
                  <Box>
                    <Item icon={<BarChartOutlinedIcon />} title="Bar Chart" to="/Bar" />
                  </Box>
                </>
              )}
            </Box>
          </Menu>



</Sidebar>
    </Box>

      
    </div>
  )
}

export default SideBar