<template>
<section v-if="user&&rate" class="home-page">
<h1>Hello {{user.name}}!</h1>
<section class="status">
    <img src="@/assets/images/coins.png" alt="coins-image">
    <h2> <span>Balance:</span>  {{user.balance}}</h2>
</section>
<section class="status">
    <img src="@/assets/images/bitcoin.png" alt="coin-image">
    <h2> <span>BTC:</span>  {{rate}}</h2>
</section>
</section>
</template>

<script>
import {bitcoinService} from '../services/bitcoinService'
import {userService} from '../services/userService'
export default {
data(){
    return {
        rate: null,
        user: null
    }
},
async created() {
this.rate = await bitcoinService.getBitcoinRate()
this.user = userService.getUser()
}
}
</script>

<style lang="scss">
.home-page {
    min-width: 350px;
    min-height: 350px;
    width: max-content;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    font-family: monospace;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    
    h1 {
        color: var(--clr8);
        font-size: 30px;
        font-weight: 700;
    }
    
    .status {
        color: var(--clr9);
        display: flex;
        align-items: center;

        span {
            font-weight: 600;
        }

        img {
            margin-inline-end: 20px;
        }
    }
    hr {
        border: none;
        height: 1px;
        background-color: var(--clr6);
        margin: 20px 0;

    }
    .moves {
        h2 {
            color: var(--clr8);
            font-size: 25px;
            font-weight: 700;
            margin-block-end: 15px;
            text-decoration: underline;
        }
    }
}
</style>