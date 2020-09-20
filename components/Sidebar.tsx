import React from 'react'
import MenuItem from './MenuItem'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <div className="sidenav-margin">
                <MenuItem icon={faHome} title="Home" />
                <MenuItem icon={faHome} title="Playlists" />
            </div>
        </div>
    )
}

export default Sidebar