<template>
    <div class="slide">
        <div class="title">
            <span>Storia dei linguaggi di programmazione</span>
        </div>
        <div class="property .flip-2-hor-top-1">
            <div>
                <img src="../assets/images/linguaggi/Fortran_logo.svg" alt="simple">
                <span style="margin-top: 1rem;">Fortran (1957)</span>
            </div>
            <div>
                <img src="../assets/images/linguaggi/c.svg" alt="simple">
                <span style="margin-top: 1rem;">C (1972)</span>
            </div>
            <div>
                <img src="../assets/images/linguaggi/python.svg" alt="affidabile">
                <span style="margin-top: 1rem;">Python(1991)</span>
            </div>
            <div>
                <img src="../assets/images/linguaggi/java.svg" alt="efficent">
                <span style="margin-top: 1rem;">JAVA (1995)</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Storia",
    data(){
        return{
            history: false,
            state: 1,
        }
    },
    methods:{
        increment(){
            this.state++;
        },
        decrement(){
            this.state--;
        },
        close(){
            this.history = this.history = false;
        }
    }
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