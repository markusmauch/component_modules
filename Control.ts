import { Component, Activator } from "Component";

class Control extends Component
{
    public initialize()
    {
        super.initialize();
        console.log( "CONTROL initialize" );
    }

    public set_count( count: number )
    {
        console.log( `CONTROL count=${count}` )
    }
}

namespace Control
{
    export interface Properties extends Component.Properties
    {
        count: number;
    }
}

declare module "Component"
{
    // @ts-ignore
    export function $create( type: typeof Control, properties?: Control.Properties, element?: HTMLElement ): Control;
}

export { Control };
