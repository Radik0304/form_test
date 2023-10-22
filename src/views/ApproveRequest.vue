<template>
    <div class="approve_container">
        <div class="text">
            <p>Договор подписан.</p>
            <p>Ожидайте поступления денежных средств</p>
        </div>
        <button @click="close">ОK</button>
    </div>
</template>
  
  <script>
  export default({
      name: "ApproveRequest",
      methods:{
        close(){
            this.$router.replace('/')
        }
      }
  });
  </script>
  
  
  <style scoped>
  </style>