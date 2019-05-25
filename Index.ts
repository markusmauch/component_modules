import { $create, Component } from "Component";
import { Control } from "Control";

// https://github.com/Microsoft/TypeScript/issues/21566

const props = { count: 7, id: "asdf" } as Control.Properties;
let el: HTMLDivElement;
const control = $create( Control, { count: 5, id: "" } );
const component = $create( Component, { id: "my_component" } );

