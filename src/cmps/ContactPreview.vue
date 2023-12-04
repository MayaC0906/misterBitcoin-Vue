<template>
  <RouterLink :to="'/contact/' + contact._id">
    <article class="contact-preview">
      <img src="@/assets/images/contact.png" alt="contact-image" />
      <h1>{{ contact.name }}</h1>
    </article>
  </RouterLink>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.contact-preview {
  position: relative;
  margin: auto;
  display: flex;
  background-color: var(--clr5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 300px;
  height: 70px;
  border-radius: 50px;
  align-items: center;
  font-family: monospace;
  font-size: 16px;
  cursor: pointer;
  color: var(--clr8);

  &:hover {
    scale: 1.1;
    background-color: var(--clr6);
  }

  img {
    height: 70px;
    margin-inline-end: 10px;
  }
}
</style>