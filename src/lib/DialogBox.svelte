<script>
    import {
        dialogVisible,
        dialogTitle,
        dialogContent,
        dialogAction,
        currentScreen,
    } from "../stores";

    function handleClose() {
        dialogVisible.set(false);
        setTimeout(() => {
            if ($dialogAction.startsWith("bit-unlock:")) {
            }
            if ($dialogAction === "finish-level:") {
                currentScreen.set("menu");
            }
            if ($dialogAction === "finish-game") {
                currentScreen.set("outro");
            }
            dialogAction.set("none");
        }, 50);
    }
</script>

<div class={`dialogBox-overlay ${$dialogVisible ? "dialogBox-visible" : ""}`}>
    <div class="dialogBox">
        <div class="closeButton-container">
            <button class="closeButton" on:click={handleClose}>X</button>
        </div>
        <h3>{$dialogTitle}</h3>
        <p>{$dialogContent}</p>
        <div class="okayButton-container">
            <button class="okayButton" on:click={handleClose}>Okay</button>
        </div>
    </div>
</div>

<style>
    .dialogBox-overlay {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: opacity ease-in-out 0.3s;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(5px);
        z-index: 100;
    }
    .dialogBox {
        position: absolute;
        height: auto;
        min-height: 200px;
        width: 720px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-family: var(--font-dekko);
    }
    .closeButton-container {
        height: 10px;
        text-align: right;
        overflow: visible;
    }
    .closeButton {
        background-color: #252525;
        width: 35px;
        height: 35px;
        color: white;
        border-radius: 50%;
        font-size: 20px;
        border: none;
        cursor: pointer;
        font-family: var(--font-dekko);
    }
    .closeButton:hover {
        background-color: #111111;
    }

    .okayButton-container {
        text-align: center;
        padding-top: 10px;
    }
    .okayButton {
        background-color: #252525;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        font-family: var(--font-dekko);
        font-size: 20px;
    }
    .okayButton:hover {
        background-color: #111111;
    }
    .dialogBox-visible {
        visibility: visible;
        opacity: 1;
    }
    h3 {
        font-family: var(--font-boogaloo);
        font-size: 28px;
    }
    p {
        font-size: 20px;
    }
</style>
