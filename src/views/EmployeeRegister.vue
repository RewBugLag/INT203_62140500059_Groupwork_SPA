<template>
    <body class="bg-green-500 w-screen h-screen">
        <NavBar/>
        <div class="pt-40 max-w-screen-sm mx-auto">
            <div class="px-4 py-8 border border-gray-50 rounded-xl shadow bg-white">
                <BaseForm topic="Employee">
                    <BaseInput inputId="name" />
                    <BaseInput inputId="email" />
                </BaseForm>
            </div>
        </div>
    </body>
</template>

<script>
// @ is an alias to /src
import BaseForm from '@/components/BaseForm.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'EmployeeRegister',
  components: {
    BaseForm,
    BaseInput
  }
}

</script>