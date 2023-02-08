<template>
  <base-modal ref="modal">
    <header>
      <h2 class="modal-title">{{ title }}</h2>
    </header>
    <main class="modal-body">
      <p>{{ message }}</p>
    </main>
    <footer class="modal-footer">
      <div class="buttons">
        <button class="close-button" @click="handleClose">
          {{ closeButton }}
        </button>
        <button class="save-button" @click="handleSave">
          {{ saveButton }}
        </button>
      </div>
    </footer>
  </base-modal>
</template>

<script>
import BaseModal from "./BaseModal.vue";

export default {
  name: "ConfirmDialog",
  components: {
    BaseModal,
  },
  data: () => ({
    closeButton: null,
    message: null,
    rejectPromise: null,
    resolvePromise: null,
    saveButton: null,
    title: null,
  }),
  methods: {
    handleShow(options = {}) {
      this.closeButton = options.closeButton;
      this.message = options.message;
      this.saveButton = options.saveButton;
      this.title = options.title;
      this.$refs.modal.handleShow();
      return new Promise((resolve, reject) => {
        this.rejectPromise = reject;
        this.resolvePromise = resolve;
      });
    },
    handleSave() {
      this.$refs.modal.handleClose();
      this.resolvePromise(true);
    },
    handleClose() {
      this.$refs.modal.handleClose();
      this.resolvePromise(false);
    },
  },
};
</script>

<style scoped>
header {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  row-gap: 0.5rem;
}

.modal-title {
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  width: 100%;
  color: var(--dark-accent);
}
.close-button-times {
  background-color: transparent;
  border: none;
  color: var(--dark-accent);
  cursor: pointer;
  font-size: 2rem;
  padding: 0;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 2rem;
}
.modal-body {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
}
.modal-body p {
  color: hsl(0, 0%, 18%);
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
}
.modal-footer {
  align-items: center;
  display: flex;
  justify-content: center;
}
.buttons {
  column-gap: 3rem;
  display: flex;
}
.save-button {
  border-radius: 3rem;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  outline: none;
  cursor: pointer;
  text-align: center;
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  font-weight: 700;
  color: rgb(216, 55, 55);
  background-color: var(--main-light);
  border: 4px solid var(--main-light);
  box-shadow: -5px -5px 15px var(--highlight), 5px 5px 5px var(--shadow);
  transition: 0.3s ease-in-out;
  animation-name: rise-button;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
}
.close-button {
  border-radius: 3rem;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  outline: none;
  cursor: pointer;
  text-align: center;
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  font-weight: 700;
  color: var(--dark-accent);
  background-color: var(--main-light);
  border: 4px solid var(--main-light);
  box-shadow: -5px -5px 15px var(--highlight), 5px 5px 5px var(--shadow);
  transition: 0.3s ease-in-out;
  animation-name: rise-button;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
}

.close-button:hover,
.save-button:hover {
  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6),
    1px 1px 5px rgba(0, 0, 0, 0.3), inset -1px -1px 5px rgba(255, 255, 255, 0.6),
    inset 1px 1px 4px rgba(0, 0, 0, 0.3);
  color: var(--dark-accent-hover);
}

.save-button:hover {
  color: rgb(216, 55, 55);
}
</style>
