<script>
    import { dialogVisible, dialogTitle, dialogContent } from "../stores";
</script>

<div class={`dialogBox-overlay ${$dialogVisible ? "dialogBox-visible" : ""}`}>
    <div class="dialogBox">
        <h3>{$dialogTitle}</h3>
        <p>{$dialogContent}</p>
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
