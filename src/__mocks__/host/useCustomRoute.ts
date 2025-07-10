import { computed } from 'vue';

export default function useCustomRoute() {
  return computed(() => ({
    name: 'home',
    // ...добавьте другие поля по мере необходимости
  }));
}
