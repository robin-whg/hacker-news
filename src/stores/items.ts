import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { api } from "~/composables";
import type { Comment, Job, Poll, Pollopt, Story, StoryType } from "~/types";

export const useItemStore = defineStore("items", () => {
  const state = reactive({
    items: <(Story | Comment | Job | Poll | Pollopt)[]>[],
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
      const { data } = await api.get<Story | Comment | Job | Poll | Pollopt>(
        `item/${id}.json`
      );
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

  return {
    ...toRefs(state),
    fetchItem,
    fetchItems,
    fetchStoryIdsByType,
  };
});
