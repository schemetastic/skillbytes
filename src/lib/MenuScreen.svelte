<script>
    import { currentScreen } from "../stores";
</script>

<div
    class={`screen menuScreen ${$currentScreen === "menu" ? "visibleScreen" : ""}`}
>
    <h2>Choose a concept to learn</h2>
</div>

<style>
    .menuScreen {
        background-color: white;
    }
</style>
