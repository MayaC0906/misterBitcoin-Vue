<template>
  <div v-if="contact" class="contact-edit-container">
    <section class="contact-edit">
      <section class="contact-actions">
        <RouterLink to="/contact">
          <img src="@/assets/images/back.png" alt="go back" />
        </RouterLink>
        <button v-if="contact._id" @click="onDeleteContact" type="button">
          <img src="@/assets/images/delete.png" alt="delete image" />
        </button>
      </section>
      <img
        class="contact-image"
        src="@/assets/images/contact.png"
        alt="contact image"
      />
      <form @submit.prevent="onSaveContact">
        <div>
          <h2>{{ contact._id ? "Edit contact" : "Add contact" }}</h2>
          <div class="form-input">
            <label for="name">Name</label>
            <input
              v-model="contact.name"
              formControlName="name"
              placeholder="Contact name"
              id="name"
            />
          </div>
          <div class="form-input">
            <label for="phone">Phone</label>
            <input
              v-model="contact.phone"
              formControlName="phone"
              placeholder="Phone number"
              id="phone"
            />
          </div>
          <div class="form-input">
            <label for="email">Email</label>
            <input
              v-model="contact.email"
              formControlName="email"
              placeholder="Contact email"
              id="email"
            />
          </div>
        </div>
        <div align="end">
          <button :disabled="isDisabaled" class="save-btn">Save</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { contactService } from "../services/contactService";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params.contactId;
    if (contactId) {
      console.log('contacts',this.contacts);
      const contact = this.contacts.find(
        (contact) => contact._id === contactId
      );
      this.contact = JSON.parse(JSON.stringify(contact));
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    isDisabaled() {
      return !(this.contact.name && this.contact.email && this.contact.phone);
    },
  },
  methods: {
    async onDeleteContact() {
      try {
        await this.$store.dispatch({
          type: "removeContact",
          contactId: this.contact._id,
        });
        this.$router.push("/contact");
      } catch (err) {
        console.log("Cannot delete contact");
      }
    },

    async onSaveContact() {
      try {
        await this.$store.dispatch({
          type: "saveContact",
          contact: JSON.parse(JSON.stringify(this.contact)),
        });
      } catch (err) {
        console.log("Cannot save contact");
      }
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss">
.contact-edit-container {
  display: flex;
  justify-content: center;
}
.contact-edit {
  min-width: 350px;
  width: max-content;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-family: monospace;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .contact-actions {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      place-items: center;
      margin-inline-start: 10px;
      &:hover {
        scale: 1.1;
      }
    }

    button {
      padding: 0;
      cursor: pointer;
      background: none;
      border: none;
      &:hover {
        scale: 1.1;
      }
    }
  }

  form {
    h2 {
      margin-block-end: 30px;
      font-weight: 700;
      font-size: 24px;
    }

    .form-input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-block-end: 10px;

      label {
        font-weight: 600;
        font-size: 18px;
      }

      input {
        padding: 5px;
        font-size: 16px;
        height: 40px;
        width: 250px;
        border: 1px solid var(--clr8);
        color: var(--clr8);
        border-radius: 3px;
      }
    }
  }

  .save-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: var(--clr5);
    border-radius: 3px;
    width: 70px;
    height: 30px;
    border: 1px solid var(--clr8);
    font-weight: 600;
    float: right;
    cursor: pointer;
    &:hover {
      background-color: var(--clr9);
      color: white;
    }
    &:disabled {
      color: var(--clr8);
      background-color: var(--clr5);
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .contact-image {
    width: 99px;
    height: 100px;
    margin: 10px 0 20px 20px;
  }
}
</style>