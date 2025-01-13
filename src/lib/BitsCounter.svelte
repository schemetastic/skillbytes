<script>
    import { bitsCount } from "../stores";
</script>

<div class="bitsCounter">
    <div class="container">
        <img
            src="/images/knowledge-bits-counter-icon.webp"
            alt="knowledge bits icon"
        />
        <span>x{$bitsCount}</span>
    </div>
</div>

<style>
    .bitsCounter {
        position: absolute;
        bottom: 30px;
        left: 50px;
        width: 155px;
        height: 135px;
    }
    span {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #252525;
        font-size: 32px;
        font-family: var(--font-boogaloo);
    }
    .container {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
