<template>
    <div class="pt-40 max-w-screen-sm mx-auto">
        <div class="px-4 py-8 border border-gray-50 rounded-xl shadow bg-white">
            <BaseForm topic="Employee" @submit-form="submitForm">
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
    data() {
        return {
            url: 'http://localhost:5000/employeeList',
            employee: {
                name: String,
                email: String
            },
            employees: []
        }
    },
    components: {
        BaseForm,
        BaseInput
    },
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
        async submitForm() {
            console.log(this.employee)
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name: this.employee.name,
                    email: this.employee.email,
                }),
            });
            const data = await res.json();
            this.employees = [...this.employees, data];

            // reset employee
            this.employee = {
                name: '',
                email: ''
            }
        },
        submitInput(inputId, enteredInput) {
            this.employee[inputId] = enteredInput
        }
    },
    async created() {
        this.employees = await this.fetchEmployeeList()
    }
}

</script>