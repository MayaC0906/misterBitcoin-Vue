<template>
  <RouterLink to="/contact/edit">
    <button class="add-contact-btn">
      <img src="@/assets/images/add-contact.png" alt="add image" />
      <span>Add contact</span>
    </button>
  </RouterLink>
  <section class="contact-list">
    <ContactPreview
      v-for="contact in contacts"
      :key="contact._id"
      :contact="contact"
    />
  </section>
</template>

<script>
import ContactPreview from "../cmps/ContactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.add-contact-btn {
        padding: 0;
        border: none;
        margin: 20px auto;
        display: flex;
        background-color: var(--clr9);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        width: 300px;
        height: 70px;
        border-radius: 50px;
        align-items: center;
        font-family: monospace;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
        color: white;
        span {
            margin-inline-end: 30px;
        }
        img {
            height: 70px;
            margin-inline-end: 10px;

        }
        &:hover {
            scale: 1.1;
            background-color: var(--clr6);
            color: var(--clr8);
        }
    }
</style>