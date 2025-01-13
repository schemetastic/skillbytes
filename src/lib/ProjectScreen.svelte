<script>
    import {
        currentScreen,
        currentLevel,
        manageModalCurrent,
        manageModalVisible,
        manageModalMax,
        bitsStatus,
        selectedBits,
        capsuleStatus,
        levelOneCapsule,
    } from "../stores";
    import KnowledgeBit from "./KnowledgeBit.svelte";
    import LevelOnePlayground from "./levelOnePlayground.svelte";

    function handleClose() {
        manageModalVisible.set(false);
        if (arraysEqual($selectedBits, $levelOneCapsule)) {
            capsuleStatus.set("correct");
            setTimeout(() => {
                currentScreen.set("outro");
            }, 1000);
        } else {
            capsuleStatus.set("incorrect");
        }
    }
    let bitsSelected = [];
    function handleSelectedBit(index) {
        if ($selectedBits == 5) return;
        selectedBits.update((bits) => {
            if (bits.includes(index)) {
                return bits.filter((bit) => bit !== index);
            } else {
                return [...bits, index];
            }
        });
        console.log($selectedBits);
    }
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        let sortedArr1 = [...arr1].sort();
        let sortedArr2 = [...arr2].sort();
        for (let i = 0; i < sortedArr1.length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) return false;
        }
        return true;
    }
</script>

<div
    class={`screen projectScreen ${$currentScreen === "project" ? "visibleScreen" : ""}`}
>
    {#if $currentLevel === 1}
        <LevelOnePlayground />
    {/if}

    <div
        class={`manageModal ${$manageModalVisible ? "manageModal-visible" : ""}`}
    >
        <div class="bitsContainer">
            {#each $bitsStatus as bit, i}
                {#if $bitsStatus[i] === "unlocked"}
                    <button
                        class={`selectBit ${$selectedBits.includes(i) ? "selected" : ""}`}
                        on:click={() => {
                            handleSelectedBit(i);
                        }}
                    >
                        <KnowledgeBit
                            variant={i}
                            body="default"
                            hoverAnimate={false}
                            size={120}
                            triggerModal={false}
                        />
                    </button>
                {/if}
            {/each}
        </div>
        <button class="close" on:click={handleClose}>Done!</button>
    </div>
</div>

<style>
    .projectScreen {
        background-color: white;
        background-image: url("/images/project-bg.webp");
    }
    .selectBit {
        width: 120px;
        height: 120px;
        border: none;
        background: transparent;
        opacity: 0.5;
        cursor: pointer;
    }
    .selectBit:hover {
        opacity: 0.7;
        scale: 1.1;
    }
    .selectBit.selected {
        opacity: 1 !important;
        scale: 1.1 !important;
    }
    .manageModal {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        background-image: url("/images/wooden-bg.webp");
        visibility: hidden;
        opacity: 0;
        z-index: 98;
    }
    .close {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        background-color: #225fd8;
        font-family: var(--font-boogaloo);
        color: white;
        font-size: 32px;
        padding: 8px 15px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
    .close:hover {
        background-color: #0c388e;
    }
    .bitsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5px;
        padding: 20px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 30px;
        width: 600px;
    }
    .manageModal-visible {
        visibility: visible;
        display: block;
        opacity: 1;
    }
</style>
