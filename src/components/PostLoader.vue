<template>
  <div class="post-loader">
    <div class="post-loader-header">
      <span class="chip shimmer" />
      <span class="chip shimmer" />
    </div>
    <div class="post-loader-content">
      <div class="img shimmer" />
    </div>
    <div class="post-loader-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'post-loader'
}
</script>

<style lang="scss" scoped>
.post-loader {
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 4px;
  height: 225px;

  .post-loader-header {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;

    .chip {
      width: 75px;
      height: 23px;
    }
    
  }

  .post-loader-content {
    height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 15px;

    .img {
      width: 250px;
      height: 120px;
      margin-right: 10px;
    }

    .content {
      flex: 1;
      height: 140px;
    }
  }

  .post-loader-footer {
    height: 25px;
    border-bottom: 1px solid #eee;
  }
}

.shimmer {
	background: linear-gradient(270deg, #e2e3e3, #dcdddd);
  background-size: 400% 400%;
	animation: shimmer 1s ease infinite;
}

@keyframes shimmer { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

@media only screen and (max-width: 640px) {
  .post-loader {
    .post-loader-header {
      justify-content: center;
    }

    .post-loader-content {
      flex-direction: column;
    }
  }
}
</style>
