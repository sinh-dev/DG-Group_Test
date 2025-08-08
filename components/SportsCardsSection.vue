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
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('basketball-1')"
            >
              <div class="relative h-36 md:h-44">
                <!-- Modern Basketball Arena Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
                  <!-- Arena atmosphere overlay -->
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Stadium lights effect -->
                  <div class="absolute top-0 left-1/4 w-32 h-16 bg-white/10 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/4 w-24 h-12 bg-white/8 rounded-full blur-lg"></div>
                  
                  <!-- Basketball court lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-orange-400/30"></div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-orange-400/40 rounded-full"></div>
                  
                  <!-- Basketball players silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-4">
                    <!-- Player 1 -->
                    <div class="relative">
                      <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-orange-600/40 to-amber-700/60 rounded-full transform -rotate-12"></div>
                      <div class="absolute -top-2 -right-1 w-6 h-6 bg-orange-500 rounded-full opacity-80"></div>
                    </div>
                    <!-- Player 2 -->
                    <div class="relative">
                      <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-gray-400/40 to-gray-600/60 rounded-full transform rotate-12"></div>
                    </div>
                  </div>
                  
                  <!-- Basketball Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-xl">🏀</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-3 md:p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm md:text-base">
                    <div class="font-bold text-gray-800 text-lg">Team A vs Team B</div>
                    <div class="text-sm font-medium text-gray-700 mt-0.5">BLV NONAME</div>
                  </div>
                  <div class="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-3 py-1.5 rounded-full font-bold shadow-lg">
                    LIVE
                  </div>
                </div>
              </div>
            </div>

            <!-- Gaming/eSports Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('gaming-1')"
            >
              <div class="relative h-36 md:h-44">
                <!-- Modern Gaming Arena Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                  <!-- Gaming atmosphere overlay -->
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Screen glow effects -->
                  <div class="absolute top-0 left-1/4 w-32 h-16 bg-purple-400/10 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/4 w-24 h-12 bg-pink-400/8 rounded-full blur-lg"></div>
                  
                  <!-- Gaming setup elements -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-purple-400/30"></div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-purple-400/40 rounded-lg"></div>
                  
                  <!-- Gaming players silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-4">
                    <!-- Player 1 -->
                    <div class="relative">
                      <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-purple-600/40 to-indigo-700/60 rounded-full transform -rotate-8"></div>
                      <div class="absolute -top-2 -right-1 w-6 h-6 bg-purple-500 rounded-full opacity-80"></div>
                    </div>
                    <!-- Player 2 -->
                    <div class="relative">
                      <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-pink-500/40 to-purple-700/60 rounded-full transform rotate-8"></div>
                    </div>
                  </div>
                  
                  <!-- Gaming Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-xl">🎮</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-3 md:p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm md:text-base">
                    <div class="font-bold text-gray-800 text-lg">Team A vs Team B</div>
                    <div class="text-sm font-medium text-gray-700 mt-0.5">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-2 text-sm text-gray-700">
                    <span class="text-lg">✏️</span>
                    <span class="font-medium">Hủy lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Soccer Match Card with Team Logos -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('soccer-match')"
            >
              <div class="relative h-36 md:h-44">
                <!-- Modern Soccer Stadium Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
                  <!-- Stadium atmosphere overlay -->
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Stadium lights effect -->
                  <div class="absolute top-0 left-1/4 w-32 h-16 bg-green-400/10 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/4 w-24 h-12 bg-emerald-400/8 rounded-full blur-lg"></div>
                  
                  <!-- Soccer field lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-green-400/30"></div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-green-400/40 rounded-full"></div>
                  
                  <!-- Match Info Card -->
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <!-- League Badge -->
                    <div class="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs px-3 py-1.5 rounded-full mb-2 font-bold shadow-lg">
                      DEMINAV
                    </div>
                    
                    <!-- Match Date/Time -->
                    <div class="text-xs mb-3 text-gray-200 font-medium">NGOÀI HẠNG ANH | 23.09.2023 | 20:30</div>
                    
                    <!-- Teams -->
                    <div class="flex items-center space-x-4">
                      <div class="text-center">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full mb-1 flex items-center justify-center shadow-lg">
                          <span class="text-black font-bold text-sm md:text-base">T</span>
                        </div>
                        <div class="text-xs font-medium">TEAM A</div>
                      </div>
                      
                      <div class="text-lg md:text-xl font-bold bg-white/10 px-3 py-1 rounded-lg">VS</div>
                      
                      <div class="text-center">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full mb-1 flex items-center justify-center shadow-lg">
                          <span class="text-white font-bold text-sm md:text-base">T</span>
                        </div>
                        <div class="text-xs font-medium">TEAM B</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Soccer Ball -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-xl">⚽</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-3 md:p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm md:text-base">
                    <div class="font-bold text-gray-800 text-lg">Team A vs Team B</div>
                    <div class="text-sm font-medium text-gray-700 mt-0.5">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-2 text-sm text-gray-700">
                    <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="font-medium">Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Basketball Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('basketball-2')"
            >
              <div class="relative h-36 md:h-44">
                <!-- Modern Basketball Arena Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
                  <!-- Arena atmosphere overlay -->
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Stadium lights effect -->
                  <div class="absolute top-0 left-1/3 w-28 h-14 bg-white/8 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/3 w-20 h-10 bg-white/6 rounded-full blur-lg"></div>
                  
                  <!-- Basketball court lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-orange-400/30"></div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-orange-400/40 rounded-full"></div>
                  
                  <!-- Basketball players silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-3">
                    <!-- Player 1 -->
                    <div class="relative">
                      <div class="w-11 h-15 md:w-13 md:h-19 bg-gradient-to-b from-amber-600/40 to-orange-700/60 rounded-full transform rotate-8"></div>
                      <div class="absolute -top-1 -left-1 w-5 h-5 bg-orange-500 rounded-full opacity-70"></div>
                    </div>
                    <!-- Player 2 -->
                    <div class="relative">
                      <div class="w-11 h-15 md:w-13 md:h-19 bg-gradient-to-b from-blue-400/30 to-gray-600/50 rounded-full transform -rotate-8"></div>
                    </div>
                  </div>
                  
                  <!-- Basketball Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-xl">🏀</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-3 md:p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm md:text-base">
                    <div class="font-bold text-gray-800 text-lg">Team A vs Team B</div>
                    <div class="text-sm font-medium text-gray-700 mt-0.5">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-2 text-sm text-gray-700">
                    <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="font-medium">Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Gaming Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('gaming-2')"
            >
              <div class="relative h-36 md:h-44">
                <!-- Modern Gaming Arena Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                  <!-- Gaming atmosphere overlay -->
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Screen glow effects -->
                  <div class="absolute top-0 left-1/3 w-28 h-14 bg-purple-400/8 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/3 w-20 h-10 bg-pink-400/6 rounded-full blur-lg"></div>
                  
                  <!-- Gaming setup elements -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-purple-400/30"></div>
                  <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-purple-400/40 rounded-lg"></div>
                  
                  <!-- Gaming players silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-3">
                    <!-- Player 1 -->
                    <div class="relative">
                      <div class="w-11 h-15 md:w-13 md:h-19 bg-gradient-to-b from-indigo-600/40 to-purple-700/60 rounded-full transform rotate-10"></div>
                      <div class="absolute -top-1 -left-1 w-5 h-5 bg-purple-500 rounded-full opacity-70"></div>
                    </div>
                    <!-- Player 2 -->
                    <div class="relative">
                      <div class="w-11 h-15 md:w-13 md:h-19 bg-gradient-to-b from-pink-500/30 to-indigo-700/50 rounded-full transform -rotate-10"></div>
                    </div>
                  </div>
                  
                  <!-- Gaming Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-xl">🎮</span>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-3 md:p-4">
                <div class="flex items-center justify-between">
                  <div class="text-sm md:text-base">
                    <div class="font-bold text-gray-800 text-lg">Team A vs Team B</div>
                    <div class="text-sm font-medium text-gray-700 mt-0.5">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-2 text-sm text-gray-700">
                    <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="font-medium">Đặt lịch</span>
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
              class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick(`grid-row1-${index}`)"
            >
              <div class="relative h-28 sm:h-32 md:h-36">
                <div :class="getModernCardBackground(index)" class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Modern sport atmosphere effects -->
                  <div class="absolute top-0 left-1/4 w-16 h-8 bg-white/8 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-white/6 rounded-full blur-md"></div>
                  
                  <!-- Sport field/court lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20"></div>
                  <div v-if="index !== 2" class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white/30 rounded-full"></div>
                  <div v-else class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white/30 rounded-sm"></div>
                  
                  <!-- Modern player silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-2">
                    <div class="relative">
                      <div :class="getPlayerSilhouette(index, 0)" class="w-6 h-8 md:w-8 md:h-12 rounded-full transform -rotate-6"></div>
                      <div v-if="index === 0" class="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full opacity-80"></div>
                    </div>
                    <div class="relative">
                      <div :class="getPlayerSilhouette(index, 1)" class="w-6 h-8 md:w-8 md:h-12 rounded-full transform rotate-6"></div>
                    </div>
                  </div>
                  
                  <!-- Modern sport icon -->
                  <div class="absolute bottom-2 left-2">
                    <div :class="getModernIconBg(index)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-sm md:text-lg">{{ getSportIcon(index) }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Modern HOT badge -->
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
                
                <!-- Modern LIVE badge for first card -->
                <div v-if="index === 0" class="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  LIVE
                </div>
              </div>
              
              <!-- Modern footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-2 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-bold text-gray-800 truncate">Team A vs Team B</div>
                    <div class="text-xs font-medium text-gray-700">BLV NONAME</div>
                  </div>
                  <div v-if="index === 0" class="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                    LIVE
                  </div>
                  <div v-else class="flex items-center space-x-1 text-xs text-gray-700">
                    <svg class="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="hidden sm:inline font-medium">Đặt lịch</span>
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
              class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick(`grid-row2-${index}`)"
            >
              <div class="relative h-28 sm:h-32 md:h-36">
                <div :class="getModernCardBackground(index + 1)" class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Modern sport atmosphere effects -->
                  <div class="absolute top-0 left-1/4 w-16 h-8 bg-white/8 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-white/6 rounded-full blur-md"></div>
                  
                  <!-- Sport field/court lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20"></div>
                  <div v-if="(index + 1) !== 2" class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white/30 rounded-full"></div>
                  <div v-else class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white/30 rounded-sm"></div>
                  
                  <!-- Modern player silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-2">
                    <div class="relative">
                      <div :class="getPlayerSilhouette(index + 1, 0)" class="w-6 h-8 md:w-8 md:h-12 rounded-full transform -rotate-6"></div>
                    </div>
                    <div class="relative">
                      <div :class="getPlayerSilhouette(index + 1, 1)" class="w-6 h-8 md:w-8 md:h-12 rounded-full transform rotate-6"></div>
                    </div>
                  </div>
                  
                  <!-- Modern sport icon -->
                  <div class="absolute bottom-2 left-2">
                    <div :class="getModernIconBg(index + 1)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-sm md:text-lg">{{ getSportIcon(index + 1) }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Modern HOT badge -->
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Modern footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-2 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-bold text-gray-800 truncate">Team A vs Team B</div>
                    <div class="text-xs font-medium text-gray-700">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-gray-700">
                    <svg class="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="hidden sm:inline font-medium">Đặt lịch</span>
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
              class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick(`grid-row3-${index}`)"
            >
              <div class="relative h-28 sm:h-32 md:h-36">
                <div :class="getModernCardBackground(index + 2)" class="absolute inset-0 w-full h-full">
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Modern sport atmosphere effects -->
                  <div class="absolute top-0 left-1/4 w-16 h-8 bg-white/8 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-white/6 rounded-full blur-md"></div>
                  
                  <!-- Sport field/court lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20"></div>
                  <div v-if="(index + 2) !== 2" class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white/30 rounded-full"></div>
                  <div v-else class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white/30 rounded-sm"></div>
                  
                  <!-- Modern player silhouettes -->
                  <div class="absolute inset-0 flex items-center justify-center space-x-2">
                    <div class="relative">
                      <div :class="getPlayerSilhouette(index + 2, 0)" class="w-6 h-8 md:w-8 md:h-12 rounded-full transform -rotate-6"></div>
                    </div>
                    <div class="relative">
                      <div :class="getPlayerSilhouette(index + 2, 1)" class="w-6 h-8 md:w-8 md:h-12 rounded-full transform rotate-6"></div>
                    </div>
                  </div>
                  
                  <!-- Modern sport icon -->
                  <div class="absolute bottom-2 left-2">
                    <div :class="getModernIconBg(index + 2)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg">
                      <span class="text-white text-sm md:text-lg">{{ getSportIcon(index + 2) }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Modern HOT badge -->
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Modern footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-2 md:p-3">
                <div class="flex items-center justify-between">
                  <div class="text-xs md:text-sm">
                    <div class="font-bold text-gray-800 truncate">Team A vs Team B</div>
                    <div class="text-xs font-medium text-gray-700">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-gray-700">
                    <svg class="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="hidden sm:inline font-medium">Đặt lịch</span>
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

// Modern card backgrounds with darker, more atmospheric gradients
const getModernCardBackground = (index: number) => {
  const backgrounds = [
    'bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900',    // Basketball
    'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900', // Gaming
    'bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900', // Soccer
    'bg-gradient-to-br from-rose-900 via-red-800 to-pink-900',      // Volleyball
    'bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900'    // Tennis
  ]
  return backgrounds[index % backgrounds.length]
}

// Modern icon backgrounds with gradients
const getModernIconBg = (index: number) => {
  const colors = [
    'bg-gradient-to-br from-orange-500 to-amber-600',  // Basketball
    'bg-gradient-to-br from-purple-500 to-indigo-600', // Gaming
    'bg-gradient-to-br from-green-500 to-emerald-600', // Soccer
    'bg-gradient-to-br from-red-500 to-pink-600',      // Volleyball
    'bg-gradient-to-br from-blue-500 to-cyan-600'      // Tennis
  ]
  return colors[index % colors.length]
}

// Player silhouettes with sport-specific colors
const getPlayerSilhouette = (index: number, playerIndex: number) => {
  const sportColors = [
    // Basketball
    playerIndex === 0 ? 'bg-gradient-to-b from-orange-600/40 to-amber-700/60' : 'bg-gradient-to-b from-gray-400/40 to-gray-600/60',
    // Gaming
    playerIndex === 0 ? 'bg-gradient-to-b from-purple-600/40 to-indigo-700/60' : 'bg-gradient-to-b from-pink-500/40 to-purple-700/60',
    // Soccer
    playerIndex === 0 ? 'bg-gradient-to-b from-green-600/40 to-emerald-700/60' : 'bg-gradient-to-b from-blue-500/40 to-green-700/60',
    // Volleyball
    playerIndex === 0 ? 'bg-gradient-to-b from-red-600/40 to-pink-700/60' : 'bg-gradient-to-b from-purple-500/40 to-red-700/60',
    // Tennis
    playerIndex === 0 ? 'bg-gradient-to-b from-blue-600/40 to-cyan-700/60' : 'bg-gradient-to-b from-indigo-500/40 to-blue-700/60'
  ]
  return sportColors[index % sportColors.length]
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
