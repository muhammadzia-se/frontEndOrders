<template>
    <div>
        <nav>
            <ul>
                <li><router-link class="nav_links" to="/">Home</router-link></li>
                <li><router-link class="nav_links" to="/orders">Orders</router-link></li>
            </ul>
        </nav>
        <header>
            <h1 v-show="HomePage">{{ title }}</h1>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        props: {
            title: String,
            showAddTask: Boolean
        },
        computed:{
            HomePage() {
                if(this.$router.path === "/"){
                    return true
                }else{
                    return false
                }
            }
        }
    }
</script>
<style scoped>
    nav{
        display: block;
        width: 100%;
        position: relative;
        padding: 25px 0;
        background: #ececec;
    }
    nav > ul li{
        list-style: none;
        display: inline-block;
    }
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    }
    .nav_links{
      display: inline-block;
      font-size: 17px;
      font-weight: bold;
      margin: 0 5px;
    }
    .router-link-exact-active{
        font-size: 25px;
    }
</style>