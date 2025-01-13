<script>
    import { onMount } from "svelte";
    import WelcomeScreen from "$lib/WelcomeScreen.svelte";
    import MenuScreen from "$lib/MenuScreen.svelte";
    import DialogBox from "$lib/DialogBox.svelte";
    import OutroScreen from "$lib/OutroScreen.svelte";
    import BitsCollection from "$lib/BitsCollection.svelte";
</script>

<head>
    <title>SkillBytes</title>
</head>

<main>
    <div id="game">
        <WelcomeScreen />
        <MenuScreen />
        <DialogBox />
        <OutroScreen />
        <BitsCollection />
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #121212;
    }

    #game {
        width: 1024px;
        height: 720px;
        background-color: #ededed;
        position: relative;
        top: 0;
        left: 0;
    }
</style>
