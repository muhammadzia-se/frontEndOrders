<template>
    <div>
        <Tasks :tasks="tasks"/>
    </div>
</template>
<script>
import Tasks from '../components/Tasks'

export default {
    name: 'Orders',
    components:{
        Tasks
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
      async fetchTasks() {
        const res = await fetch('http://localhost:1000/api/orders')
        const data = await res.json()
        return data.data
      },
  },
  async created() {
    this.tasks = await this.fetchTasks()
  }
}

</script>