import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { api } from "~/composables";
import type { Comment, Job, Story, StoryType } from "~/types";

export const useItemStore = defineStore("items", () => {
  const state = reactive({
    items: <(Story | Job)[]>[],
    activeStories: <StoryType>"top",
    top: <number[]>[],
    new: <number[]>[],
    ask: <number[]>[],
    show: <number[]>[],
    job: <number[]>[],
  });

  async function fetchItem(id: number) {
    try {
      const item = state.items.find((item) => item.id === id);
      if (item) return item;

      const { data } = await api.get<Story | Job>(`item/${id}.json`);
      state.items.push(data);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchItems(ids: number[]) {
    await Promise.all(ids.map((id) => fetchItem(id)));
  }

  async function fetchStoryIdsByType(storyType: StoryType) {
    const { data } = await api.get<number[]>(`${storyType}stories.json`);
    state[storyType] = data;
  }

  function getStoriesByType(storyType: StoryType) {
    return computed(() => {
      return state.items.filter((item) => state[storyType].includes(item.id));
    });
  }

  async function getComment(id: number) {
    try {
      const { data } = await api.get<Comment>(`item/${id}.json`);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async function getComments(ids: number[]) {
    const comments = await Promise.all(ids.map((x) => getComment(x)));
    return comments.filter(Boolean) as Comment[];
  }

  return {
    ...toRefs(state),
    fetchItem,
    fetchItems,
    getComment,
    getComments,
    fetchStoryIdsByType,
    getStoriesByType,
  };
});
