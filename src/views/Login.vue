<template>
  <div>
    <h1>ログイン画面</h1>
    <table>
      <tr>
        <td>
          <label for="email">E-mail</label>
        </td>
        <td>
          <input id="email" type="email" v-model="email" />
        </td>
      </tr>

      <tr>
        <td>
          <label for="password">Password</label>
        </td>
        <td>
          <input id="password" type="password" v-model="password" />
        </td>
      </tr>
    </table>
    <br>
    <br>

    <button @click="register">新規登録</button>
    <br>
    <router-link to="/register">新規登録はこちらから</router-link>
  </div>
</template>