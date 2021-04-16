<template>
    <body class="bg-green-500 w-screen h-screen">
        <NavBar/>
        <div class="pt-40 max-w-screen-sm mx-auto">
            <div class="px-4 py-8 border border-gray-50 rounded-xl shadow bg-white">
                <table class="w-full border-collapse">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="employee in employeeList" :key="employee.id">
                        <td>{{employee.name}}</td>
                        <td>{{employee.email}}</td>
                        <td>
                            <button class="inline-block px-8 py-2 mr-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                                @click="editEmployee(employee.id)">
                                Edit
                            </button>
                            <button class="inline-block px-8 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                                @click="deleteEmployee(employee.id)">
                                Delete
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</template>

<script>
// @ is an alias to /src
// import BaseForm from '@/components/BaseForm.vue'
// import BaseInput from '@/components/BaseInput.vue'

export default {
    name: 'EmployeeRegister',
    components: {
        // BaseForm,
        // BaseInput
    },
    data() {
        return {
            url: 'http://localhost:5000/employeeList',
            employeeList: []
        }
    },
    // Async-Await form
    methods: {
		async fetchEmployeeList() {
			try {
				const res = await fetch(this.url)
				const data = await res.json()
				return data
			} catch (error) {
				console.log(error)
			}
		},
        async editEmployee(employeeId) {
            console.log(employeeId)
            // const res = await fetch(`${this.url}/${employeeId}`, {
			// 	method: 'PUT',
			// 	headers: {
			// 		'Content-type': 'application/json'
			// 	},
			// 	body: JSON.strongify({
			// 		name: employee.name,
			// 		email: employee.email
			// 	})
            // })
            // const data = await res.json()
            // this.employeeList = this.employeeList.map((employee) =>
			// 	employee.id === data.id ? {
			// 		...employee,
			// 		name: data.name,
			// 		email: data.email
			// 	} : employee
            // )
        },
        async deleteEmployee(employeeId) {
            const res = await fetch(`${this.url}/${employeeId}`, {
                method: 'DELETE'
            })
            res.status === 200 ? (this.employeeList = this.employeeList.filter((employee) => employee.id !== employeeId)) : alert('Error to delete employee')
        }
    },
    async created() {
        this.employeeList = await this.fetchEmployeeList()
    }
}
</script>

<style scoped>
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>