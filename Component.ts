type Activator<C extends Component> = { new( element?: HTMLElement ): C }

class Component
{
    public constructor( element: HTMLElement )
    {

    }

    public initialize()
    {
        console.log( "COMPONENT initialize" );
    }

    public set_id( id: string )
    {
        console.log( `COMPONENT id=${id}` );
    }
}

namespace Component
{
    export interface Properties
    {
        id: string;
    }
    
}

export function $create( type: typeof Component, properties?: Component.Properties, element?: HTMLElement )
{
    const component = new type( element );
    for ( let item in properties )
    {
        component[ "set_" + item ]( properties[ item ] );
    }
    component.initialize();
    return component;
}

export { Activator, Component };