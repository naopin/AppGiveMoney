<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay">
      <div class="modal-window">
        <div class="modal-content">
          <slot/>
        </div>
       
        <footer class="modal-footer">
          <slot name="footer">
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style >
.modal.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);


}
.modal-window {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.modal-content {
  padding: 10px 20px;
}
.modal-footer {
  background: #ccc;
  padding: 10px;
  text-align: right;
}


.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-active .modal-window, .modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.1s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window, .modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}
/* button {
    background: #eb516b;
    border: none;
    border-radius: 2px;
    padding: 4px 16px;
    color: #fff;
    transition: background-color .25s;
    cursor: pointer;
} */
</style>