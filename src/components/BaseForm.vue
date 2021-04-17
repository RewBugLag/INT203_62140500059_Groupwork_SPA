<template>
  <div class="container">
    <h1>{{ topic }}</h1>
    <form @submit.prevent="submitForm">
      <slot></slot>
      <div>
        <input
          type="submit"
          value="Submit"
          class="px-8 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BaseForm",
  props: {
    topic: String
  },
  methods: {
    submitForm() {
      this.$emit('submit-form')
    }
  }
}
</script>