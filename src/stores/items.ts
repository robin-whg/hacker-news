import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { api } from "~/composables";
import type { Job, Story } from "~/types";

export const useItemStore = defineStore("items", () => {
  const state = reactive({
    items: <(Story | Job)[]>[],
    topStoryPointer: 0,
    topStories: <number[]>[],
  });

  async function fetchStory(id: number) {
    try {
      const { data } = await api.get<Story | Job>(`item/${id}.json`);
      state.items.push(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchStories(startAt = 0, limit = 25) {
    const promises: Promise<void>[] = [];
    for (let i = startAt; i < startAt + limit; i++) {
      promises.push(fetchStory(state.topStories[state.topStoryPointer + i]));
    }
    await Promise.all(promises);
    state.topStoryPointer = state.topStoryPointer + limit;
  }

  async function fetchTopStories() {
    try {
      const { data } = await api.get<number[]>("topstories.json");
      state.topStories = data;
    } catch (err) {
      console.error(err);
    }
  }

  const getTopStories = computed(() => {
    return state.items.filter((item) => item.id in state.topStories);
  });

  return {
    ...toRefs(state),
    fetchTopStories,
    fetchStory,
    fetchStories,
    getTopStories,
  };
});
