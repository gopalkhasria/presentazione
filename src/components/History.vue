<template>
    <div class="wrapper">
        <div class="head">
            UN PO DI STORIA
            <span @click="increment">Chi lo usa ?</span>
        </div>
        <div class="foto-wrap">
            <img src="../assets/images/author.png" alt="Author">
            <div class="name">
                <span>Robert Griesemer</span>
                <span>Rob Pike</span>
                <span>Ken Thompson</span>
            </div>
        </div>
        <div class="line-1"></div>

        <div class="dates">
            <span>November 10, 2009</span>
            <span>Marzo 28, 2012: Prima release di go</span>
            <span>Agosto 16, 2021:  Ultima release di go (versione 1.7) </span>
        </div>
        <div class="button" @click="close">Chiudi</div>
    </div>
</template>

<script>
export default {
    name:"History",
    props: [ "increment", "close" ],
}
</script>

<style lang="scss" scoped>
.wrapper{
    border-radius: .3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .head{
        font-size: 1rem;
        font-weight: bolder;

        span{
            position: relative;
            float: right;
            cursor: pointer;
        }
    }
}

.foto-wrap{
    margin-top: 1rem;

    img{
        border-radius: 10px;
    }

    .name{
        display: flex;
        justify-content: space-between;
        margin: 0.3rem 1rem;
    }
}

.line-1 {
  height: 2px;
  background: black;
  margin-top: 1rem;
}

.dates{
    display: flex;
    flex-direction: column;

    span{
        margin: .6rem;
        padding: 1rem;
        border: 1px solid black;
        border-radius: .5rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
}

.button {
  background-color: #000000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

</style>