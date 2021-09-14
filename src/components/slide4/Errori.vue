<template>
    <div class="bin">
        <ul>
            <li><span class="title">Moderno, ma non innovativo</span></li>
            <li><span class="title">Garbage collector</span></li>
            <li><span class="title">Alcuni elementi vanno contro le logiche di costruzione dei linguaggi che puntano alla sicurezza </span></li>
        </ul>
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
    ul{
        margin: 2rem;
        list-style: none;
        text-align: center;
        li{
            margin-bottom: 1rem;
        }
    }
}

.body{
    display: flex;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;

    img{
        width: 220px;
    }
}

.title{
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 3px;
}
</style>