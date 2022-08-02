export type Player = import("./jsmpeg").Player;
/**
 * Creates a `Player`. If you intend to create multiple players, you must
 * await for this promise to complete before creating the next player.
 * @param {import("./jsmpeg").PlayerOptions} options
 * @returns {Promise<Player>}
 */
export function loadPlayer({ url, onDisconnect, disconnectThreshold, ...options }: import("./jsmpeg").PlayerOptions): Promise<Player>;
