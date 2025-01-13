<script>
    import Capsule from "./Capsule.svelte";
    import {
        levelOneCapsule,
        projectBoxTitle,
        projectBoxContent,
    } from "../stores";
</script>

<div class="container">
    <div class="capsulesContainer">
        <Capsule
            variant="default"
            bitsSize={50}
            addedBits={[]}
            requiredBits={$levelOneCapsule}
        />
    </div>
    <div class="dialogContainer">
        <div class="dialogBox">
            <h3>{$projectBoxTitle}</h3>
            <p>{$projectBoxContent}</p>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        position: absolute;
        justify-content: center;
        left: 0;
        top: 100px;
    }
    .capsulesContainer {
        flex-basis: 780px;
        width: 800px;
        justify-content: center;
        display: flex;
    }
    .dialogContainer {
        flex-basis: 244px;
        padding-right: 10px;
        width: 224px;
    }
    .dialogBox {
        width: 100%;
        height: auto;
    }
    .dialogBox h3 {
        font-size: 28px;
        font-family: var(--font-boogaloo);
    }
    .dialogBox p {
        font-size: 22px;
    }
</style>
