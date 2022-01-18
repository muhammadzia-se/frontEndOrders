<template>
    <div>
        <!-- <SearchFilter @onSearch="$emit('onSearch', $event)" /> -->
        <SearchFilter @onSearch="onSearch" />
        <div>
            <div class="dateFilter">
                <input type="date" v-model="startDate" name="startDate">
                <input type="date" v-model="endDate" name="endDate">
            </div>
            <table id="orders">
                <span>
                    <strong>Total Amount: ${{ totalAmount }}</strong>
                </span>
                <tr>
                    <th>Order Name</th>
                    <th>Company Name</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Delivered Amount</th>
                    <th>Total Amount</th>
                </tr>
                <tr :key="order.Quantity" v-for="order in pageOfItems">
                    <td>{{ order.OrderName }} <span>{{ order.Product }}</span></td>
                    <td>{{ order.CompanyName }}</td>
                    <td>{{ order.CustomerName }}</td>
                    <td>{{ order.OrderDate }}</td>
                    <td>{{ order.DeliveredAmount === 0 ? "-" : order.DeliveredAmount }}</td>
                    <td>{{ order.TotalAmount }}</td>
                </tr>
            </table>
            <jw-pagination :items="filteredData" @changePage="onChangePage"></jw-pagination>
        </div>
    </div>
</template>


<script>
import SearchFilter from '../components/SearchFilter'
    export default{
        name: 'Tasks',
        props: {
            tasks: Array
        },
        components:{
            SearchFilter
        },
        data(){
            return {
                filterKey: '',
                totalAmount:0,
                pageOfItems: [],
                startDate:null,
                endDate:null
            }
        },
        methods:{
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            onSearch(query){
                this.filterKey = query
            }
        },
        computed:{
            filteredData: function () {
                var filterKey = this.filterKey
                var data = this.tasks
                const searchableKeys = ['OrderName','Product']
                if (filterKey) {
                    data = data.filter(row =>
                    searchableKeys.some((key) => {
                        const value = String(row[key])
                        return value.toLowerCase().indexOf(filterKey.toLowerCase()) !== -1;
                    }));
                }
                if (!!this.startDate && !!this.endDate){
                    data = data.filter((row) =>{
                        return (row.OrderDate >= this.startDate && row.OrderDate <= this.endDate)
                    });
                    this.totalAmount = data.reduce((a, b) => +a + +b.TotalAmount, 0)
                    return data
                }

                if (filterKey === ''){ 
                    this.totalAmount = data.reduce((a, b) => +a + +b.TotalAmount, 0)
                    this.getTasks = data
                    return this.tasks 
                }

                this.totalAmount = data.reduce((a, b) => +a + +b.TotalAmount, 0)
                this.getTasks = data
                return data
            }
        },
        // emits:['delete-task','toggle-reminder','onSearch'],
    }
</script>

<style scoped>
span{
    margin-top: 10px;
}
#orders {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin-top: 50px;
  width: 100%;
}

#orders td, #orders th {
  border: 1px solid #ddd;
  padding: 8px;
}

#orders tr:nth-child(even){background-color: #f2f2f2;}

#orders tr:hover {background-color: #ddd;}

#orders th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
input[type="date"] {
    margin-right: 15px;
    border: none;
}
.dateFilter{
    margin-top: 25px;
}
tr td > span {
    display: block;
    font-size: 13px;
}
</style>