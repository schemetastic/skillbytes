<script>
    import { currentScreen, bitsCount } from "../stores";
    import BitsCounter from "./BitsCounter.svelte";
    import ProjectBox from "./ProjectBox.svelte";
</script>

<div
    class={`screen menuScreen ${$currentScreen === "menu" ? "visibleScreen" : ""}`}
>
    <h2>Select a project to develop</h2>

    <ProjectBox
        x="56px"
        y="140px"
        variant="small"
        title={$bitsCount < 3 ? "You need 3 knowledge bits to unlock" : "Small"}
        isLocked={$bitsCount < 3 ? true : false}
    />
    <ProjectBox
        x="367px"
        y="140px"
        variant="medium"
        title={$bitsCount < 8
            ? "You need 8 knowledge bits to unlock"
            : "Medium"}
    />
    <ProjectBox
        x="678px"
        y="140px"
        variant="large"
        title={$bitsCount < 16
            ? "You need 16 knowledge bits to unlock"
            : "Large"}
    />
    <BitsCounter />
</div>

<style>
    .menuScreen {
        background-color: white;
        background-image: url("/images/menu-bg.webp");
    }
    h2 {
        position: absolute;
        top: 45px;
        left: 0;
        width: 100%;
        font-size: 52px;
        font-family: var(--font-boogaloo);
        font-weight: 400;
        color: #48241a;
        text-align: center;
    }
</style>
