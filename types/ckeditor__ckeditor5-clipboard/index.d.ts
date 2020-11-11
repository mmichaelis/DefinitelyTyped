// Type definitions for @ckeditor/ckeditor5-clipboard 23.1
// Project: https://ckeditor.com/ckeditor-5
// Definitions by: Mark Michaelis <https://github.com/mmichaelis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as core from "@ckeditor/ckeditor5-core";
import * as engine from "@ckeditor/ckeditor5-engine";

// clipboard/clipboard (Module) ================================================

/**
 * @see <a href="https://ckeditor.com/docs/ckeditor5/latest/api/module_clipboard_clipboard-Clipboard.html">Class Clipboard (clipboard/clipboard~Clipboard) - CKEditor 5 API docs</a>
 */
export class Clipboard extends core.Plugin {
    // core.Plugin
    static readonly isContextPlugin: boolean;
    static readonly pluginName?: string;
    static readonly requires?: Array<new(editor: core.editor.Editor) => core.Plugin<any>>;

    constructor(editor: core.editor.Editor);
    init(): null | Promise<void>;
}

/**
 * @see <a href="https://ckeditor.com/docs/ckeditor5/latest/api/module_clipboard_clipboard-Clipboard.html">Class Clipboard (clipboard/clipboard~Clipboard) - CKEditor 5 API docs</a>
 */
export class ClipboardOutputEventData {
    content: engine.view.DocumentFragment;
    readonly dataTransfer: DataTransfer;
    method: string;
}

/**
 * @see <a href="https://ckeditor.com/docs/ckeditor5/latest/api/module_clipboard_clipboard-PastePlainText.html">Class PastePlainText (clipboard/clipboard~PastePlainText) - CKEditor 5 API docs</a>
 */
export class PastePlainText extends core.Plugin {
    // core.Plugin
    static readonly isContextPlugin: boolean;
    static readonly pluginName?: string;
    static readonly requires?: Array<new(editor: core.editor.Editor) => core.Plugin<any>>;

    constructor(editor: core.editor.Editor);
    init(): null | Promise<void>;
}

// clipboard/clipboardobserver (Module) ========================================

/**
 * @see <a href="https://ckeditor.com/docs/ckeditor5/latest/api/module_clipboard_clipboardobserver-ClipboardEventData.html">Class
 * ClipboardEventData (clipboard/clipboardobserver~ClipboardEventData) - CKEditor 5 API docs</a>
 */
export class ClipboardEventData extends engine.view.observer.DomEventData {
    readonly dataTransfer: DataTransfer;

    constructor(view: engine.view.View, domEvent: Event, additionalData?: any);
}

/**
 * @see <a href="https://ckeditor.com/docs/ckeditor5/latest/api/module_clipboard_clipboardobserver-ClipboardObserver.html">Class
 * ClipboardObserver (clipboard/clipboardobserver~ClipboardObserver) - CKEditor 5 API docs</a>
 */
export class ClipboardObserver extends engine.view.observer.DomEventObserver {
}

// clipboard/datatransfer (Module) =============================================

/**
 * @see <a href="https://ckeditor.com/docs/ckeditor5/latest/api/module_clipboard_datatransfer-DataTransfer.html">Class DataTransfer (clipboard/datatransfer~DataTransfer) - CKEditor 5 API docs</a>
 */
export class DataTransfer {
    readonly files: File[];
    readonly types: string[];

    getData(type: string): string;
    setData(type: string, data: string): void;
}
