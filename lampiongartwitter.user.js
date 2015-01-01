// ==UserScript==
// @name        Lampiongartenwitter
// @description Der radikale Twitterclient.
// @author      Thomas Hainscho, inspired by Sebastian Baumer and Ianina Ilitcheva.
// @include     http://twitter.com*
// @include     https://twitter.com*
// @include     http://*.twitter.com*
// @include     https://*.twitter.com*
// @version     1 (2014-12-31)
// @grant       none
// ==/UserScript==
 
(function() {
  
	var hideAll = true; //set to false to show retweet and fav actions 
	
	var hideElements = new Array("div.topbar", ".dashboard", ".stream-item-header", ".ProfileTweet-action--reply", ".ProfileTweet-action--more", ".ProfileTweet-actionCount", ".js-retweet-text", ".context", ".cards-media-container", ".js-details", ".conversation-module", ".js-tweet-details-dropdown", ".inline-reply-tweetbox", ".stats");

	var css = ".content { margin-left:0px !important; } ";
	css += ".content-main .expansion-container .tweet.descendant { padding-left:10px !important; } ";
	css += "#timeline { margin-left:auto; margin-right:auto; }"; 
	css += "body.three-col .content-main { float: none !important; }";
	css += ".content-main { float: none !important; }";
	css += ".wrapper, .wrapper-narrow, .wrapper-permalink { width: auto !important }";

	if (hideAll) {
		hideElements[hideElements.length] = ".ProfileTweet-actionList";
		css += ".account, .interest-category, .list, .custom-timeline, .saved-search, .tweet, .app, .discover-item { min-height:auto; }";
	}
		
	for	(var i = 0; i < hideElements.length; i++) {
		css += hideElements[i]+" { display:none; } ";
	}

	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node); 
		} else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);
		}
	}
  
})();