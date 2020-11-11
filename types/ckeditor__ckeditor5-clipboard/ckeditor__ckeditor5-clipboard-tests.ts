import * as clipboard from "@ckeditor/ckeditor5-clipboard";
import * as core from "@ckeditor/ckeditor5-core";
import * as engine from "@ckeditor/ckeditor5-engine";
import * as utils from "@ckeditor/ckeditor5-utils";

// For Type-Checks =============================================================

declare let _any: any;
declare let _boolean: boolean;
declare let _string: string;

declare let _domNode: Node;
declare let _event: Event;
declare let _file: File;
declare let _htmlElement: HTMLElement;

// clipboard Types -------------------------------------------------------------

declare let _clipboard: clipboard.Clipboard;
declare let _clipboardOutputEventData: clipboard.ClipboardOutputEventData;
declare let _clipboardObserver: clipboard.ClipboardObserver;
declare let _clipboardEventData: clipboard.ClipboardEventData;
declare let _dataTransfer: clipboard.DataTransfer;
declare let _pastePlainText: clipboard.PastePlainText;

// core Types ------------------------------------------------------------------

declare let _editor: core.editor.Editor;
declare let _plugin: core.Plugin<any>;

// engine Types ----------------------------------------------------------------

declare let _document: engine.view.Document;
declare let _documentFragment: engine.view.DocumentFragment;
declare let _element: engine.view.Element;
declare let _view: engine.view.View;

// utils Types -----------------------------------------------------------------

declare let _emitterMixinDelegateChain: utils.EmitterMixinDelegateChain;

// clipboard/clipboard (Module) ================================================

// Clipboard -------------------------------------------------------------------

_editor = _clipboard.editor;
_boolean = _clipboard.isEnabled;

_boolean = clipboard.Clipboard.isContextPlugin;
_string = clipboard.Clipboard.pluginName || _string;
_plugin = clipboard.Clipboard.requires ? new clipboard.Clipboard.requires[0](_editor) : _plugin;

_clipboard = new clipboard.Clipboard(_editor);
_clipboard.init();

_emitterMixinDelegateChain = _clipboard.delegate(_string, _string);
_any = _clipboard.fire(_string);
_any = _clipboard.fire(_string, _any, _any);

// ClipboardOutputEventData ----------------------------------------------------

_documentFragment = _clipboardOutputEventData.content;
_dataTransfer = _clipboardOutputEventData.dataTransfer;
_string = _clipboardOutputEventData.method;

// PastePlainText --------------------------------------------------------------

_editor = _pastePlainText.editor;
_boolean = _pastePlainText.isEnabled;

_boolean = clipboard.PastePlainText.isContextPlugin;
_string = clipboard.PastePlainText.pluginName || _string;
_plugin = clipboard.PastePlainText.requires ? new clipboard.PastePlainText.requires[0](_editor) : _plugin;

_pastePlainText = new clipboard.PastePlainText(_editor);
_pastePlainText.init();

// clipboard/clipboardobserver (Module) ========================================

// ClipboardEventData ----------------------------------------------------------

_dataTransfer = _clipboardEventData.dataTransfer;
_element = _clipboardEventData.target;

_clipboardEventData = new clipboard.ClipboardEventData(_view, _event);
_clipboardEventData = new clipboard.ClipboardEventData(_view, _event, _any);
_clipboardEventData.preventDefault();
_clipboardEventData.stopPropagation();

// ClipboardObserver -----------------------------------------------------------

_document = _clipboardObserver.document;
_boolean = _clipboardObserver.isEnabled;
_view = _clipboardObserver.view;

// No default constructor
// $ExpectError
_clipboardObserver = new engine.view.observer.DomEventObserver();

_clipboardObserver = new engine.view.observer.DomEventObserver(_view);

_boolean = _clipboardObserver.checkShouldIgnoreEventFromTarget(_domNode);

_clipboardObserver.destroy();
_clipboardObserver.disable();
_clipboardObserver.enable();
_clipboardObserver.observe(_htmlElement, _string);

_boolean = _clipboardObserver.useCapture;

_clipboardObserver.fire(_string, _event);
_clipboardObserver.fire(_string, _event, _any);

_clipboardObserver.onDomEvent();

// clipboard/datatransfer (Module) =============================================

_dataTransfer = new clipboard.DataTransfer();
_file = _dataTransfer.files[0];
_string = _dataTransfer.types[0];
_string = _dataTransfer.getData(_string);
_dataTransfer.setData(_string, _string);
