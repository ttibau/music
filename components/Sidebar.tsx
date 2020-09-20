import React from 'react'
import MenuItem from './MenuItem'
import { faHome, faList, faUserTag, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <div className="sidenav-margin">
                <MenuItem active icon={faHome} title="Home" />
                <MenuItem icon={faList} title="Playlists" />
                <MenuItem icon={faUserTag} title="Artist" />
                <MenuItem icon={faQuestion} title="F.A.Q" />
            </div>
        </div>
    )
}

export default Sidebar