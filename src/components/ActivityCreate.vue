<template>
  <div>
    <a
      v-if="!isFormDisplayed"
      class="button is-primary is-block is-alt is-large"
      href="#"
      @click="toggleFormDisplay"
    >New Activity</a>
    <div v-if="isFormDisplayed" class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="newActivity.title" class="input" type="text" placeholder="Read a Book" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="textarea"
              placeholder="Write some notes here"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <select v-model="newActivity.category" class="select">
              <option disabled value>Please Select One</option>
              <option v-for="category in categories" :key="category.id">{{ category.text }}</option>
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              :disabled="!isFormValid"
              @click.prevent="createActivity"
            >Create Activity</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="toggleFormDisplay">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createActivityApi } from "@/api";
export default {
  name: "ActivityCreate",
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFormDisplayed: false,
      newActivity: {
        title: "",
        notes: "",
        category: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return this.newActivity.title && this.newActivity.notes;
    }
  },
  methods: {
    createActivity() {
      createActivityApi(this.newActivity).then(activity => {
        this.$emit("activityCreated", { ...activity });
      });
    },
    toggleFormDisplay() {
      this.isFormDisplayed = !this.isFormDisplayed;
    }
  }
};
</script>