/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    var baseUrl = $('body').attr('data-base');
    config.baseHref = baseUrl;
    config.allowedContent = true;
    config.extraAllowedContent = '*(*)';
    config.entities_latin = false;
    config.font_names = 'Roboto;Roboto Condensed;Arial;Times New Roman;Verdana';
};
