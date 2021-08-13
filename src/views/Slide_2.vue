<template>
    <div class="slide">
        <div class="title">
            <span>Linguaggio  di programmazione</span> 
            <span>Open Source</span>
        </div>
        <div class="property .flip-2-hor-top-1">
            <div>
                <img src="../assets/images/simple.svg" alt="simple">
                <span>SEMPLICE</span>
            </div>
            <div>
                <img src="../assets/images/reliable.svg" alt="simple">
                <span>AFFIDABILI</span>
            </div>
            <div>
                <img src="../assets/images/efficent.svg" alt="simple">
                <span>EFFICENTE</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Slide2",
}
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 2.5rem;
}

.property{
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 60%;
    font-size: 2rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            max-width: 180px;
            min-height: 180px;
        }
    }
}
</style>