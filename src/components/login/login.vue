<template>
    <div class="login">
        用户名<input type="text" placeholder="请输入用户名" v-model="username" v-on:change="userNameChange"> <br> 密码&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="请输入密码"><br/>
        <button @click="submit">登录</button>
    </div>
</template>
<script>

export default {
    data: function() {
        return {
            username: ""
        }
    },
    methods: {
        userNameChange() {
            //this.$emit("childChange","username",this.username)
            this.$store.state.user_name = this.username;
        },
        submit() {
        //alert(this.$parent.$data.username +"==="+ this.$parent.$data.userarea);
        this.$store.commit("showUserName");
    }
    },
    
}
</script>

<style scoped>
.login {
    height: 300px;
    width: 400px;
    border: 1px solid red;
    margin: auto;
    text-align: center
}

input {
    height: 30px;
    width: 200px;
    margin-top: 10px;
    border-radius: 6px;
    border: 1px solid #eee;
    margin-left: 10px;
    text-align: center;
}

button {
    margin-top: 60px;
    width: 100px;
    height: 30px;
    background-color: #eee;
    border: 1px solid yellowgreen;
}
</style>

