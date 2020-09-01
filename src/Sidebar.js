import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://www.facebook.com/photo.php?fbid=333813814279013&set=t.676125493&type=3" title='Eric Hampton'/>
            <SidebarRow 
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"
           />
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
           <SidebarRow Icon={PeopleIcon} title="Friends" />
           <SidebarRow Icon={ChatIcon} title="Messenger" />
           <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
           <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
           


        </div>
    )
}

export default Sidebar;
