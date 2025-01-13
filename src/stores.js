import { writable } from "svelte/store";


export const selectedField = writable(null);
export const concepts = writable([]);

export const collectionVisible = writable(false);
export const collectionModalVisible = writable(false);

export const currentScreen = writable("intro");


export const bitsCount = writable(0);
export const bitsStatus = writable(["to-unlock", "to-unlock", "to-unlock", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"]);

export const dialogVisible = writable(false);
export const dialogContent = writable(null);
export const dialogTitle = writable(null);
export const dialogAction = writable("none");

export const levelOneComplete = writable(false);
export const levelTwoComplete = writable(false);
export const levelThreeComplete = writable(false);

export const levelOneCapsule = writable(null);

export const levelTwoCapsule1 = writable(null);
export const levelTwoCapsule2 = writable(null);

export const levelThreeCapsule1 = writable(null);
export const levelThreeCapsule2 = writable(null);
export const levelThreeCapsule3 = writable(null);
export const levelThreeCapsule4 = writable(null);




