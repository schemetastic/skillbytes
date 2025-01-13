<script>
    import { currentScreen, currentLevel } from "../stores";
    import LevelOnePlayground from "./levelOnePlayground.svelte";
</script>

<div
    class={`screen projectScreen ${$currentScreen === "project" ? "visibleScreen" : ""}`}
>
    {#if $currentLevel === 1}
        <LevelOnePlayground />
    {/if}
</div>

<style>
    .projectScreen {
        background-color: white;
        background-image: url("/images/project-bg.webp");
    }
</style>
