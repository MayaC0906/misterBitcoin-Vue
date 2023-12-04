<template>
<section class="statistics">
  <h1>Market price</h1>
  <div class="market-price-container">
  <MarketPrice
    v-if="formattedData && formattedLabels"
    :data="formattedData"
    :labels="formattedLabels"
  />
  </div>
</section>
</template>

<script>
import { bitcoinService } from "../services/bitcoinService.js";
import MarketPrice from "../cmps/MarketPrice.vue";

export default {
  data() {
    return {
      info: null,
      formattedData: null,
      formattedLabels: null,
    };
  },
  async created() {
    try {
      this.info = await bitcoinService.getMarketPrice();
      this.formattedLabels = JSON.parse(
        JSON.stringify(
          this.info.values.map((item) =>
            new Date(item.x * 1000).toLocaleDateString("he")
          )
        )
      );
      this.formattedData = JSON.parse(
        JSON.stringify(this.info.values.map((item) => item.y))
      );
    } catch (err) {
      console.log("err:", err);
    }
  },
  components: {
    MarketPrice,
  },
};
</script>

<style lang="scss">
.statistics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 35px;
        font-family: monospace;
        color: var(--clr8);
        font-weight: 700;
    }
    .market-price-container {
        width: 70vw;
        max-height: 70vh;
    }
}
</style>
