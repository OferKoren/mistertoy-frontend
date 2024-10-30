import { NavLink } from 'react-router-dom'
import { UserMsg } from './UserMsg.jsx'

export function AppHeader() {
    return (
        <header className="app-header full main-layout">
            <section className="header-container flex justify-between">
                <h1>React Toy App!!!</h1>
                <nav className="app-nav">
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/toy">toys</NavLink>
                </nav>
            </section>
            {/* <UserMsg /> */}
        </header>
    )
}
