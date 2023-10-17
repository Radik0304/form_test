<template>
  <div class="pesonal-data">
    <h2>Личные данные</h2>
    <form class="form">
        <input type="text" placeholder="Фамилия*" v-model="secondName">
        <input type="text" placeholder="Имя*" v-model="name">
        <input type="text" placeholder="Отчество*" v-model="thirdName">
        <input type="date" placeholder="Дата рождения*" v-model="dateCreate">
        <input type="text" placeholder="Страна места рождения*" v-model="country">
        <input type="mail" placeholder="E-mail" v-model="mail">

        <p v-if="validationData" class="error-text">{{ this.error_text }}</p>

        <div>
          <input type="checkbox" class="checkbox" id="approve" v-model="checked">
          <label for="approve">Даю согласие на <a href="#">обработку личных данных</a> и подписание документов в электронном виде</label>
        </div>

        <button type="submit" @click="pushData">Продолжить</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'PersonalData',

  data(){
    return {
      name: '', //имя 
      secondName: '', //фамилмия
      thirdName: '', //отчество
      dateCreate: null, //дата рождения
      country: '', //страна 
      mail: null, //email
      isDataPushed: false, //флаг, что данные отправились
      checked: false, // чекбокс прожат
      error_text: '' //текст для ошибки при заполнении
      
    }
  },

  methods: {
    /** Получаем гетеры из Vuex */
    ...mapGetters,
    
    /** Отправить данные */
      async pushData(e){
        e.preventDefault()
        const data = {
          name: this.name,
          secondName: this.secondName,
          thirdName: this.thirdName,
          dateCreate: this.dateCreate,
          country: this.country,
          mail: this.mail,
        };
        
        if(this.validationData && this.checked){
          const response = await fetch ('http://localhost:3001/data', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer 12345",
            },
          })
          if(response.ok){
            this.isDataPushed = true;
            this.$router.push('/identification')
            console.log(`данные отправлены ${data}`)
          } else {
            console.log('error')
          }
        } else {
          this.error_text = 'Заполнены не все обязательные поля или не дано согласие на обработку данных'
        }
    },

    /** Валидация вводимых данных */
    validationData(){
      return this.name && this.secondName && this.thirdName && this.dateCreate && this.country && this.checked
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.pesonal-data {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
input {
  width: 150px;
  height: 40px;
}
.checkbox {
  width: auto;
  height: auto;
}
.error-text {
  color: brown;
}
</style>