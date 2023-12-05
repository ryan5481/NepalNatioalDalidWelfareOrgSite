import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import '../App.css';

//User Routes
import Home from '../pages/01-home';
import Navbar from '../components/navigation/navbar';

//ADMIN ROUTES

const ConditionalRoute = () => {
  const { userRole } = useSelector(state => state.user)
  if (userRole === 'admin') {
    return <AdminRoutes />
  } else {
    return <UserRoutes />
  }
}

const UserRoutes = () => {
  return (
    <>
      <Navbar zIndex={10} />
      <Routes>
        <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  )
}

const AdminRoutes = () => {
  return (
    <>
      <Flex dir="row">
        {/* <Sidebar /> */}
        <Routes >
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route path="/edit-home" element={<EditHome />} /> */}
        </Routes>
      </Flex>
    </>
  )
}

export default ConditionalRoute





