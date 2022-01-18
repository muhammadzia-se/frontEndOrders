<template>
    <div class="search">
        <div>
            <input type="text" @keyup="onSearch" v-model="text" name="text" placeholder="Search Task" />
        </div>
    </div>
</template>


<script>
export default{
    name: 'SearchFilter',
    data(){
        return {
            text: ''
        }
    },
    methods:{
    onSearch(){
        const text = {
            text: this.text,
            }
            this.$emit('onSearch', text.text)
        }
    }
}

</script>


<style scoped>
.search input{
    width: 100%;
    height: 45px;
    padding: 9px;
}
</style>