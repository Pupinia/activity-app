const activities = {
  "1546968934": {
    id: "1",
    title: "Learn Vue.js",
    notes: "I started today and it was not good.",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  },
  "1546969212": {
    id: "2",
    title: "Read Witcher Books",
    notes: "These books are super nice",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  }
};

export const fetchActivites = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(activities);
    }, 2000);
  });
};

const generateUid = () => Math.floor(new Date() * Math.random());

export const createActivityApi = activity => {
  activity.id = generateUid();
  activity.progress = 0;
  activity.createdAt = new Date();
  activity.updatedAt = new Date();

  return new Promise((resolve, reject) => {
    resolve(activity);
  });
};

export const fetchUser = () => {
  return {
    name: "Filip Jerga",
    id: "-Aj34jknvncx98812"
  };
};

export const fetchCategories = () => {
  return {
    "1546969049": { text: "books", id: "1" },
    "1546969225": { text: "movies", id: "2" }
  };
};
