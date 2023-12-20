import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View
import Welcome from "./pages/public/welcomePage/Welcome";
import Dashboard from "./pages/private/dashboard/Dashboard";
import SignIn from "./pages/public/signIn/SignIn";
import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import GiveGifts from "./pages/private/giveGifts/GiveGifts";
import PhoneBook from "./pages/private/phoneBook/PhoneBook";
import Deposit from "./pages/private/deposit/Deposit";
import ErrorPage from "./pages/errors/ErrorPage";
import SendMoneyPage from "./pages/private/sendMoney/SendMoneyPage";
import RequestMoneyPage from "./pages/private/requestMoney/RequestMoneyPage";
import Payments from "./pages/private/payments/Payments";
import Wallet from "./pages/private/wallet/Wallet";
import EditProfile from "./pages/private/profile/EditProfile";
import TransactionDetails from "./pages/private/transactions/TransactionDetails";
import Notifications from "./pages/private/notifications/Notifications";
import Settings from "./pages/private/profile/Settings";
import AccountInfo from "./pages/private/profile/AccountInfo";
import AllTransactionsPage from "./pages/private/transactions/AllTransactionsPage";
import CardsPage from "./pages/partials/card/CardsPage";


// eslint-disable-next-line no-unused-vars
import appStyle from "../scss/app.scss";


function App() {
  const publicPages = [
    {
      element: <Welcome />,
      path: '/welcome'
    },
    {
      element: <SignIn />,
      path: '/signin'
    },
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/onboarding'
    },
    {
      element: <PhoneBook />,
      path: '/phonebook'
    },
    {
      element: <Deposit />,
      path: '/deposit'
    },
  ];

  const PrivatePages = [
    {
      element: <Dashboard />,
      path: '/dashboard'
    },
    {
      element: <Payments />,
      path: '/payment'
    },
    {
      element: <Wallet />,
      path: '/wallet'
    },
    {
      element: <Profile />,
      path: '/profile/:id'
    },
    {
      element: <EditProfile />,
      path: '/edit-profile'
    },
    {
      element: <GiveGifts />,
      path: '/givegifts'
    },
    {
      element: <AllTransactionsPage />,
      path: '/transactions'
    },
    {
      element: <TransactionDetails />,
      path: '/transactionDetails'
    },
    {
      element: <SendMoneyPage />,
      path: '/sendMoney'
    },
    {
      element: <RequestMoneyPage />,
      path: '/requestMoney'
    },
    {
      element: <Notifications />,
      path: '/notifications'
    },
    {
      element: <Settings />,
      path: '/settings'
    },
    {
      element: <AccountInfo />,
      path: '/account-info'
    },
    {
      element: <CardsPage />,
      path: '/cards-page'
    },
  ];



  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route element={<PrivateLayout />}>
          {PrivatePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<PublicLayout />}>
          {publicPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
