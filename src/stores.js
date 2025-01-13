import { writable } from "svelte/store";


export const selectedField = writable(null);
export const concepts = writable([]);

export const currentScreen = writable("intro");


export const bitsCount = writable(0);
export const bitsStatus = writable(["to-unlock", "to-unlock", "to-unlock", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"]);

export const dialogVisible = writable(false);
export const dialogContent = writable(null);
export const dialogTitle = writable(null);
