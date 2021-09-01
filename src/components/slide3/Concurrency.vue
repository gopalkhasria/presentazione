<template>
    <div class="bin">
        <span class="title">Programazione parallela</span>
        <div class="body">
            <div class="spec">
                <img src="@/assets/images/slide3/2.png" alt="Concurrent programming">
            </div>
        </div>
        <span class="desc">
            Grazie a go routines e channels, la programmazione in parallela è molto semplice da fare.
        </span>
    </div>
</template>

<style lang="scss" scoped>

.bin{
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    margin: 1rem 1rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    span{
        margin-bottom: 4rem;
    }
    .desc{
        font-size: 2rem;
        margin-top: 2rem;
        text-align: center;
    }
}

.body{
    display: flex;
    align-items: baseline;
    width: 100%;
    justify-content: center;

    img{
        width: 300px;
    }
}

.title{
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 3px;
}
</style>