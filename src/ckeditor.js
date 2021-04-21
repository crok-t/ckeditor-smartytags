/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
 import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
 import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
 import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
 import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
 import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
 import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
 import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
 import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
 import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
 import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
 import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
 import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
 import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
 import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
 import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
 import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
 import Image from '@ckeditor/ckeditor5-image/src/image.js';
 import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
 import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
 import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
 import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
 import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
 import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
 import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
 import Link from '@ckeditor/ckeditor5-link/src/link.js';
 import List from '@ckeditor/ckeditor5-list/src/list.js';
 import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
 import MathType from '@wiris/mathtype-ckeditor5';
 import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
 import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
 import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
 import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
 import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
 import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
 import Table from '@ckeditor/ckeditor5-table/src/table.js';
 import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
 import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
 import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
 import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
 
 import SmartyTags from '../src/custom_plugin.js';


 class Editor extends ClassicEditor {}
 
 // Plugins to include in the build.
 Editor.builtinPlugins = [
	 Alignment,
	 Autoformat,
	 BlockQuote,
	 Bold,
	 CKFinder,
	 CKFinderUploadAdapter,
	 CloudServices,
	 Essentials,
	 FontBackgroundColor,
	 FontColor,
	 FontFamily,
	 FontSize,
	 Heading,
	 Highlight,
	 HtmlEmbed,
	 Image,
	 ImageCaption,
	 ImageResize,
	 ImageStyle,
	 ImageToolbar,
	 ImageUpload,
	 Indent,
	 Italic,
	 Link,
	 List,
	 ListStyle,
	 MediaEmbed,
	 Paragraph,
	 PasteFromOffice,
	 Strikethrough,
	 Subscript,
	 Superscript,
	 Table,
	 TableProperties,
	 TableToolbar,
	 TextTransformation,
	 Underline,
	 SmartyTags
 ];
 

 export default Editor;
 