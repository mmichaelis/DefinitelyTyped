import * as engine from "ckeditor__ckeditor5-engine";

// For Type-Checks =============================================================

declare let _boolean: boolean;
declare let _number: number;
declare let _string: string;

declare let htmlElement: HTMLElement;

// engine Types ----------------------------------------------------------------

declare let document: engine.view.Document;
declare let domConverter: engine.view.DomConverter;
declare let elementDefinition: engine.view.ElementDefinition;
declare let matcherPattern: engine.view.MatcherPattern;
declare let stylesMap: engine.view.StylesMap;
declare let stylesProcessor: engine.view.StylesProcessor;
declare let view: engine.view.View;

// engine/view/elementdefinition (Module) ======================================

elementDefinition = "p";

elementDefinition = {
    name: "h1",
    classes: ["foo", "bar"],
};

elementDefinition = {
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
stylesMap = new engine.view.StylesMap();

stylesMap = new engine.view.StylesMap(stylesProcessor);

_boolean = stylesMap.isEmpty;
_number = stylesMap.size;

stylesProcessor = new engine.view.StylesProcessor();

// engine/view/matcher (Module) ================================================

matcherPattern = {name: /^p/};

matcherPattern = {
    attributes: {
        title: "foobar",
        foo: /^\w+/,
        bar: true,
    }
};

matcherPattern = {
    classes: "foobar"
};

matcherPattern = {
    classes: /foo.../
};

matcherPattern = {
    classes: ["baz", "bar", /foo.../]
};

matcherPattern = {
    styles: {
        position: "absolute",
        color: /^\w*blue$/
    }
};

matcherPattern = {
    name: "span",
    styles: {
        "font-weight": "bold"
    },
    classes: "highlighted"
};

matcherPattern = (element: engine.view.Element) => {
    if (element.name === "div" && element.childCount > 0) {
        return {name: true};
    }

    return null;
};

matcherPattern = (element: engine.view.Element) => {
    if (element.name === "p") {
        const fontSize = element.getStyle("font-size")!;
        const size = fontSize.match(/(\d+)px/);

        if (size && Number(size[1]) > 26) {
            return {name: true, attribute: ["font-size"]};
        }
    }

    return null;
};

// engine/view/view (Module) ===================================================

// Constructor

// No default constructor
// $ExpectError
view = new engine.view.View();

view = new engine.view.View(stylesProcessor);

// Properties

document = view.document;
domConverter = view.domConverter;
htmlElement = view.domRoots.get(_string) || htmlElement;
_boolean = view.hasDomSelection;
_boolean = view.isRenderingInProgress;
