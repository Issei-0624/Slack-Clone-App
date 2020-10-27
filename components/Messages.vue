<template>
  <div class="chats-container">
    <message
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    />
  </div>
</template>

<script>
import Message from '~/components/Message'
export default {
  components: {
    Message,
  },
  // eslint-disable-next-line
  props: ['messages'],
}
</script>

<style>
.chats-container {
  padding: 16px;
}
</style>
