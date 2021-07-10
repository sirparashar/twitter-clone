import { Search } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input type="text" placeholder="search Twitter" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"840422419508617216"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sirparashar"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/sirparashar/"}
          options={{ text: "reactjs is awesome", via: "sirparashara" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
