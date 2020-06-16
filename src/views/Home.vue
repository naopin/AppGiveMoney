<template>
  <div>
    <table>
      <tr>
        <td>
          <h2>{{user.displayName}}さんようこそ！</h2>
        </td>
        <td>
          <h2>残高:</h2>
        </td>
        <td>
          <button @click="logout">ログアウト</button>
        </td>
      </tr>
    </table>
    <h1>ユーザー一覧</h1>
    <table>
      <tr>
        <td>
          <h3>test2</h3>
        </td>
        <td>
          <button>walletを見る</button>
        </td>
        <td>
          <button>送る</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      userInfo: ""
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.push("/login");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.$nextTick(function() {
      const self = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const userInfo = user;
          console.log(userInfo);
          self.setUser(userInfo);
        } else {
          self.$router.push("/login");
        }
      });
    });
  }
};
</script>