<template>
  <section v-if="contact" class="contact-details">
    <section class="contact-actions">
      <RouterLink to="/contact">
        <button><img src="@/assets/images/back.png" alt="go back" /></button>
      </RouterLink>
      <RouterLink :to="'/contact/edit/' + contact._id">
        <button>
          <img src="@/assets/images/edit.png" alt="edit contact" />
        </button>
      </RouterLink>
    </section>

    <hr />

    <img src="@/assets/images/contact.png" alt="contact-img" />
    <h2>Name: {{ contact.name }}</h2>
    <h2>Phone: {{ contact.phone }}</h2>
    <h2>Email: {{ contact.email }}</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
        const contactId = this.$route.params.contactId;
        this.contact = this.contacts.find((contact) => contact._id === contactId);
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
};
</script>

<style lang="scss">

.contact-details {
    margin: auto;
    min-width: 350px;
    max-width: 370px;
    height: max-content;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: monospace;

    h2 {
        font-size: 16px;
    }

    .contact-actions {
        height: 40px;
        display: flex;
        justify-content: space-between;
        margin-block-end: 10px;

        button {
            border: none;
            background: none;
            height: fit-content;
            cursor: pointer;

            img {
                height: 40px;
                width: 40px;

                &:hover {
                    scale: 1.1;
                }
            }
        }

    }

    hr {
        border: none;
        height: 1px;
        background-color: var(--clr6);
        margin: 20px 0;

    }

    img {
        width: 150px;
    }

}
</style>