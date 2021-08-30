<template>
    <div class="bin">
        <span class="title">Libreria standard di go</span>
        <div class="body">
            <div class="spec">
                <img src="@/assets/images/slide3/book-shelf.svg" alt="book shelf">
            </div>
        </div>
        <span class="desc">
            Go viene fornito con una potente libreria standard, distribuita come pacchetti.
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
        width: 150px;
    }
}

.title{
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 3px;
}
</style>