import * as engine from "@ckeditor/ckeditor5-engine";

// For Type-Checks =============================================================

declare let _any: any;
declare let _boolean: boolean;
declare let _number: number;
declare let _string: string;

declare let _event: Event;
declare let _domNode: Node;
declare let _htmlElement: HTMLElement;

// engine Types ----------------------------------------------------------------

declare let _document: engine.view.Document;
declare let _domConverter: engine.view.DomConverter;
declare let _domEventObserver: engine.view.observer.DomEventObserver;
declare let _elementDefinition: engine.view.ElementDefinition;
declare let _matcherPattern: engine.view.MatcherPattern;
declare let _observer: engine.view.observer.Observer;
declare let _stylesMap: engine.view.StylesMap;
declare let _stylesProcessor: engine.view.StylesProcessor;
declare let _view: engine.view.View;

// engine/view/elementdefinition (Module) ======================================

_elementDefinition = "p";

_elementDefinition = {
    name: "h1",
    classes: ["foo", "bar"],
};

_elementDefinition = {
    name: "span",
    styles: {
        "font-size": "12px",
        "font-weight": "bold",
    },
    attributes: {
        "data-id": "123",
    }
};

// engine/view/stylesmap (Module) ==============================================

// No default constructor
// $ExpectError
_stylesMap = new engine.view.StylesMap();

_stylesMap = new engine.view.StylesMap(_stylesProcessor);

_boolean = _stylesMap.isEmpty;
_number = _stylesMap.size;

_stylesProcessor = new engine.view.StylesProcessor();

// engine/view/matcher (Module) ================================================

_matcherPattern = {name: /^p/};

_matcherPattern = {
    attributes: {
        title: "foobar",
        foo: /^\w+/,
        bar: true,
    }
};

_matcherPattern = {
    classes: "foobar"
};

_matcherPattern = {
    classes: /foo.../
};

_matcherPattern = {
    classes: ["baz", "bar", /foo.../]
};

_matcherPattern = {
    styles: {
        position: "absolute",
        color: /^\w*blue$/
    }
};

_matcherPattern = {
    name: "span",
    styles: {
        "font-weight": "bold"
    },
    classes: "highlighted"
};

_matcherPattern = (element: engine.view.Element) => {
    if (element.name === "div" && element.childCount > 0) {
        return {name: true};
    }

    return null;
};

_matcherPattern = (element: engine.view.Element) => {
    if (element.name === "p") {
        const fontSize = element.getStyle("font-size")!;
        const size = fontSize.match(/(\d+)px/);

        if (size && Number(size[1]) > 26) {
            return {name: true, attribute: ["font-size"]};
        }
    }

    return null;
};

// engine/view/observer (Module) ===============================================

// DomEventObserver ------------------------------------------------------------

_document = _domEventObserver.document;
_boolean = _domEventObserver.isEnabled;
_view = _domEventObserver.view;

// No default constructor
// $ExpectError
_domEventObserver = new engine.view.observer.DomEventObserver();

_domEventObserver = new engine.view.observer.DomEventObserver(_view);

_boolean = _domEventObserver.checkShouldIgnoreEventFromTarget(_domNode);

_domEventObserver.destroy();
_domEventObserver.disable();
_domEventObserver.enable();
_domEventObserver.observe(_htmlElement, _string);

_boolean = _domEventObserver.useCapture;

_domEventObserver.fire(_string, _event);
_domEventObserver.fire(_string, _event, _any);

_domEventObserver.onDomEvent();

// Observer --------------------------------------------------------------------

_document = _domEventObserver.document;
_boolean = _domEventObserver.isEnabled;
_view = _domEventObserver.view;

// No default constructor
// $ExpectError
_observer = new engine.view.observer.Observer();

// Abstract
// $ExpectError
_observer = new engine.view.observer.Observer(_view);

class MyObserver extends engine.view.observer.Observer {
    constructor(view: engine.view.View) {
        super(view);
    }
}

_boolean = _observer.checkShouldIgnoreEventFromTarget(_domNode);

_observer.destroy();
_observer.disable();
_observer.enable();
_observer.observe(_htmlElement, _string);

// engine/view/view (Module) ===================================================

// Constructor

// No default constructor
// $ExpectError
_view = new engine.view.View();

_view = new engine.view.View(_stylesProcessor);

// Properties

_document = _view.document;
_domConverter = _view.domConverter;
_htmlElement = _view.domRoots.get(_string) || _htmlElement;
_boolean = _view.hasDomSelection;
_boolean = _view.isRenderingInProgress;
