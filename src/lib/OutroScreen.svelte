<script>
    import { currentScreen } from "../stores";
</script>

<div
    class={`screen outroScreen ${$currentScreen === "outro" ? "visibleScreen" : ""}`}
>
    <h2>Congratulations! You finished the project!</h2>
    <p>You already started your learning journey!</p>
</div>

<style>
    .menuScreen {
        background-color: white;
        background-image: url("/images/outro-bg.webp");
        padding-top: 100px;
    }
    h2 {
        font-family: var(--font-boogaloo);
        font-size: 56px;
        text-align: center;
    }
    p {
        font-family: var(--font-dekko);
        font-size: 24px;
        color: #252525;
        text-align: center;
    }
</style>
