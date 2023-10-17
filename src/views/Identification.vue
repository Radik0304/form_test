<template>
  <div class="identification">
    <header>
      <h3>Подтверждение удаленной идентификации</h3>
      <span>Мы отправили SMS с кодом на ваш номер телефона</span>
    </header>
    <div class="input">
      <label for="code">Код</label>
      <input type="number" v-model="enteredCode" />
    </div>

    <div class="check-code-container">
      <button :disabled="currentTime !== 0" @submit="checkCode">Проверить код</button>
      <div v-if="currentTime">
        <span>Отправить код повторно через</span>
        <div>{{ currentTime }}</div>
      </div>
      <p>Неверный код</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdentificationConfirmation",
  data() {
    return {
      currentTime: 5, //время начала отсчета
      timer: null, // таймер
      enteredCode: null, // введенный код
      errorCode: false, // ошибка ввода кода
      errorCodeText: ''// текст ошибки ввода кода
    };
  },
  mounted() {
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    /** Запускаем таймер */
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    /** Останавливаем таймер */
    stopTimer() {
      clearTimeout(this.timer);
    },
    /** Отправить код */
    async checkCode(e){
        e.preventDefault()
          const response = await fetch ('http://localhost:3001/codes', {
            method: "POST",
            body: JSON.stringify(this.enteredCode),
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer 12345",
            },
          })
          if(response.ok){
            this.$router.push('/identification')
          } else {
            console.log('Неверный код')
          }
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-top: 3rem;
  margin-left: 1rem;
}
.check-code-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.check-code-container button {
  width: 30%;
}
.check-code-container div {
  margin-top: 1rem;
  color: grey;
}
p {
  color: red;
}
</style>
