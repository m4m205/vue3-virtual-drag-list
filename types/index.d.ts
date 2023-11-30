import * as vue from 'vue';

declare const VirtualDragList: vue.DefineComponent<{
    dataSource: {};
    dataKey: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    draggable: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    handle: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    group: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    pageMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: vue.PropType<"vertical" | "horizontal">;
        default: string;
    };
    keeps: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: NumberConstructor;
        default: number;
    };
    autoScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollThreshold: {
        type: NumberConstructor;
        default: number;
    };
    keepOffset: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fallbackOnBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    pressDelay: {
        type: NumberConstructor;
        default: number;
    };
    pressDelayOnTouchOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootTag: {
        type: StringConstructor;
        default: string;
    };
    wrapTag: {
        type: StringConstructor;
        default: string;
    };
    headerTag: {
        type: StringConstructor;
        default: string;
    };
    footerTag: {
        type: StringConstructor;
        default: string;
    };
    itemTag: {
        type: StringConstructor;
        default: string;
    };
    wrapClass: {
        type: StringConstructor;
        default: string;
    };
    wrapStyle: {
        /**
         * reset component
         */
        type: ObjectConstructor;
        default: () => {};
    };
    itemStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    footerStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    ghostClass: {
        type: StringConstructor;
        default: string;
    };
    ghostStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    chosenClass: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("update:dataSource" | "top" | "bottom" | "drag" | "drop" | "add" | "remove")[], "update:dataSource" | "top" | "bottom" | "drag" | "drop" | "add" | "remove", vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    dataSource: {};
    dataKey: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    draggable: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    handle: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    group: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    pageMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: vue.PropType<"vertical" | "horizontal">;
        default: string;
    };
    keeps: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: NumberConstructor;
        default: number;
    };
    autoScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollThreshold: {
        type: NumberConstructor;
        default: number;
    };
    keepOffset: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fallbackOnBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    pressDelay: {
        type: NumberConstructor;
        default: number;
    };
    pressDelayOnTouchOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rootTag: {
        type: StringConstructor;
        default: string;
    };
    wrapTag: {
        type: StringConstructor;
        default: string;
    };
    headerTag: {
        type: StringConstructor;
        default: string;
    };
    footerTag: {
        type: StringConstructor;
        default: string;
    };
    itemTag: {
        type: StringConstructor;
        default: string;
    };
    wrapClass: {
        type: StringConstructor;
        default: string;
    };
    wrapStyle: {
        /**
         * reset component
         */
        type: ObjectConstructor;
        default: () => {};
    };
    itemStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    footerStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    ghostClass: {
        type: StringConstructor;
        default: string;
    };
    ghostStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    chosenClass: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:dataSource"?: ((...args: any[]) => any) | undefined;
    onTop?: ((...args: any[]) => any) | undefined;
    onBottom?: ((...args: any[]) => any) | undefined;
    onDrag?: ((...args: any[]) => any) | undefined;
    onDrop?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    dataKey: string;
    pageMode: boolean;
    direction: "vertical" | "horizontal";
    keeps: number;
    delay: number;
    animation: number;
    autoScroll: boolean;
    scrollThreshold: number;
    keepOffset: boolean;
    disabled: boolean;
    fallbackOnBody: boolean;
    pressDelay: number;
    pressDelayOnTouchOnly: boolean;
    rootTag: string;
    wrapTag: string;
    headerTag: string;
    footerTag: string;
    itemTag: string;
    wrapClass: string;
    wrapStyle: Record<string, any>;
    itemStyle: Record<string, any>;
    itemClass: string;
    headerStyle: Record<string, any>;
    footerStyle: Record<string, any>;
    ghostClass: string;
    ghostStyle: Record<string, any>;
    chosenClass: string;
}, {}>;

export { VirtualDragList as default };
