<template>
    <div class="check_container">
       Проверка данных....
    </div>
</template>
  
  <script>
  export default({
      name: "CheckDates",
      mounted(){
        setTimeout(()=>{
            this.$router.push('/approve-dates')
        },5000)
      }
  });
  </script>
  
  
  <style scoped>
  </style>