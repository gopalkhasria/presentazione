<template>
    <div class="wrapper">
        <div class="head">
            CHI LO USA ?
            <span @click="decrement">Un po di storia</span>
        </div>
        <div class="line">
            <div class="card" @mouseover="hide(1)" @mouseleave="show(1)">
                <div class="details" id="details1">
                    Creatore del linguaggio, lo ha usato per creare un prodotto
                    molto popolare: Docker
                </div>
                <div class="image" id="logo1">
                    <img
                        src="../assets/images/companies/google.svg"
                        alt="Google"
                    />
                </div>
            </div>

            <div class="card" @mouseover="hide(2)" @mouseleave="show(2)">
                <div class="image" id="logo2">
                    <img src="../assets/images/companies/uber.svg" alt="Uber" />
                </div>
                <div class="details" id="details2">
                    Viene usato in tantissimi servizi. Ultimo scritto in go è il
                    Geobase
                </div>
            </div>

            <div class="card" @mouseover="hide(3)" @mouseleave="show(3)">
                <div class="image" id="logo3">
                    <img
                        src="../assets/images/companies/paypal.svg"
                        alt="Paypal"
                    />
                </div>
                <div class="details" id="details3">
                    Lo usa per modernizzare tutta la sua infastruttura e
                    migliorare l'efficenza
                </div>
            </div>
        </div>
        <div class="line">
            <div class="card" @mouseover="hide(4)" @mouseleave="show(4)">
                <div class="image" id="logo4">
                    <img
                        src="../assets/images/companies/twitch.svg"
                        alt="Twitch"
                    />
                </div>
                <div class="details" id="details4">
                    Viene usato per sistemi più trafficati. La sua semplicità,
                    sicurezza, prestazioni lo rendono un ottimo strumento nel
                    fornire video live e chat ai milioni di utenti
                </div>
            </div>

            <div class="card" @mouseover="hide(5)" @mouseleave="show(5)">
                <div class="image" id="logo5">
                    <img
                        src="../assets/images/companies/slack.svg"
                        alt="Slack"
                    />
                </div>
                <div class="details" id="details5">
                    Lo usano per aumentare le prestazioni delle funzionalità e
                    sul garantire la loro capacità di funzionare sotto carico
                </div>
            </div>

            <div class="card" @mouseover="hide(6)" @mouseleave="show(6)">
                <div class="image" id="logo6">
                    <img
                        src="../assets/images/companies/riot.svg"
                        alt="Riot games"
                    />
                </div>
                <div class="details" id="details6">
                    Microservizi scritti
                    in Golang: tutto, dall'avvio e la gestione di un
                    processo del server di gioco all'acquisto di elementi.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Companies",
    props: ["decrement"],
    methods: {
        hide(id) {
            document.getElementById("logo"+ id ).style.display = "none";
            document.getElementById("details"+ id ).style.display = "flex";
        },
        show(id){
            document.getElementById("logo"+ id ).style.display = "block";
            document.getElementById("details"+ id ).style.display = "none";    
        }
    },
};
</script>

<style lang="scss" scoped>

.wrapper {
    border-radius: 0.3rem;
    display: flex;
    padding: 1rem;
    flex-direction: column;

    .head {
        font-size: 1rem;
        font-weight: bolder;
        margin-bottom: 1rem;

        span {
            position: relative;
            float: right;
            cursor: pointer;
        }
    }

    .line {
        display: flex;
        justify-content: space-between;

        .card {
            margin: 1rem 1rem;
            padding: 1rem;
            border: 1px solid black;
            border-radius: 0.5rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            display: flex;

            img {
                height: 150px;
                max-width: 150px;
                animation: fade 1s;
            }

            .details {
                width: 150px;
                display: none;
                font-weight: bold;
                display: none;
                align-items: center;
                text-align: center;
                animation: fade 1s;
            }
        }
    }
}

@keyframes fade{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@keyframes fade-out{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>