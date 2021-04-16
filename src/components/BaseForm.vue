<template>
  <div class="container">
    <h1>{{ topic }}</h1>
    <form @submit.prevent="submitForm">
      <slot></slot>
      <div>
        <input
          type="submit"
          value="Add employee"
          class="px-8 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        />
      </div>
    </form>
  </div>
</template>

<script>
// import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "BaseForm",
  // components: {
  //   BaseInput
  // },
  props: {
    topic: String
  },
  methods: {
    // async submitForm(input) {
    //   const res = await fetch(this.url, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: photo.title,
    //       src: photo.src,
    //     })
    //   })
    //   const data = await res.json();
    //   this.photos = [...this.photos, data];
    // },

    // async addPhotos(photo) {
    //   const res = await fetch(this.url, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: photo.title,
    //       src: photo.src,
    //     }),
    //   });
    //   const data = await res.json();
    //   this.photos = [...this.photos, data];
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
