<template>
    <div class="pt-4">
        <label class="label" for="{{inputId}}">{{inputId}}</label>
        <br />
        <input
            class="input border border-gray-50 rounded-xl shadow p-2 my-1 w-full"
            :class="{ 'bg-red-50': invalidInput }"
            id="{{inputId}}"
            type="text"
            v-model.trim="enteredInput"
            @blur="validateInput"
        />
        <p v-if="invalidInput" class="text-red-500">
            Please enter your {{inputId}}!
        </p>
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        inputId: String
    },
    data() {
        return {
            enteredInput: '',
            invalidInput: false
        }
    },
    methods: {
        validateInput() {
            this.invalidInput = this.enteredInput === '' ? true : false
            console.log(`name: ${this.invalidInput}`)
            if (this.invalidInput === false) {
                this.submitInput()
            }
        },
        submitInput() {
            this.$emit('submit-input',this.inputId, this.enteredInput)
        }
    }
}
</script>
