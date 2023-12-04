<template>
  <contactFilter @filter="setFilterBy" />
  <ContactList v-if="contacts" :contacts="filterdContacts" />
  <img v-else src="../assets/loader.svg" alt="" class="loader" />
</template>

<script>
import ContactFilter from "../cmps/ContactFilter.vue";
import ContactList from "../cmps/ContactList.vue";

export default {
  data() {
    return {
      filterBy: { contactName: "" },
    };
  },
  async created() {
    try {
      this.$store.dispatch({ type: "loadContacts" });
    } catch (err) {
      console.log("Cannot get contacts", err);
    }
  },
  methods: {
    setFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    filterdContacts() {
      const regex = new RegExp(this.filterBy.contactName, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style lang="scss">
img.loader {
    display: block;
    width: 200px;
    margin: 30px auto;
}
</style>