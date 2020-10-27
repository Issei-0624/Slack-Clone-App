<template>
  <div class="chat-container">
    <!--<div class="thumbnail-container">-->
    <!--  <img :src="message.user.thumbnail" />-->
    <!--</div>-->
    <div class="message-container">
      <!--<div class="user-name">{{ displayname }}</div>-->
      <div class="message">{{ message.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['message'],
  computed: {
    displayname() {
      return '@' + this.message.user.name
    },
  },
}
</script>
<style scoped>
.chat-container {
  display: flex;
  padding: 8px;
}
.thumbnail-container {
  margin-right: 16px;
}
.thumbnail-container img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.user-name {
  font-weight: bold;
}
</style>
