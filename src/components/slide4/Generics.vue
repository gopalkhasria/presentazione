<template>
    <div class="bin">
        <span class="title">No generics (per ora)</span>
        <div class="body">
            <div class="spec">
                <img src="@/assets/images/slide4/generics4.png" alt="generics 1">
            </div>
        </div>
        <span class="desc">
            <div class="spec">
                <img src="@/assets/images/slide4/generics7.png" alt="generics 2">
            </div>
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
        margin-bottom: 2rem;
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