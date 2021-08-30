<template>
    <div class="bin">
        <span class="title">L' eseguibile</span>
        <div class="body">
            <div class="spec">
                <img src="@/assets/images/slide3/package.svg" alt="golang package">
                <ul>
                    <li>.exe</li>
                </ul>
            </div>
            <div class="spec">
                <img src="@/assets/images/slide3/multi_package.svg" alt="other language package">
                <ul>
                    <li>.exe</li>
                    <li>Librerie e dipendenze</li>
                </ul>
            </div>
        </div>
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
}

.body{
    display: flex;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;

    img{
        width: 150px;
    }

    ul{
        font-size: 1.3rem;
        list-style: none;

        li{
            margin-bottom: 1rem;
        }
    }
}

.title{
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 3px;
}
</style>