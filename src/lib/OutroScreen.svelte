<script>
    import { currentScreen } from "../stores";
</script>

<div
    class={`screen outroScreen ${$currentScreen === "outro" ? "visibleScreen" : ""}`}
></div>

<style>
    .menuScreen {
        background-color: white;
        background-image: url("/images/outro-bg.webp");
    }
</style>
