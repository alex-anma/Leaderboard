<template>
  <div class="leaderboard-container">
    <n-space vertical size="large">
      <n-grid :x-gap="33" :y-gap="8" :cols="3" class="podium-grid">
        <n-gi v-if="podiumPlayers[1]">
          <div class="podium-card-wrapper second-place">
            <n-avatar round :size="100" :src="podiumPlayers[1].avatar" />
            <n-h3 style="margin: 0">{{ podiumPlayers[1].name }}</n-h3>
            <n-card class="podium-card-content">
              <div class="trophy">🥈</div>
              <n-space vertical align="center" size="large">
                <n-statistic label="Puntaje"> ❤️ {{ podiumPlayers[1].points }} </n-statistic>
              </n-space>
            </n-card>
          </div>
        </n-gi>

        <n-gi v-if="podiumPlayers[0]">
          <div class="podium-card-wrapper first-place">
            <n-avatar round :size="120" :src="podiumPlayers[0].avatar" />
            <n-h3 style="margin: 0">{{ podiumPlayers[0].name }}</n-h3>
            <n-card class="podium-card-content">
              <div class="trophy">🥇</div>
              <n-space vertical align="center" size="large">
                <n-statistic label="Puntaje"> ❤️ {{ podiumPlayers[0].points }} </n-statistic>
              </n-space>
            </n-card>
          </div>
        </n-gi>

        <n-gi v-if="podiumPlayers[2]">
          <div class="podium-card-wrapper third-place">
            <n-avatar round :size="100" :src="podiumPlayers[2].avatar" />
            <n-h3 style="margin: 0">{{ podiumPlayers[2].name }}</n-h3>
            <n-card class="podium-card-content">
              <div class="trophy">🥉</div>
              <n-space vertical align="center" size="large">
                <n-statistic label="Puntaje"> ❤️ {{ podiumPlayers[2].points }} </n-statistic>
              </n-space>
            </n-card>
          </div>
        </n-gi>
      </n-grid>

      <n-card title="Ranking" class="leaderboard-list-card">
        <template #header-extra>
          <n-button quaternary>
            <template #icon>
              <IconSort style="fill: white" />
            </template>
          </n-button>
        </template>
        <n-list :bordered="false" class="custom-leaderboard-list">
          <n-list-item
            v-for="(user, index) in rankingUsers"
            :key="user.name"
            class="leaderboard-list-item"
          >
            <template #prefix>
              <n-tag medium round :bordered="false" style="margin-right: 2rem; border: 1px solid">
                {{ index + 4 }}
              </n-tag>
            </template>
            <template #suffix>
              <n-statistic :value="user.points" style="min-width: 80px; text-align: right">
                <template #prefix>❤️</template>
              </n-statistic>
            </template>
            <n-thing :title="user.name">
              <template #description>
                <n-text :depth="3"> Participante </n-text>
              </template>
              <template #avatar>
                <n-avatar round :src="user.avatar" />
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
      </n-card>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  NSpace,
  NGrid,
  NGi,
  NCard,
  NAvatar,
  NH3,
  NText,
  NStatistic,
  NButton,
  NList,
  NListItem,
  NThing,
  NTag,
} from 'naive-ui'
import IconSort from '../components/icons/IconSort.vue'

interface Player {
  name: string
  avatar: string
  points: number
}

const players = ref<Player[]>([
  { name: 'Brian Ngo', points: 1200, avatar: 'https://i.pravatar.cc/100?img=9' },
  { name: 'Jolie Joie', points: 1000, avatar: 'https://i.pravatar.cc/100?img=8' },
  { name: 'David Do', points: 3000, avatar: 'https://i.pravatar.cc/100?img=10' },
  { name: 'Kianna Torff', points: 400, avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Abram Mango', points: 0, avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Alfonso Lubin', points: 300, avatar: 'https://i.pravatar.cc/40?img=3' },
  { name: 'Maren Gouse', points: 2560, avatar: 'https://i.pravatar.cc/40?img=4' },
  { name: 'Desirae Herwitz', points: 132, avatar: 'https://i.pravatar.cc/40?img=5' },
  { name: 'Kianna Torff 2', points: 0, avatar: 'https://i.pravatar.cc/40?img=6' },
  { name: 'Max Cooper', points: 0, avatar: 'https://i.pravatar.cc/40?img=7' },
])

const sortedPlayers = computed(() => {
  return [...players.value].sort((a, b) => b.points - a.points)
})

const podiumPlayers = computed(() => {
  return sortedPlayers.value.slice(0, 3)
})

const rankingUsers = computed(() => {
  return sortedPlayers.value.slice(3)
})
</script>

<style scoped>
.leaderboard-container {
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  align-content: center;
  font-family: 'Inter', sans-serif;
}

.podium-grid {
  height: 430px;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.podium-card-wrapper {
  position: relative;
  text-align: center;
}

.podium-card-content {
  margin-top: 2rem;
}

.podium-card-wrapper.first-place {
  transform: scale(1.1);
  z-index: 2;
}

.podium-card-wrapper.second-place,
.podium-card-wrapper.third-place {
  transform: translateY(10px);
}

.trophy {
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  font-size: 3rem;
  z-index: 3;
}

.leaderboard-list-card {
  width: 100%;
}

.custom-leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.leaderboard-list-item {
  background: #0f172a10;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
}

:deep(.n-card__content) {
  margin-top: 2rem;
}

:deep(.n-list-item__divider) {
  display: none;
}
</style>
