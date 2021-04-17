<template>
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
                            @click="editModeOn(employee.id, employee.name, employee.email)">
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
        <div v-if="editMode" class="px-4 py-8 mt-8 border border-gray-50 rounded-xl shadow bg-white">
            <BaseForm topic="Employee Edit Form" @submit-form="editEmployee">
                <BaseInput inputId="name" @submit-input="submitInput" />
                <BaseInput inputId="email" @submit-input="submitInput" />
            </BaseForm>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseForm from '@/components/BaseForm.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
    name: 'EmployeeRegister',
    components: {
        BaseInput,
        BaseForm
    },
    data() {
        return {
            url: 'http://localhost:5000/employeeList',
            employeeList: [],
            editMode: false,
            editingEmployee: {
                id: Number,
                name: String,
                email: String
            }
        }
    },
    methods: {
        editModeOn(employeeId, employeeName, employeeEmail) {
            this.editMode = true
            this.editingEmployee['id'] = employeeId
            this.editingEmployee['name'] = employeeName
            this.editingEmployee['email'] = employeeEmail
        },
        submitInput(inputId, enteredInput) {
            this.editingEmployee[inputId] = enteredInput
        },
		async fetchEmployeeList() {
			try {
				const res = await fetch(this.url)
				const data = await res.json()
				return data
			} catch (error) {
				console.log(error)
			}
		},
        async editEmployee() {
            const res = await fetch(`${this.url}/${this.editingEmployee.id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					name: this.editingEmployee.name,
					email: this.editingEmployee.email
				})
            })
            const data = await res.json()
            this.employeeList = this.employeeList.map((employee) =>
				employee.id === data.id ? {
					...employee,
					name: data.name,
					email: data.email
				} : employee
            )

            this.editMode = false
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