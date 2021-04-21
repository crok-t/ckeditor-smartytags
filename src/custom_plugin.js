// This SVG file import will be handled by webpack's raw-text loader.
// This means that imageIcon will hold the source SVG.
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import Text from '@ckeditor/ckeditor5-engine/src/model/text';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import ToolbarView from '@ckeditor/ckeditor5-ui/src/toolbar/toolbarview';



class SmartyTags extends Plugin {

    constructor( editor) {
        super(editor);

        editor.config.define('smartyTags', {
            callback: 'smartyTagPopup'
        })
    }
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'smartyTags', locale => {
            // const view = new ButtonView( locale );
            const toolbar = new ToolbarView( locale );
            const buttonPersonalMsg = new ButtonView( locale );
            const buttonIfCondition = new ButtonView( locale );


            // view.set( {
            //     label: 'Personalized Message',
            //     icon: imageIcon,
            //     // button: ButtonView,
            //     tooltip: true
            // } );

            buttonPersonalMsg.set( {
                label: 'Personalized Message',
                withText: true,
                tooltip: true
            } );
            
            buttonIfCondition.set( {
                label: 'IF Condition',
                withText: true,
                tooltip: true
            } );
            
            
            // Callback executed once the image is clicked.
            // view.on( 'execute', () => {
            //     myFun();
            //     const imageUrl = prompt( 'Smarty Tagggggs' );
            //     console.log(imageUrl);
            //     editor.model.change( writer => {
            //         console.log(editor.model);
            //         console.log("selection: ");
            //         console.log(editor.model.document.selection);
            //         console.log("data:");
            //         console.log(editor.getData());
            //         console.log('writer');
            //         console.log(writer);
            //         // const textElement = writer.createElement( 'hr', {
            //         //     alignment: 'center',
            //         //     value: '{'+ imageUrl + '}'
            //         // } );
            //         const textElement = new Text( '{'+ imageUrl + '}' );

            //         // Insert the image in the current selection location.
            //         editor.model.insertContent( textElement , editor.model.document.selection );
            //     } );
            // } );
            buttonPersonalMsg.on( 'execute', () => {
                    //console.log("1");
                    //console.log(editor.config.get('smartyTags.callback'));
                    const data = window[editor.config.get('smartyTags.callback')]();
                    //console.log("data");
                    const textElement = new Text( '{'+ data + '}' );
                    editor.model.insertContent( textElement , editor.model.document.selection );
            });
            // buttonIfCondition.on( 'execute', () => {
            //         //  IfCondition();
            // });
            toolbar.items.add( buttonPersonalMsg );

            toolbar.items.add( buttonIfCondition );

            return toolbar;
        } );
    }
}

export default SmartyTags;