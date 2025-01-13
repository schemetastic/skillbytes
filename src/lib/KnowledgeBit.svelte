<script>
    import {
        dialogVisible,
        dialogContent,
        dialogTitle,
        dialogAction,
    } from "../stores";

    export let variant = 0;
    export let mode = "default";
    export let animate = false;
    export let body = "default";
    export let face = "default";
    export let size = 150;
    export let opacity = 1;
    export let triggerModal = true;
    export let knowledgeTitle = "";
    export let knowledgeContent = "";
    export let hoverAnimate = true;
    export let cursor = "pointer";
    export let action = "none";

    function triggerModalHandler() {
        if (!triggerModal) return;
        dialogVisible.set(true);
        dialogTitle.set(knowledgeTitle);
        dialogContent.set(knowledgeContent);

        if (action !== "none") {
            dialogAction.set(action);
        }
    }
</script>

<figure
    aria-label="Knowledge bit"
    style={`width: ${size}px; height: ${size}px; --cursor: ${
        hoverAnimate ? cursor : "default"
    }`}
    class={`${animate ? "bitImage-animate" : ""}`}
>
    <button
        on:click={triggerModalHandler}
        aria-label="Knowledge bit interaction"
        style="width: 100%; height: 100%; background: none; border: none; --cursor: ${hoverAnimate
            ? cursor
            : 'default'}"
    ></button>
    <div
        class="bitImage"
        style={`--pos-x: -${variant * size}px; --pos-y: ${body === "default" ? 0 : size}px; opacity: ${opacity}; --hover-opacity: ${hoverAnimate ? 1 : opacity}; --hover-scale: ${hoverAnimate ? 1.1 : 1};`}
    >
        <div
            class="face"
            style={`--pos-x: ${face === "default" ? 0 : "100%"}; visibility: ${body === "default" ? "visible" : "hidden"}`}
        ></div>
        {#if mode === "locked"}
            <img class="lock" src="/images/lock.webp" alt="Lock" />
        {/if}
        {#if mode === "to-unlock"}
            <span class="unlockLabel">Unlock!</span>
        {/if}
    </div>
</figure>

<style>
    figure {
        position: relative;
    }
    figure:hover {
        cursor: var(--cursor);
    }
    figure:hover .bitImage {
        scale: var(--hover-scale);
        opacity: var(--hover-opacity) !important;
    }
    .unlockLabel {
        background-color: #c4ff00;
        color: #212b00;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2px 5px;
        border-radius: 2px;
        font-family: var(--font-boogaloo);
    }
    .bitImage {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url("/images/knowledge-bits-sprite.webp");
        background-position-x: var(--pos-x);
        background-position-y: var(--pos-y);
        background-size: 1600% 200%;
        cursor: var(--cursor);
        opacity: var(--opacity);
        transition:
            opacity ease-in-out 0.3s,
            scale ease-in-out 0.3s;
    }

    button {
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        cursor: var(--cursor);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .lock {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
    }
    .face {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -75%);
        width: 30%;
        height: 30%;
        background-size: 200% 100%;
        background-image: url("/images/faces-sprite.webp");
        background-position-x: var(--pos-x);
    }
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .bitImage-animate {
        animation: float 3s ease-in-out infinite;
    }
</style>
