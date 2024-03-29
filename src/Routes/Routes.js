import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import Main from '../Layouts/Main/Main';
import Contact from '../Pages/Contact/Contact';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Secret from '../Pages/Secret/Secret';
import Signup from '../Pages/Signup/Signup';
import AdminRoute from './AdminRoute';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/order',
        element: <Order />
      },

      {
        path: '/order/:category',
        element: <Order />
      },

      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: '/secret',
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        )
      }
    ]
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'user-home',
        element: <UserHome />
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />
      },
      {
        path: 'admin-home',
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        )
      },
      {
        path: 'my-cart',
        element: <MyCart />
      },
      {
        path: 'payment',
        element: <Payment />
      },

      {
        path: 'all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        )
      },
      {
        path: 'add-item',
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        )
      },
      {
        path: 'manage-item',
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        )
      }
    ]
  }
]);
