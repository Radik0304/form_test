<template>
  <div class="pesonal-data">
    <h2>Личные данные</h2>
    <form class="form">
      <div>
        <input type="text" placeholder="Фамилия">
        <input type="text" placeholder="Имя">
      </div>
      <div>
        <input type="text" placeholder="Отчество">
        <input type="date" placeholder="Дата рождения">
      </div>
      <div>
        <input type="text" placeholder="Страна места рождения">
        <input type="mail" placeholder="E-mail">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-around;
}
.pesonal-data {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.form div {
  display: flex;
  /* gap: 30px; */
  justify-content: space-around;
}
/* input {
  width: 150px;
  height: 40px;
} */
</style>