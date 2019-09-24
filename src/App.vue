<template>
  <div id="app">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>{{ fullAppName }}</h1>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="#">Newest</a>
            <a class="navbar-item" href="#">In Progress</a>
            <a class="navbar-item" href="#">Finished</a>
          </div>
        </div>
      </div>
    </nav>
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <activity-create :categories="categories" @activityCreated="addActivity"></activity-create>
        </div>
        <div class="column is-9">
          <div class="box content">
            <activity-item v-for="activity in activites" :key="activity.id" :activity="activity"></activity-item>
            <div class="activity-length">Currently {{ activityLength }} activites</div>
            <div class="activity-motivation">{{ activityMotivation }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";

import ActivityItem from "@/components/ActivityItem.vue";
import ActivityCreate from "@/components/ActivityCreate.vue";
import { fetchActivites, fetchUser, fetchCategories } from "@/api";
export default {
  name: "App",
  components: {
    ActivityItem,
    ActivityCreate
  },
  data() {
    return {
      creator: "Ivan Gorovoy",
      appName: "Activity Planner",
      items: { 1: { name: "Ivan" }, 2: { name: "John" } },
      user: {},
      activites: {},
      categories: {}
    };
  },
  computed: {
    fullAppName() {
      return `${this.appName} by ${this.creator}`;
    },
    activityLength() {
      return Object.keys(this.activites).length;
    },
    activityMotivation() {
      if (this.activityLength && this.activityLength < 5) {
        return "Nice to see some activities! (:";
      } else if (this.activityLength >= 5) {
        return "So many activities! Good Job!";
      } else {
        return "No activities! So sad :(";
      }
    }
  },
  beforeCreate() {
    console.log("beforeCreate called!");
  },
  created() {
    fetchActivites().then(activites => {
      this.activites = activites;
    });
    this.user = fetchUser();
    this.categories = fetchCategories();
  },
  methods: {
    addActivity(newActivity) {
      Vue.set(this.activites, newActivity.id, newActivity);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  font-family: "Open Sans", serif;
  background: #f2f6fa;
}

footer {
  background-color: #f2f6fa !important;
}

.topNav {
  border-top: 5px solid #3498db;
}

.topNav .container {
  border-bottom: 1px solid #e6eaee;
}

.container .columns {
  margin: 3rem 0;
}

.navbar-menu .navbar-item {
  padding: 0 2rem;
}

aside.menu {
  padding-top: 3rem;
}

aside.menu .menu-list {
  line-height: 1.5;
}

aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}

.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}

.media-left img {
  border-radius: 50%;
}

.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}

article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}

article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.menu-list li {
  padding: 5px;
}

.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}

.wrapper {
  margin-left: 20px;
}

.activity-motivation {
  float: right;
}

.activity-length {
  display: inline-block;
}
</style>
