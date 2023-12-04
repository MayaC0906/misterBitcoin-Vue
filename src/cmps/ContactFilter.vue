<template>
  <section class="contact-filter">
    <input
      v-model="filterBy.contactName"
      @input="onSetFilterBy"
      type="text"
      placeholder="Search contact"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { contactName: "" },
    };
  },
  methods: {
    onSetFilterBy() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss">
.contact-filter{
    place-self: center;
    width: max-content;
    margin: auto;
    input {
        font-family: monospace;
        font-size: 20px;
        border: 1px solid var(--clr7);
        color: var(--clr7);
        padding:15px;
        margin-block-end: 20px;
        height: 35px;
        width: 300px;
        border-radius: 8px;
        &::placeholder{
            font-family: monospace;
            font-size: 20px;
            color: var(--clr7);
        }
        &:active {
            border: 2px solid var(--clr7);
        }
        &:focus-visible{
            outline: none;
            border: 2px solid var(--clr7);
        }
    }
}

</style>