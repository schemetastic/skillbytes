<script>
    import { currentScreen } from "../stores";
    export let variant = "small";
    export let isLocked = true;
    export let isCompleted = false;
    export let title = "locked";
    export let titleSize = "22px";
    export let x = 0;
    export let y = 0;

    function handleClick() {
        if (isLocked || isCompleted) return;
        currentScreen.set("project");
    }
</script>

<div class="projectBox-container" style={`--x: ${x}; --y: ${y};`}>
    <div
        class={`projectBox`}
        style={` --bg-x: ${variant === "small" ? 0 : variant === "medium" ? "-293px" : "-585px"}`}
    >
        <h3 style={`font-size: ${titleSize}`}>{title}</h3>
        {#if isLocked}
            <img
                class="lockAndChains"
                src="/images/lock-and-chains.webp"
                alt="Lock and chains"
            />
        {/if}
        <div
            class={`projectIcon`}
            style={`--opacity: ${isLocked ? 0.5 : 1}; --pos-x: ${variant === "small" ? 0 : variant === "medium" ? "-185px" : "-370px"}`}
        ></div>
        <button
            on:click={handleClick}
            class={`${isLocked ? "lockedBtn" : ""} ${isCompleted ? "completedBtn" : ""}`}
            >{isLocked
                ? "Locked"
                : isCompleted
                  ? "Completed!"
                  : "Start"}</button
        >
    </div>
</div>

<style>
    .projectBox-container {
        position: absolute;
        width: 290px;
        height: 360px;
        left: var(--x);
        top: var(--y);
    }
    .projectBox {
        width: 290px;
        height: 360px;
        position: relative;
        background-image: url("/images/projects-bg-sprite.webp");
        border-radius: 10px;
        overflow: hidden;
        background-position-x: var(--bg-x);
    }
    h3 {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-family: var(--font-boogaloo);
        width: 80%;
        text-align: center;
        color: #252525;
        opacity: 0.85;
    }
    .lockAndChains {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        opacity: 0.9;
    }
    button {
        background-color: #252525;
        color: white;
        font-family: var(--font-boogaloo);
        font-size: 24px;
        padding: 8px 15px;
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        border-radius: 5px;
        border: none;
        cursor: pointer;
        z-index: 5;
    }
    button:hover {
        background-color: #111111;
        color: #85a8ee;
    }
    .lockedBtn {
        background-color: #777777;
        cursor: default;
        color: white;
    }
    .lockedBtn:hover {
        background-color: #777777;
        cursor: default;
        color: white;
    }
    .completedBtn {
        background-color: #ccff00;
        cursor: default;
        color: #252525;
    }
    .completedBtn:hover {
        background-color: #ccff00;
        cursor: default;
        color: #252525;
    }
    .projectIcon {
        width: 185px;
        height: 185px;
        position: absolute;
        opacity: var(--opacity);
        top: 85px;
        left: 50%;
        transform: translateX(-50%);
        background-image: url("/images/project-cubes-sprite.webp");
        background-position-x: var(--pos-x);
    }
</style>
