import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";
import {
  NotificationsNone,
  Search,
  Home,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarOptions active text="Home" Icon={Home} />
      <SidebarOptions text="Explore" Icon={Search} />
      <SidebarOptions text="Notifications" Icon={NotificationsNone} />
      <SidebarOptions text="Messages" Icon={MailOutline} />
      <SidebarOptions text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOptions text="list" Icon={ListAlt} />
      <SidebarOptions text="Profile" Icon={PermIdentity} />
      <SidebarOptions text="More" Icon={MoreHoriz} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
