import { defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";
import { api } from "~/composables";
import type { Job, Story, StoryType } from "~/types";

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
      if (state.items.some((item) => item.id === id)) return;
      const { data } = await api.get<Story | Job>(`item/${id}.json`);
      state.items.push(data);
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

  return {
    ...toRefs(state),
    fetchItem,
    fetchItems,
    fetchStoryIdsByType,
    getStoriesByType,
  };
});
