declare function _exports(app: Application, server?: import("http").Server | import("https").Server): {
    /**
     * You must include a script tag in the HTML to import this script
     *
     * Alternatively, if you have set up a build process for front-end
     * code, you can import it instead:
     * ```js
     * import { loadPlayer } from "rtsp-relay/browser";
     * ```
     */
    scriptUrl: string;
    killAll(): void;
    /** @param {Options} props */
    proxy({ url, verbose, ...options }: Options): (ws: WebSocket) => void;
};
export = _exports;
export type Options = {
    url: string;
    additionalFlags?: string[];
    verbose?: boolean;
    transport?: 'udp' | 'tcp' | 'udp_multicast' | 'http';
    windowsHide?: boolean;
};
export type Application = import("express").Application;
export type WebSocket = import("ws");
export type Stream = import("child_process").ChildProcessWithoutNullStreams;
