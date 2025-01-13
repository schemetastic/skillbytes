<script>
    import {
        selectedField,
        concepts,
        collectionVisible,
        currentScreen,
        dialogVisible,
        dialogTitle,
        dialogContent,
        levelOneCapsule,
        levelTwoCapsule1,
        levelTwoCapsule2,
        levelThreeCapsule1,
        levelThreeCapsule2,
        levelThreeCapsule3,
        levelThreeCapsule4,
    } from "../stores";
    let selectedOption = null;
    let canSelect = true;
    let isLoading = false;
    let hasError = false;
    let loadingText = "Loading...";

    async function selectedOptionHandler(option) {
        if (!canSelect) return;
        canSelect = false;
        isLoading = true;
        selectedField.set(option);
        const data = await fetch(`get-data/?field=${option}`)
            .then((res) => res.json())
            .catch((err) => {
                hasError = true;
                loadingText = "Error, try again later";
            });
        if (hasError) return;
        console.log(data.data);
        const conceptsObj = structuredClone(parseConcepts(data.data));
        if (conceptsObj.length < 16) {
            canSelect = true;
            loadingText = "Error, please try again";
            return;
        }
        concepts.set(conceptsObj);
        levelOneCapsule.set(getRandomRange(0, 2));

        let levelTwoNums = chunkArray(getRandomRange(0, 5), 2);

        levelTwoCapsule1.set(levelTwoNums[0]);
        levelTwoCapsule2.set(levelTwoNums[1]);

        let levelThreeNums = chunkArray(getRandomRange(0, 15), 4);
        levelThreeCapsule1.set(levelThreeNums[0]);
        levelThreeCapsule2.set(levelThreeNums[1]);
        levelThreeCapsule3.set(levelThreeNums[2]);
        levelThreeCapsule4.set(levelThreeNums[3]);

        collectionVisible.set(true);
        currentScreen.set("menu");
    }

    function parseConcepts(input) {
        const regex = /\{\{\$\s*\[\[([^\]]+)\]\];\[\[([^\]]+)\]\]\/\}\}/g;
        let match;
        const result = [];

        while ((match = regex.exec(input)) !== null) {
            result.push({
                concept: match[1].trim(),
                info: match[2].trim(),
            });
        }

        return result;
    }

    function getRandomRange(min, max) {
        const range = [];
        for (let i = min; i <= max; i++) {
            range.push(i);
        }
        for (let i = range.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [range[i], range[j]] = [range[j], range[i]];
        }
        return range;
    }

    function chunkArray(array, chunkCount) {
        const chunks = [];
        const chunkSize = Math.ceil(array.length / chunkCount);
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }
    function handleDisclaimer() {
        dialogVisible.set(true);
        dialogTitle.set("Disclaimer");
        dialogContent.set(
            "Some content is provided with the help of AI, and sometimes AI can make mistakes. This app is provided AS-IS without warranties of any kind and you accept that you will not make liable the author for any damage to the maximum extent allowed by applicable law."
        );
    }
</script>

<div
    class={`screen welcomeScreen ${$currentScreen === "intro" ? "visibleScreen" : ""}`}
>
    <img src="/images/title.webp" alt="SkillBytes" class="logo" />
    <h2>Select a skill you would like to start learning today!</h2>
    <div class="buttonsContainer">
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("UI/UX");
            }}>UI/UX</button
        >
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("Front-End Development");
            }}>Front-End</button
        >
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("Back-End Development");
            }}>Back-End</button
        >
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("Marketing");
            }}>Marketing</button
        >
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("Sales");
            }}>Sales</button
        >
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("Copywrite");
            }}>Copywrite</button
        >
        <button
            class="optionBtn"
            on:click={() => {
                selectedOptionHandler("Entrepreneurship");
            }}>Entrepreneurship</button
        >
    </div>
    {#if isLoading}
        <h3 class="loadingBanner">{loadingText}</h3>
    {/if}
    <button class="disclaimer" on:click={handleDisclaimer}>Disclaimer</button>
</div>

<style>
    .welcomeScreen {
        background-color: white;
        background-image: url(/images/intro-bg.webp);
    }
    .logo {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
    }
    h2 {
        position: absolute;
        top: 250px;
        width: 100%;
        font-weight: 400;
        text-align: center;
        font-family: var(--font-dekko);
        font-size: 36px;
        color: #252525;
    }
    .buttonsContainer {
        position: absolute;
        top: 330px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    .optionBtn {
        background-color: #252525;
        padding: 10px 15px;
        color: white;
        font-size: 28px;
        border-radius: 5px;
        border: 2px solid #252525;
        cursor: pointer;
        font-family: var(--font-boogaloo);
    }
    .optionBtn:hover {
        background-color: white;
        color: #252525;
    }
    .loadingBanner {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px 30px;
        color: white;
        font-size: 28px;
        border-radius: 5px;
        font-family: var(--font-boogaloo);
    }
    .disclaimer {
        position: absolute;
        bottom: 20px;
        right: 20px;
        background-color: transparent;
        padding: 10px 15px;
        color: #252525;
        font-size: 20px;
        border: none;
        cursor: pointer;
        font-family: var(--font-dekko);
    }
    .disclaimer:hover {
        text-decoration: underline;
    }
</style>
