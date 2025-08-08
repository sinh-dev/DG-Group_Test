<template>
  <section class="bg-gray-100 py-6 md:py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- First Section - Horizontal Scroll -->
      <div class="mb-8 md:mb-12">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 md:mb-6">
          <h2 class="text-sm md:text-lg font-medium text-gray-400">SECTION_Thumbnails</h2>
          <button class="text-xs md:text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1">
            <span>Xem tất cả</span>
            <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Scrollable Container with Navigation -->
        <div class="relative">
          <!-- Left Arrow -->
          <button 
            @click="scrollLeft"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all"
          >
            <svg class="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <!-- Right Arrow -->
          <button 
            @click="scrollRight"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all"
          >
            <svg class="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Scrollable Cards -->
          <div 
            ref="scrollContainer"
            class="flex space-x-3 md:space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            <!-- Basketball Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick('basketball-1')"
            >
              <div class="relative h-32 md:h-40">
                <!-- Basketball Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700">
                  <div class="absolute inset-0 bg-black/40"></div>
                  <!-- Basketball Player Silhouette -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-2xl md:text-3xl">🏀</span>
                    </div>
                  </div>
                  <!-- Basketball Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span class="text-white text-lg">🏀</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-2 md:top-3 right-2 md:right-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  HOT
                </div>
                
                <!-- LIVE Badge -->
                <div class="absolute top-2 md:top-3 left-2 md:left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  LIVE
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2.5 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-semibold text-black">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                    LIVE
                  </div>
                </div>
              </div>
            </div>

            <!-- Gaming/eSports Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick('gaming-1')"
            >
              <div class="relative h-32 md:h-40">
                <!-- Gaming Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700">
                  <div class="absolute inset-0 bg-black/50"></div>
                  <!-- Gaming Elements -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-2xl md:text-3xl">🎮</span>
                    </div>
                  </div>
                  <!-- Gaming Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-white text-lg">🎮</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-2 md:top-3 right-2 md:right-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2.5 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-semibold text-black">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-black">
                    <span>✏️</span>
                    <span>Hủy lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Soccer Match Card with Team Logos -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick('soccer-match')"
            >
              <div class="relative h-32 md:h-40">
                <!-- Soccer Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-teal-600">
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Match Info Card -->
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <!-- League Badge -->
                    <div class="bg-yellow-500 text-black text-xs px-3 py-1 rounded mb-2 font-bold">
                      DEMINAV
                    </div>
                    
                    <!-- Match Date/Time -->
                    <div class="text-xs mb-2 text-gray-200">NGOÀI HẠNG ANH | 23.09.2023 | 20:30</div>
                    
                    <!-- Teams -->
                    <div class="flex items-center space-x-4">
                      <div class="text-center">
                        <div class="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full mb-1 flex items-center justify-center">
                          <span class="text-black font-bold text-sm">T</span>
                        </div>
                        <div class="text-xs font-medium">TEAM A</div>
                      </div>
                      
                      <div class="text-lg md:text-xl font-bold">VS</div>
                      
                      <div class="text-center">
                        <div class="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full mb-1 flex items-center justify-center">
                          <span class="text-white font-bold text-sm">T</span>
                        </div>
                        <div class="text-xs font-medium">TEAM B</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Soccer Ball -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span class="text-sm">⚽</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-2 md:top-3 right-2 md:right-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2.5 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-semibold text-black">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-black">
                    <svg class="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span>Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Basketball Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick('basketball-2')"
            >
              <div class="relative h-32 md:h-40">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700">
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-2xl md:text-3xl">🏀</span>
                    </div>
                  </div>
                  <div class="absolute bottom-3 left-3">
                    <div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span class="text-white text-lg">🏀</span>
                    </div>
                  </div>
                </div>
                <div class="absolute top-2 md:top-3 right-2 md:right-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  HOT
                </div>
              </div>
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2.5 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-semibold text-black">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-black">
                    <svg class="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span>Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Gaming Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick('gaming-2')"
            >
              <div class="relative h-32 md:h-40">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700">
                  <div class="absolute inset-0 bg-black/50"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-2xl md:text-3xl">🎮</span>
                    </div>
                  </div>
                  <div class="absolute bottom-3 left-3">
                    <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-white text-lg">🎮</span>
                    </div>
                  </div>
                </div>
                <div class="absolute top-2 md:top-3 right-2 md:right-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                  HOT
                </div>
              </div>
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2.5 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-semibold text-black">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-black">
                    <svg class="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span>Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Section - Grid Layout -->
      <div>
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 md:mb-6">
          <h2 class="text-sm md:text-lg font-medium text-gray-400">SECTION_Thumbnails</h2>
          <button 
            @click="toggleGridSection"
            class="text-xs md:text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
          >
            <span>{{ isGridCollapsed ? 'Mở rộng' : 'Thu gọn' }}</span>
            <svg 
              class="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300" 
              :class="{ 'rotate-180': isGridCollapsed }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        <!-- Grid Cards -->
        <div v-if="!isGridCollapsed" class="space-y-3 md:space-y-4">
          <!-- Row 1 -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            <div 
              v-for="(card, index) in 5" 
              :key="`grid-row1-${index}`"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick(`grid-row1-${index}`)"
            >
              <div class="relative h-24 sm:h-28 md:h-32">
                <div :class="getCardBackground(index)" class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div :class="getSportIconBg(index)" class="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-lg md:text-2xl">{{ getSportIcon(index) }}</span>
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-2">
                    <div :class="getSportIconBg(index)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm md:text-lg">{{ getSportIcon(index) }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="absolute top-1 md:top-2 right-1 md:right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded font-bold">
                  HOT
                </div>
                
                <div v-if="index === 0" class="absolute top-1 md:top-2 left-1 md:left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded font-bold">
                  LIVE
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 md:p-2.5">
                <div class="flex items-center justify-between">
                  <div class="text-xs">
                    <div class="font-semibold text-black truncate">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div v-if="index === 0" class="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">
                    LIVE
                  </div>
                  <div v-else class="flex items-center space-x-1 text-xs text-black">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="hidden sm:inline">Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            <div 
              v-for="(card, index) in 5" 
              :key="`grid-row2-${index}`"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick(`grid-row2-${index}`)"
            >
              <div class="relative h-24 sm:h-28 md:h-32">
                <div :class="getCardBackground(index + 1)" class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div :class="getSportIconBg(index + 1)" class="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-lg md:text-2xl">{{ getSportIcon(index + 1) }}</span>
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-2">
                    <div :class="getSportIconBg(index + 1)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm md:text-lg">{{ getSportIcon(index + 1) }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="absolute top-1 md:top-2 right-1 md:right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded font-bold">
                  HOT
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 md:p-2.5">
                <div class="flex items-center justify-between">
                  <div class="text-xs">
                    <div class="font-semibold text-black truncate">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-black">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="hidden sm:inline">Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 3 -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            <div 
              v-for="(card, index) in 5" 
              :key="`grid-row3-${index}`"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              @click="handleCardClick(`grid-row3-${index}`)"
            >
              <div class="relative h-24 sm:h-28 md:h-32">
                <div :class="getCardBackground(index + 2)" class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div :class="getSportIconBg(index + 2)" class="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center opacity-80">
                      <span class="text-white text-lg md:text-2xl">{{ getSportIcon(index + 2) }}</span>
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-2">
                    <div :class="getSportIconBg(index + 2)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm md:text-lg">{{ getSportIcon(index + 2) }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="absolute top-1 md:top-2 right-1 md:right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded font-bold">
                  HOT
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 md:p-2.5">
                <div class="flex items-center justify-between">
                  <div class="text-xs">
                    <div class="font-semibold text-black truncate">Team A vs Team B</div>
                    <div class="text-xs text-black/80">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-black">
                    <svg class="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="hidden sm:inline">Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement>()
const isGridCollapsed = ref(false)

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -280, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 280, behavior: 'smooth' })
  }
}

const toggleGridSection = () => {
  isGridCollapsed.value = !isGridCollapsed.value
}

const getCardBackground = (index: number) => {
  const backgrounds = [
    'bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700', // Basketball
    'bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700',    // Gaming
    'bg-gradient-to-br from-green-800 via-emerald-700 to-teal-600',  // Soccer
    'bg-gradient-to-br from-red-800 via-pink-700 to-purple-600',     // Volleyball
    'bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-600'     // Tennis
  ]
  return backgrounds[index % backgrounds.length]
}

const getSportIconBg = (index: number) => {
  const colors = [
    'bg-orange-600',  // Basketball
    'bg-purple-600',  // Gaming
    'bg-green-600',   // Soccer
    'bg-red-600',     // Volleyball
    'bg-blue-600'     // Tennis
  ]
  return colors[index % colors.length]
}

const getSportIcon = (index: number) => {
  const icons = ['🏀', '🎮', '⚽', '🏐', '🎾']
  return icons[index % icons.length]
}

const handleCardClick = (cardId: string) => {
  console.log(`Card clicked: ${cardId}`)
  // Add navigation or modal logic here
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
