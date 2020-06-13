<template>
  <div>
    <table>
      <tr>
        <td>
          <h2>{{user.displayName}}さんようこそ！</h2>
        </td>
        <td><h2>残高:</h2></td>
        <td>
          <button>ログアウト</button>
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
export default {
  name: "Home",
  data() {
    return {
      userdata: ""
    };
  },
  computed: {
    user() { return this.$store.getters.user}
  },
};
</script>

