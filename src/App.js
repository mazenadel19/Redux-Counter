import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'
import UserProfile from './components/UserProfile'

function App() {
	const isAuth = useSelector(state => state.auth.isAuth)
	return (
		<>
			<Header />
			{!isAuth && <Auth />}
			{isAuth && <UserProfile />}
		</>
	)
}

export default App
