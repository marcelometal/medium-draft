webpackJsonp([0,2],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(2),l=o(i),a=n(154),r=o(a),s=n(155),u=o(s),c=n(318),d=o(c);setTimeout(function(){r["default"].render(l["default"].createElement(u["default"],{value:d["default"]}),document.getElementById("app"))},100)},155:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){switch(e.getType()){case"blockquote":return"block block-quote RichEditor-blockquote";case"unstyled":return"block block-paragraph";case"atomic":return"block block-atomic";default:return null}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(156),n(158),n(159);var u=n(2),c=o(u),d=n(160),f=n(299),y=o(f),h=n(302),p=o(h),g=n(308),b=o(g),k=(n(301),n(315)),m=o(k),v=n(316),S=o(v),E=n(307),R=n(317),w=o(R),C={HIGHLIGHT:{backgroundColor:"yellow"},CODE:{background:"#DEDEDE",borderRadius:2,fontFamily:"monospace",wordWrap:"break-word"}},O=function(e){function t(e){i(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));console.log(e);var o=new d.CompositeDecorator([{strategy:R.findLinkEntities,component:w["default"]}]);return n.state={editorState:d.EditorState.createEmpty(o),showURLInput:!1,editorEnabled:!0,urlValue:""},e.value&&(n.state.editorState=d.EditorState.push(n.state.editorState,d.ContentState.createFromBlockArray((0,d.convertFromRaw)(e.value)))),n.focus=function(){return n.refs.editor.focus()},n.onChange=function(e){window.editorState=e,n.setState({editorState:e})},n.onClick=function(){n.state.editorEnabled||n.setState({editorEnabled:!0},function(){n.focus()})},n.logData=n.logData.bind(n),n.onClick=n.onClick.bind(n),n.onTab=n.onTab.bind(n),n.handleKeyCommand=n.handleKeyCommand.bind(n),n.handleBeforeInput=n.handleBeforeInput.bind(n),n.handleReturn=n.handleReturn.bind(n),n.toggleBlockType=n._toggleBlockType.bind(n),n.toggleInlineStyle=n._toggleInlineStyle.bind(n),n.toggleEdit=n.toggleEdit.bind(n),n.loadSavedData=n.loadSavedData.bind(n),n.setLink=n.setLink.bind(n),n.addMedia=n.addMedia.bind(n),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.focus()}},{key:"onTab",value:function(e){var t=this.state.editorState,n=d.RichUtils.onTab(e,t,2);n!==t&&this.onChange(n)}},{key:"logData",value:function(e){console.log((0,d.convertToRaw)(this.state.editorState.getCurrentContent())),console.log(this.state.editorState.getSelection().toJS()),window.sel=this.state.editorState.getSelection()}},{key:"setLink",value:function(e){var t=this,n=this.state.editorState,o=n.getSelection(),i=null;""!==e&&(i=d.Entity.create("LINK","MUTABLE",{url:e})),this.setState({editorState:d.RichUtils.toggleLink(n,o,i)},function(){setTimeout(function(){return t.refs.editor.focus()},0)})}},{key:"addMedia",value:function(){var e=window.prompt("Enter a URL");if(e){var t=d.Entity.create("image","IMMUTABLE",{src:e});this.onChange(d.AtomicBlockUtils.insertAtomicBlock(this.state.editorState,t," "))}}},{key:"handleDroppedFiles",value:function(e,t){console.log(e.toJS()),console.log(t)}},{key:"handleKeyCommand",value:function(e){if("editor-save"===e)return window.localStorage.editor=JSON.stringify((0,d.convertToRaw)(this.state.editorState.getCurrentContent())),window.localStorage.tmp=JSON.stringify((0,d.convertToRaw)(this.state.editorState.getCurrentContent())),!0;if("showlinkinput"===e)return this.refs.toolbar&&this.refs.toolbar.showLinkInput(null,!0),!0;if("add-new-block"===e){var t=this.state.editorState;return this.onChange((0,E.addNewBlock)(t,"blockquote")),!0}if("load-saved-data"===e)return this.loadSavedData(),!0;var n=this.state.editorState,o=(0,E.getCurrentBlock)(n);if(0==e.indexOf("changetype:")){var i=e.split(":")[1],l=o.getType();return"atomic"==l||"media"==l?!1:("blockquote"==l&&"caption"==i?i="block-quote-caption":"block-quote-caption"==l&&"caption"==i&&(i="blockquote"),this.onChange(d.RichUtils.toggleBlockType(n,i)),!0)}var a=d.RichUtils.handleKeyCommand(n,e);return a?(this.onChange(a),!0):!1}},{key:"handleBeforeInput",value:function(e){return this.props.beforeInput(this.state.editorState,e,this.onChange,this.props.stringToTypeMap)}},{key:"handleReturn",value:function(e){return e.shiftKey?(this.setState({editorState:d.RichUtils.insertSoftNewline(this.state.editorState)}),!0):!1}},{key:"_toggleBlockType",value:function(e){this.onChange(d.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(d.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"toggleEdit",value:function(e){this.setState({editorEnabled:!this.state.editorEnabled})}},{key:"loadSavedData",value:function(){var e=this,t=window.localStorage.getItem("editor");if(null===t)return void console.log("No data found.");try{var n=JSON.parse(t);console.log(n),this.setState({editorState:d.EditorState.push(this.state.editorState,d.ContentState.createFromBlockArray((0,d.convertFromRaw)(n)))},function(){return e.refs.editor.focus()})}catch(o){console.log(o),console.log("Could not load data.")}}},{key:"render",value:function(){var e=this.state,t=e.editorState,n=(e.showURLInput,e.editorEnabled);e.urlValue;return c["default"].createElement("div",{className:"RichEditor-root"},c["default"].createElement("div",{className:"RichEditor-editor"},c["default"].createElement(d.Editor,{ref:"editor",editorState:t,blockRendererFn:b["default"],blockStyleFn:r,onChange:this.onChange,onTab:this.onTab,handleKeyCommand:this.handleKeyCommand,handleBeforeInput:this.handleBeforeInput,handleDroppedFiles:this.handleDroppedFiles,handleReturn:this.handleReturn,customStyleMap:C,readOnly:!n,keyBindingFn:m["default"],placeholder:"Write your story",spellCheck:!1}),n?c["default"].createElement(y["default"],{editorState:t,addMedia:this.addMedia}):null,c["default"].createElement(p["default"],{ref:"toolbar",editorState:t,toggleBlockType:this.toggleBlockType,toggleInlineStyle:this.toggleInlineStyle,editorEnabled:n,setLink:this.setLink,focus:this.focus})),c["default"].createElement("div",{className:"editor-action"},c["default"].createElement("button",{onClick:this.logData},"Log State"),c["default"].createElement("button",{onClick:this.toggleEdit},"Toggle Edit")))}}]),t}(c["default"].Component);O.defaultProps={beforeInput:S["default"],stringToTypeMap:v.StringToTypeMap},t["default"]=O},156:function(e,t){},158:156,159:156,299:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(300);var s=n(2),u=o(s),c=n(301),d=function(e){function t(e){i(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.state={style:{},visible:!1},n.node=null,n.blockKey="",n.blockType="",n.blockLength=-1,n.findNode=n.findNode.bind(n),n.hideBlock=n.hideBlock.bind(n),n}return a(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.editorState,n=t.getCurrentContent(),o=t.getSelection();if(!o.isCollapsed()||o.anchorKey!=o.focusKey)return void this.hideBlock();var i=n.getBlockForKey(o.anchorKey),l=i.getKey();return i.getType()!==this.blockType?(this.blockType=i.getType(),void setTimeout(this.findNode,0)):this.blockKey===l?void this.setState({visible:!0}):(this.blockKey=l,void setTimeout(this.findNode,0))}},{key:"hideBlock",value:function(){this.state.visible&&this.setState({visible:!1})}},{key:"findNode",value:function(){var e=(0,c.getSelectedBlockNode)(window);if(e!==this.node){if(!e)return void this.setState({visible:!1});e.getBoundingClientRect();this.node=e,this.setState({visible:!0,style:{top:e.offsetTop}})}}},{key:"render",value:function(){return this.state.visible?u["default"].createElement("button",{onClick:this.props.addMedia,className:"add-button",style:this.state.style},"+"):null}}]),t}(u["default"].Component);t["default"]=d},300:156,301:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSelectionRect=function(e){var t=e.getRangeAt(0).getBoundingClientRect(),n=t&&t.top?t:e.getRangeAt(0).getClientRects()[0];if(!n){if(!e.anchorNode||!e.anchorNode.getBoundingClientRect)return null;n=e.anchorNode.getBoundingClientRect(),n.isEmptyline=!0}return n},t.getSelection=function(e){var t=null;return e.getSelection?t=e.getSelection():e.document.getSelection?t=e.document.getSelection():e.document.selection&&(t=e.document.selection.createRange().text),t},t.getSelectedBlockNode=function(e){var t=e.getSelection();if(0==t.rangeCount)return null;window.sel=t;var n=t.getRangeAt(0).startContainer;do{if(n.getAttribute&&"true"===n.getAttribute("data-block"))return n;n=n.parentNode}while(null!==n);return null}},302:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(303);var s=n(2),u=o(s),c=n(154),d=o(c),f=n(160),y=n(304),h=o(y),p=n(306),g=o(p),b=n(301),k=n(307);window.getVisibleSelectionRect=f.getVisibleSelectionRect;var m=function(e){function t(e){i(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.state={showURLInput:!1,urlInputValue:"",style:{top:0,left:0}},n.onKeyDown=n.onKeyDown.bind(n),n.onChange=n.onChange.bind(n),n.showLinkInput=n.showLinkInput.bind(n),n.hasDimension=!1,n.rect={},n.forceHide=!1,n}return a(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.editorState;if(e.editorEnabled){var n=t.getSelection();if(n.isCollapsed())return void(this.state.showURLInput&&this.setState({showURLInput:!1}));var o=(0,b.getSelection)(window);if(o.rangeCount){var i=(o.getRangeAt(0).startContainer.parentNode,(0,b.getSelectionRect)(o));if(this.hasDimension){var l=i.left-this.rect.width;i.width>=this.rect.width&&(l=(i.width-this.rect.width)/2),this.setState({style:{top:i.top-this.rect.height-50,width:this.rect.width,left:l}})}else this.setState({style:{top:i.top-100,left:(i.left+i.width-341)/2,width:341}})}}}},{key:"componentDidUpdate",value:function(){this.forceHide=!1;var e=d["default"].findDOMNode(this);e&&(this.rect=d["default"].findDOMNode(this).getBoundingClientRect(),this.hasDimension=!0)}},{key:"onKeyDown",value:function(e){var t=this;13===e.which?(e.preventDefault(),e.stopPropagation(),this.props.setLink(this.state.urlInputValue),this.setState({showURLInput:!1,urlInputValue:""},function(){return t.props.focus()})):27===e.which&&(e.preventDefault(),e.stopPropagation(),this.setState({showURLInput:!1,urlInputValue:""},function(){return t.props.focus()}))}},{key:"onChange",value:function(e){this.setState({urlInputValue:e.target.value})}},{key:"showLinkInput",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];n||(e.preventDefault(),e.stopPropagation());var o=this.props.editorState,i=o.getSelection();if(i.isCollapsed())return void this.props.focus();var l=(0,k.getCurrentBlock)(o),a="",r=!1;l.findEntityRanges(function(e){var t=e.getEntity();return a=t,null!==t&&"LINK"===f.Entity.get(t).getType()},function(e,n){var o=i.getAnchorOffset(),l=i.getFocusOffset();if(i.getIsBackward()&&(o=i.getFocusOffset(),l=i.getAnchorOffset()),e==o&&n==l){r=!0;var s=f.Entity.get(a).getData(),u=s.url;t.setState({showURLInput:!0,urlInputValue:u},function(){setTimeout(function(){t.refs.urlinput.focus(),t.refs.urlinput.select()},0)})}}),r||this.setState({showURLInput:!0},function(){setTimeout(function(){t.refs.urlinput.focus()},0)})}},{key:"render",value:function(){var e=this.props,t=e.editorState,n=e.editorEnabled,o=this.state,i=o.showURLInput,l=o.urlInputValue,a=o.style;return!n||t.getSelection().isCollapsed()?null:u["default"].createElement("div",{className:"editor-toolbar",style:a},i?null:u["default"].createElement(h["default"],{editorState:t,onToggle:this.props.toggleBlockType,buttons:v}),i?null:u["default"].createElement(g["default"],{editorState:t,onToggle:this.props.toggleInlineStyle,buttons:S}),u["default"].createElement("div",{className:"RichEditor-controls",style:i?{display:"block"}:{}},i?u["default"].createElement("input",{ref:"urlinput",type:"text",className:"url-input",onKeyDown:this.onKeyDown,onChange:this.onChange,placeholder:"Press ENTER or ESC",value:l}):u["default"].createElement("a",{className:"RichEditor-linkButton",href:"#",onClick:this.showLinkInput},"#")))}}]),t}(u["default"].Component);t["default"]=m;var v=[{label:"T",style:"header-three"},{label:"N",style:"unstyled"},{label:"Q",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"}],S=[{label:u["default"].createElement("b",null,"B"),style:"BOLD"},{label:u["default"].createElement("i",null,"I"),style:"ITALIC"},{label:u["default"].createElement("u",null,"U"),style:"UNDERLINE"},{label:u["default"].createElement("strike",null,"S"),style:"STRIKETHROUGH"},{label:"Hi",style:"HIGHLIGHT"}]},303:156,304:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=o(i),a=n(160),r=n(305),s=o(r);t["default"]=function(e){var t=e.editorState,n=a.RichUtils.getCurrentBlockType(t);return l["default"].createElement("div",{className:"RichEditor-controls"},e.buttons.map(function(t){return l["default"].createElement(s["default"],{key:t.label,active:t.style===n,label:t.label,onToggle:e.onToggle,style:t.style})}))}},305:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),u=o(s),c=function(e){function t(){i(this,t);var e=l(this,Object.getPrototypeOf(t).call(this));return e.onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return a(t,e),r(t,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),u["default"].createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),t}(u["default"].Component);t["default"]=c},306:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=o(i),a=n(305),r=o(a);t["default"]=function(e){var t=e.editorState.getCurrentInlineStyle();return l["default"].createElement("div",{className:"RichEditor-controls"},e.buttons.map(function(n){return l["default"].createElement(r["default"],{key:n.style,active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})}))}},307:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetBlockWithType=t.addNewBlock=t.getCurrentBlock=void 0;var o=n(160),i=t.getCurrentBlock=function(e){var t=e.getSelection(),n=e.getCurrentContent(),o=n.getBlockForKey(t.getStartKey());return o};t.addNewBlock=function(e){var t=arguments.length<=1||void 0===arguments[1]?"unstyled":arguments[1],n=e.getSelection();if(!n.isCollapsed())return console.log("selection not collapsed"),e;var l=e.getCurrentContent(),a=n.getStartKey(),r=l.getBlockMap(),s=i(e);if(!s)return console.log("no current block"),e;if(0==s.getLength()){if(s.getType()==t)return console.log("same block types"),e;var u=s.merge({type:t}),c=l.merge({blockMap:r.set(a,u),selectionAfter:n});return o.EditorState.push(e,c,"change-block-type")}return console.log("block length > 0"),e},t.resetBlockWithType=function(e){var t=arguments.length<=1||void 0===arguments[1]?"unstyled":arguments[1],n=e.getCurrentContent(),i=e.getSelection(),l=i.getStartKey(),a=n.getBlockMap(),r=a.get(l),s="",u=r.getText();r.getLength()>=2&&(s=u.substr(1));var c=r.merge({text:s,type:t}),d=n.merge({blockMap:a.set(l,c),selectionAfter:i.merge({anchorOffset:0,focusOffset:0})});return o.EditorState.push(e,d,"change-block-type")}},308:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(309),l=o(i),a=n(311),r=o(a),s=n(313),u=o(s);t["default"]=function(e){var t=e.getType();switch(t){case"block-quote-caption":return{component:l["default"]};case"caption":return{component:r["default"]};case"atomic":return{component:u["default"],editable:!1};default:return null}}},309:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(310);var i=n(2),l=o(i),a=n(160);t["default"]=function(e){return l["default"].createElement("blockquote",{className:"block block-quote RichEditor-blockquote block-quote-caption"},l["default"].createElement("cite",null,l["default"].createElement(a.EditorBlock,e)))}},310:156,311:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(312);var i=n(2),l=o(i),a=n(160);t["default"]=function(e){return l["default"].createElement("cite",{className:"block block-caption"},l["default"].createElement(a.EditorBlock,e))}},312:156,313:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(314);var i=n(2),l=o(i),a=n(160);t["default"]=function(e){var t=a.Entity.get(e.block.getEntityAt(0)),n=t.getData(),o=t.getType();return"image"===o?l["default"].createElement("div",{className:"block-atomic-wrapper"},l["default"].createElement("img",{src:n.src}),l["default"].createElement("div",{className:"block-atomic-controls"},l["default"].createElement("button",null,"×"))):l["default"].createElement("p",null,"No supported block for ",o)}},314:156,315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(160),i=o.KeyBindingUtil.hasCommandModifier;t["default"]=function(e){if(i(e)&&83==e.keyCode)return"editor-save";if(e.altKey===!0){if(e.shiftKey===!0)switch(e.keyCode){case 65:return"add-new-block";case 68:return"load-saved-data";case 69:return"toggle-edit-mode";default:return(0,o.getDefaultKeyBinding)(e)}switch(e.keyCode){case 49:return"changetype:ordered-list-item";case 50:return"showlinkinput";case 51:return"changetype:header-three";case 56:return"changetype:unordered-list-item";case 188:return"changetype:caption";case 190:return"changetype:unstyled";case 222:return"changetype:blockquote";default:return(0,o.getDefaultKeyBinding)(e)}}return(0,o.getDefaultKeyBinding)(e)}},316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StringToTypeMap=void 0;var o=n(307),i=t.StringToTypeMap={"--":"blockquote:block-quote-caption:caption",'""':"blockquote","''":"blockquote","*.":"unordered-list-item","1.":"ordered-list-item","##":"header-three","==":"unstyled"};t["default"]=function(e,t,n){var l=arguments.length<=3||void 0===arguments[3]?i:arguments[3],a=e.getSelection(),r=(0,o.getCurrentBlock)(e),s=r.getType(),u=r.getLength();if(a.getAnchorOffset()>1||u>1)return!1;var c=l[r.getText()[0]+t];if(!c)return!1;var d=c.split(":");if(d.length<1||d.length>3)return!1;if(1==d.length){if(s==d[0])return!1;n((0,o.resetBlockWithType)(e,d[0]))}else if(2==d.length){if(s==d[1])return!1;s==d[0]&&n((0,o.resetBlockWithType)(e,d[1]))}else if(3==d.length){if(s==d[2])return!1;n(s==d[0]?(0,o.resetBlockWithType)(e,d[1]):(0,o.resetBlockWithType)(e,d[2]))}return!0}},317:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.findLinkEntities=void 0;var i=n(2),l=o(i),a=n(160);t.findLinkEntities=function(e,t){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&"LINK"===a.Entity.get(t).getType()},t)};t["default"]=function(e){var t=a.Entity.get(e.entityKey).getData(),n=t.url;return l["default"].createElement("a",{className:"draft-link hint--bottom",href:n,target:"_blank"},e.children)}},318:function(e,t){e.exports={entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://github.com/brijeshb42/medium-draft"}},1:{type:"LINK",mutability:"MUTABLE",data:{url:"https://facebook.github.io/draft-js/"}},2:{type:"image",mutability:"IMMUTABLE",data:{src:"http://www.virtualizationsoftware.com/wp-content/uploads/2013/07/horizon-700x325.jpg"}},3:{type:"LINK",mutability:"MUTABLE",data:{url:"http://www.virtualizationsoftware.com/wp-content/uploads/2013/07/horizon-700x325.jpg"}}},blocks:[{key:"2vr7c",text:"medium-draft",type:"header-three",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:12,key:0}]},{key:"99fam",text:"A medium like rich text editor built using draft-js with an emphasis on eliminating mouse usage by adding relevant keyboard shortcuts.",type:"blockquote",depth:0,inlineStyleRanges:[],entityRanges:[{offset:43,length:8,key:1}]},{key:"967qt",text:"The keyboard shortcuts are mentioned below.",type:"blockquote",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"bah83",text:"It also has implementations of some custom blocks like",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"euloj",text:"Custom Blocks",type:"header-three",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"cavj0",text:"This is a blockquote.",type:"blockquote",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"7ajf3",text:"This is a block-quote-caption block (caption for a blockquote)",type:"block-quote-caption",depth:0,inlineStyleRanges:[{offset:10,length:19,style:"BOLD"}],entityRanges:[]},{key:"eq01v",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"4jprg",text:"This is a caption block. It is an opinionated block that can be added after special atomic blocks (image, video, embed) to be used as their captions when exporting to HTML or other formats instead of adding nested draft-js editors for simplicity.",type:"caption",depth:0,inlineStyleRanges:[{offset:10,length:7,style:"BOLD"},{offset:214,length:8,style:"BOLD"}],entityRanges:[]},{key:"2pig1",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:2}]},{key:"7jnpl",text:"This is the image caption.",type:"caption",depth:0,inlineStyleRanges:[],entityRanges:[{offset:12,length:5,key:3}]},{key:"7qp46",text:"Keyboard shortcuts",type:"header-three",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"c7bqc",text:"Following are the keyboard shortcuts to toggle block types (Alt and CTRL for Windows/Linux and Option and Command for OSX.",type:"unstyled",depth:0,inlineStyleRanges:[{offset:60,length:3,style:"CODE"},{offset:68,length:4,style:"CODE"},{offset:95,length:6,style:"CODE"},{offset:106,length:7,style:"CODE"}],entityRanges:[]},{key:"69emd",text:"Alt/Option +",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:10,style:"CODE"}],entityRanges:[]},{key:"7ah5d",text:"1 - Toggle ordered-list-item.",type:"unordered-list-item",depth:1,inlineStyleRanges:[{offset:0,length:1,style:"CODE"},{offset:11,length:17,style:"BOLD"}],entityRanges:[]},{key:"226et",text:"* - Toggle unordered-list-item.",type:"unordered-list-item",depth:1,inlineStyleRanges:[{offset:0,length:1,style:"CODE"},{offset:11,length:19,style:"BOLD"}],entityRanges:[]},{key:"fdr9n",text:"@ - Add link to selected text.",type:"unordered-list-item",depth:1,inlineStyleRanges:[{offset:0,length:1,style:"CODE"}],entityRanges:[]},{key:"5dd2l",text:"# - Toggle header-three.",type:"unordered-list-item",depth:1,inlineStyleRanges:[{offset:0,length:1,style:"CODE"},{offset:11,length:12,style:"BOLD"}],entityRanges:[]},{key:"1inva",text:"< - Toggle caption block.",type:"unordered-list-item",depth:1,inlineStyleRanges:[{offset:0,length:1,style:"CODE"},{offset:11,length:7,style:"BOLD"}],entityRanges:[]},{key:"dladv",text:"> - Toggle unstyled block.",type:"unordered-list-item",depth:1,inlineStyleRanges:[{offset:0,length:1,style:"CODE"},{offset:11,length:8,style:"BOLD"}],entityRanges:[]},{key:"8abs3",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"4g4k0",text:"Editor level commands",type:"header-three",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"e1hm5",text:"Command/CTRL + S - Save current data to localstorage.",type:"ordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:16,style:"CODE"},{offset:40,length:12,style:"CODE"}],entityRanges:[]},{key:"89n8b",text:"Alt + Shift + D - Load previously saved data from localstorage.",type:"ordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:15,style:"CODE"},{offset:50,length:12,style:"CODE"}],entityRanges:[]},{key:"9vrn2",text:"Special characters while typing: If while typing in an empty block, if the content matches one of the following, that particular block type will be changed to the corresponding block specified below -",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"7ihrd",text:"-- (2 hyphens) - If current block is blockquote, it will be changed to block-quote-caption, else caption.",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:2,style:"CODE"},{offset:3,length:11,style:"CODE"},{offset:37,length:10,style:"CODE"},{offset:71,length:19,style:"CODE"},{offset:97,length:7,style:"CODE"}],entityRanges:[]},{key:"11m2k",text:"*. (An asterisk and a period) - unordered-list-item",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:2,style:"CODE"},{offset:3,length:26,style:"CODE"},{offset:32,length:19,style:"CODE"}],entityRanges:[]},{key:"38m5p",text:"1. (1 and a period) - ordered-list-item.",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:2,style:"CODE"},{offset:3,length:16,style:"CODE"},{offset:22,length:17,style:"CODE"}],entityRanges:[]},{key:"36jrv",text:"## - header-three",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:2,style:"CODE"},{offset:5,length:12,style:"CODE"}],entityRanges:[]},{key:"a17fn",text:"== - unstyled",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:2,style:"CODE"},{offset:5,length:8,style:"CODE"}],entityRanges:[]},{key:"3451t",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"1klv5",text:"Todos",type:"header-three",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"bobur",text:"The + button that appears on the left is just a placeholder to demonstrate how it can be added besides current block. The functionality to add special blocks like image, video or others will be added eventually.",type:"unordered-list-item",depth:0,inlineStyleRanges:[{offset:4,length:1,style:"CODE"}],entityRanges:[]},{key:"7ku0",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"45mgl",text:"Issue",type:"header-three",depth:0,inlineStyleRanges:[],entityRanges:[]},{key:"f3gea",text:"Currently, the toolbar that appears when text is selected needs to be fixed regrading its position in the viewport.",type:"blockquote",depth:0,inlineStyleRanges:[],entityRanges:[]}]}}});
//# sourceMappingURL=app.0d28d2986d7091866b58.js.map