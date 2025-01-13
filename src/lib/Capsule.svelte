<script>
    import { projectBoxTitle, projectBoxContent, concepts } from "../stores";
    import KnowledgeBit from "./KnowledgeBit.svelte";
    export let variant = "default";
    export let addedBits = [];
    export let requiredBits = [];
    export let bitsSize = 50;

    function handlePointerEnter() {
        if (!requiredBits.length) return;
        let text = "";
        requiredBits.forEach((bit) => {
            text += $concepts[bit].concept + ";";
        });
        projectBoxTitle.set("Required bits");
        projectBoxContent.set(text);
    }
    function handlePointerLeave() {
        projectBoxTitle.set("Skill Capsules");
        projectBoxContent.set(
            "Hover over a capsule to see the required bits that it needs to work."
        );
    }
</script>

<figure
    aria-label="Capsule"
    class="capsule"
    on:pointerenter={handlePointerEnter}
    on:pointerleave={handlePointerLeave}
>
    <div
        class="capsuleImage"
        style={`--pos-x: ${variant === "default" ? 0 : variant === "correct" ? "-100%" : "-200%"};`}
    >
        <div class="bitsContainer">
            {#each addedBits as bit, i}
                <KnowledgeBit
                    variant={bit}
                    animate={true}
                    face={variant === "default" || variant === "correct"
                        ? "default"
                        : "sad"}
                    size={bitsSize}
                    opacity={0.85}
                    triggerModal={false}
                    hoverAnimate={false}
                    cursor={"default"}
                />
            {/each}
        </div>
    </div>
    <div class="manageBtnContainer">
        <button class="manageBtn"> Manage </button>
    </div>
</figure>

<style>
    .capsule {
        width: 186px;
        height: auto;
    }
    .capsuleImage {
        position: relative;
        width: 186px;
        height: 281px;
        background-image: url("/images/capsules-sprite.webp");
        background-position-x: var(--pos-x);
    }
    .bitsContainer {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -60%);
    }
    .manageBtnContainer {
        text-align: center;
    }
    .manageBtn {
        color: white;
        background-color: #225fd8;
        padding: 8px 15px;
        border-radius: 5px;
        border: 2px solid #0c388e;
        font-family: var(--font-boogaloo);
        font-weight: 400;
        font-size: 20px;
        cursor: pointer;
    }
    .manageBtn:hover {
        background-color: #0c388e;
    }
</style>
