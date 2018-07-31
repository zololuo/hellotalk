<template>
	<div class="loading">
    <div class="loadingChild" :class="[num==0?'select':'']"></div>
    <div class="loadingChild" :class="[num==1?'select':'']"></div>
    <div class="loadingChild lastChild" :class="[num==2?'select':'']"></div>
	</div>
</template>

<style scoped>
.loading{
  height: 8px;
  flex-direction: row;
  justify-content: center;
}
.loadingChild{
  width: 4px;
  height: 4px;
  margin-right: 3px;
  border-radius: 2px;
  background-color: #ADB7E7;
}
.select{
  background-color: #405BD3;
  opacity: 1;
}
.lastChild{
   margin-right: 0px; 
}
</style>
<script>
export default {
  name: 'loading',
  data() {
    return {
      num:0
    }
  },
  mounted() {
    setInterval(function() {
      this.num++;
      if (this.num>2) {
        this.num = 0;
      }
    }.bind(this), 500);
  }
}
</script>