
<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.png" />
    </RouterLink>
    <nav>
      <RouterLink to="/">
        <img alt="Home page" src="@/assets/images/home.png"
      /></RouterLink>
      <RouterLink to="/contact">
        <img alt="Contacts" src="@/assets/images/users.png"
      /></RouterLink>
      <RouterLink to="/statistics">
        <img alt="Statistics" src="@/assets/images/increase.png"
      /></RouterLink>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang='scss'>
header {
  background-color: var(--clr1);
  height: 80px;
  display: flex;
  align-items: center;
  color: var(--clr3);
  margin-bottom: 30px;
  font-size: 1.5em;
  font-family: monospace;
  justify-content: space-between;

  .logo {
    margin-left: 20px;
    height: 65px;
    width: auto;
    cursor: pointer;
  }

  nav {
    margin-inline-end: 20px;

    a {
      margin: 0 10px 0 10px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;

        &:hover {
          scale: 1.1;
        }
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>