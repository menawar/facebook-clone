import React from 'react';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwM2108oL7bhv9Ee8QQBC2dCng0jnV0kAow&usqp=CAU'
            title='Sylvester Menawar'
          />
          <SidebarRow
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"
          />
          <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
          <SidebarRow Icon={PeopleIcon} title="Friends" />
          <SidebarRow Icon={ChatIcon} title="Messanger" />
          <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
          <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
          <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
