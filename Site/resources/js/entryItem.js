function EntryItem(id, image, title, time, shortDescription, link, styleClass) {
	this.id = id;
	this.image = image;
	this.title = title;
	this.time = time;
	this.shortDescription= shortDescription;
	this.link = link;
	this.styleClass = styleClass;

	this.append = function(container){
		jQuery(container).append("<div id=" + id + " class='" + styleClass + " clearfix'></div>");
		var blogTile = jQuery('div#' + id);
		blogTile.append('<div id="imageTile"><img src="' + image + '" /></div>');
		blogTile.append('<div id="descriptionTile"><div id="descriptionTitle"></div><div id="shortDescription">' + shortDescription + '</div></div>');
		
		if(link.length > 0){
			jQuery(blogTile).find('div#descriptionTitle').append('<a href="' + link + '"><h3>' + title + '</h3></a><h4>' + time + '</h4>');
			jQuery(blogTile).find('div#descriptionTile').append('<a href="' + link + '" style="font-size: 14px; font-weight: bold; float: right; text-decoration: none;">Read more...</a>');
		} else {
			jQuery(blogTile).find('div#descriptionTitle').append('<h3>' + title + '</h3><h4>' + time + '</h4>');
			jQuery(blogTile).find('div#shortDescription').addClass('missingLink');
		}
	}
}
