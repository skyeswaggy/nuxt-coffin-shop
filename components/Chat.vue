<script setup>
import { ref } from "vue";

const showChat = ref(false);
</script>
<template>
  <div class="wrapper">
    <img
      @click="
        () => {
          showChat = !showChat;
        }
      "
      v-show="!showChat"
      class="chat-btn"
      src="/images/messenger.png"
    />
    <div v-show="showChat" class="chat">
      <div class="top">
        <div class="panel">
          <span
            @click="
              () => {
                showChat = !showChat;
              }
            "
            class="x-btn"
            >X</span
          >
        </div>
        <div class="message">Witaj! Jak możemy Ci pomóc?</div>
      </div>
      <div class="bottom">
        <input type="text" />
        <img class="send-btn" src="images/send-message.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  bottom: 60px;
  right: 60px;

  .chat-btn {
    height: 50px;
    border: none;
    cursor: pointer;
  }

  .chat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    width: 200px;
    padding: 5px;
    background-color: #b8b8b8;
    border-radius: 10px;

    .top {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      .panel {
        padding: 5px 5px 0 0;
        box-shadow: none;
        .x-btn {
          background: none;
          color: #000;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .message {
        background-color: #ffffff;
        color: #000000;
        padding: 0 5px;
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      input {
        border: none;
        border-radius: 2px;
        height: 25px;
      }
      .send-btn {
        width: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
