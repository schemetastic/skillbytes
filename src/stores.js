import { writable } from "svelte/store";


export const selectedField = writable(null);
export const concepts = writable([]);

export const collectionVisible = writable(false);
export const collectionModalVisible = writable(false);

export const currentScreen = writable("intro");

export const currentLevel = writable(1);

export const projectBoxTitle = writable("Skill Capsules");
export const projectBoxContent = writable("Hover over a capsule to see the required bits that it needs to work.");


export const bitsCount = writable(0);
export const bitsStatus = writable(["to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock", "to-unlock"]);

export const dialogVisible = writable(false);
export const dialogContent = writable(null);
export const dialogTitle = writable(null);
export const dialogAction = writable("none");

export const levelOneComplete = writable(false);
export const levelTwoComplete = writable(false);
export const levelThreeComplete = writable(false);

export const levelOneCapsule = writable(null);
export const levelOneAdded = writable([]);

export const levelTwoCapsule1 = writable(null);
export const levelTwoCapsule2 = writable(null);
export const levelTwoCapsuleAdded1 = writable([]);
export const levelTwoCapsuleAdded2 = writable([]);



export const levelThreeCapsule1 = writable(null);
export const levelThreeCapsule2 = writable(null);
export const levelThreeCapsule3 = writable(null);
export const levelThreeCapsule4 = writable(null);
export const levelThreeCapsuleAdded1 = writable([]);
export const levelThreeCapsuleAdded2 = writable([]);
export const levelThreeCapsuleAdded3 = writable([]);
export const levelThreeCapsuleAdded4 = writable([]);


export const manageModalVisible = writable(false);
export const manageModalCurrent = writable(-1);
export const manageModalMax = writable(2);

export const selectedBits = writable([]);
export const capsuleStatus = writable("default");
