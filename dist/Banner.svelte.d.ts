/** @typedef {typeof __propDef.props}  BannerProps */
/** @typedef {typeof __propDef.events}  BannerEvents */
/** @typedef {typeof __propDef.slots}  BannerSlots */
export default class Banner extends SvelteComponentTyped<{
    cookieName?: null | undefined;
    canRejectCookies?: boolean | undefined;
    canEditCookies?: boolean | undefined;
    showEditIcon?: boolean | undefined;
    heading?: string | undefined;
    description?: string | undefined;
    categories?: {
        analytics: () => void;
        tracking: () => void;
        marketing: () => void;
        necessary: () => void;
    } | undefined;
    cookieConfig?: {} | undefined;
    choices?: {} | undefined;
    acceptLabel?: string | undefined;
    rejectLabel?: string | undefined;
    settingsLabel?: string | undefined;
    closeLabel?: string | undefined;
    editLabel?: string | undefined;
    show?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get show(): () => void;
}
export type BannerProps = typeof __propDef.props;
export type BannerEvents = typeof __propDef.events;
export type BannerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        cookieName?: null | undefined;
        canRejectCookies?: boolean | undefined;
        canEditCookies?: boolean | undefined;
        showEditIcon?: boolean | undefined;
        heading?: string | undefined;
        description?: string | undefined;
        categories?: {
            analytics: () => void;
            tracking: () => void;
            marketing: () => void;
            necessary: () => void;
        } | undefined;
        cookieConfig?: {} | undefined;
        choices?: {} | undefined;
        acceptLabel?: string | undefined;
        rejectLabel?: string | undefined;
        settingsLabel?: string | undefined;
        closeLabel?: string | undefined;
        editLabel?: string | undefined;
        show?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
