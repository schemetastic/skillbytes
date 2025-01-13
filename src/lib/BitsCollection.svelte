<script>
    import { onMount } from "svelte";
    import {
        collectionVisible,
        collectionModalVisible,
        bitsStatus,
        concepts,
    } from "../stores";
    import KnowledgeBit from "./KnowledgeBit.svelte";
</script>

<div
    class={`collectionModal ${$collectionModalVisible ? "collectionModal-visible" : ""}`}
>
    <button
        class="closeButton"
        on:click={() => collectionModalVisible.set(false)}
    >
        X
    </button>
    <div class="collectionContainer">
        {#if $concepts.length > 0}
            {#each $bitsStatus as bit, i}
                <KnowledgeBit
                    variant={i}
                    body={bit !== "unlocked" ? "locked" : "default"}
                    triggerModal={bit === "to-unlock" ? true : false}
                    hoverAnimate={bit === "locked" ? false : true}
                    mode={bit}
                    knowledgeTitle={$concepts[i].concept}
                    knowledgeContent={$concepts[i].info}
                />
            {/each}
        {/if}
    </div>
</div>

<button
    aria-label="Collection"
    class={`chest ${$collectionVisible ? "chest-visible" : ""}`}
    on:click={() => collectionModalVisible.set(true)}
>
</button>

<style>
    .chest {
        position: absolute;
        right: 35px;
        bottom: 35px;
        width: 145px;
        height: 140px;
        border: none;
        background-image: url("/images/chest.webp");
        visibility: hidden;
        opacity: 0;
        background-color: transparent;
        transition:
            opacity ease-in-out 200ms,
            scale ease-in-out 200ms;
        z-index: 90;
    }
    .collectionContainer {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .chest-visible {
        visibility: visible;
        opacity: 0.9;
        cursor: pointer;
    }
    .chest-visible:hover {
        opacity: 1;
        scale: 1.07;
    }
    .closeButton {
        background-color: #28170b;
        width: 47px;
        height: 47px;
        color: #e9c6af;
        border-radius: 50%;
        font-size: 28px;
        border: 2px solid #e9c6af;
        cursor: pointer;
        font-family: var(--font-dekko);
        position: absolute;
        right: 15px;
        top: 15px;
    }
    .closeButton:hover {
        background-color: #e9c6af;
        color: #28170b;
    }
    .collectionModal {
        opacity: 0;
        visibility: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition:
            opacity ease-in-out 0.3s,
            visibility ease-in-out 0.3s;
        background-image: url("/images/wooden-bg.webp");
    }
    .collectionModal-visible {
        opacity: 1;
        visibility: visible;
        z-index: 95;
    }
</style>
