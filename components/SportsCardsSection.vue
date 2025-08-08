<template>
  <section class="bg-white py-6 md:py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Mobile LIVE Badge -->
      <div class="lg:hidden mb-6">
        <div class="bg-red-500 text-white px-6 py-3 rounded-2xl text-center text-xl font-bold shadow-lg inline-block">
          LIVE
        </div>
      </div>
      
      <!-- First Section - Horizontal Scroll on Desktop, Grid on Mobile -->
      <div class="mb-8 md:mb-12">
        <!-- Section Header - Hidden on Mobile -->
        <div class="hidden lg:flex items-center justify-between mb-4 md:mb-6">
          <h2 class="text-sm md:text-lg font-medium text-gray-400">SECTION_Thumbnails</h2>
          <button class="text-xs md:text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1">
            <span>Xem tất cả</span>
            <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile 2x2 Grid / Desktop Horizontal Scroll -->
        <div class="relative">
          <!-- Desktop Navigation Arrows -->
          <button 
            @click="scrollLeft"
            class="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all"
          >
            <svg class="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            @click="scrollRight"
            class="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all"
          >
            <svg class="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Mobile 2x2 Grid -->
          <div class="lg:hidden grid grid-cols-2 gap-3 px-2">
            <!-- Only show first 4 cards on mobile -->
            <!-- Mobile Basketball Card 1 -->
            <div 
              class="w-full bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('basketball-1')"
            >
              <div class="relative h-24 lg:h-44">
                <!-- Real Basketball Image Background -->
                <div class="absolute inset-0">
                  <img 
                    src="/images/card/sports/basketball-players-basketball-match.avif" 
                    alt="Basketball match"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced lighting effects -->
                  <div class="absolute top-0 left-1/4 w-32 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/4 w-24 h-12 bg-amber-400/15 rounded-full blur-lg"></div>
                  
                  <!-- Basketball Icon with real styling -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-.55 0-1 .45-1 1v5.59l-2.29-2.3c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4 4c.39.39 1.02.39 1.41 0l4-4c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 12.59V7c0-.55-.45-1-1-1z"/>
                      </svg>
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

            <!-- Mobile Gaming Card 2 -->
            <div 
              class="w-full bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('gaming-1')"
            >
              <div class="relative h-24 lg:h-44">
                <!-- Real Gaming/eSports Image Background -->
                <div class="absolute inset-0">
                  <img 
                    src="/images/card/sports/starcraft-2-tournaments-esports.jpg" 
                    alt="eSports tournament"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced gaming effects -->
                  <div class="absolute top-0 left-1/4 w-16 h-8 bg-purple-400/20 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-blue-400/15 rounded-full blur-md"></div>
                  
                  <!-- Gaming Icon with controller SVG -->
                  <div class="absolute bottom-2 left-2">
                    <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
                        <circle cx="8.5" cy="10.5" r="1"/>
                        <circle cx="15.5" cy="10.5" r="1"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-2">
                <div class="flex items-center justify-between">
                  <div class="text-xs">
                    <div class="font-bold text-gray-800">Team A vs Team B</div>
                    <div class="text-xs font-medium text-gray-700">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-gray-700">
                    <span class="text-sm">✏️</span>
                    <span class="font-medium text-xs">Hủy lịch</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile Soccer Card 3 -->
            <div 
              class="w-full bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('soccer-match')"
            >
              <div class="relative h-24 lg:h-44">
                <!-- Modern Soccer Stadium Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
                  <!-- Stadium atmosphere overlay -->
                  <div class="absolute inset-0 bg-black/60"></div>
                  
                  <!-- Stadium lights effect -->
                  <div class="absolute top-0 left-1/4 w-16 h-8 bg-green-400/10 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-emerald-400/8 rounded-full blur-md"></div>
                  
                  <!-- Soccer field lines -->
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400/30"></div>
                  <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-green-400/40 rounded-full"></div>
                  
                  <!-- Match Info Card -->
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <!-- League Badge -->
                    <div class="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs px-2 py-1 rounded-full mb-1 font-bold shadow-lg">
                      DEMINAV
                    </div>
                    
                    <!-- Match Date/Time -->
                    <div class="text-xs mb-2 text-gray-200 font-medium">NGOÀI HẠNG ANH | 25.09.2023 | 20:20</div>
                    
                    <!-- Teams with Real Logos -->
                    <div class="flex items-center space-x-2">
                      <div class="text-center">
                        <div class="w-6 h-6 bg-white rounded-full mb-1 flex items-center justify-center shadow-lg p-0.5">
                          <img 
                            src="/images/card/logo/Macarthur_FC.webp" 
                            alt="Team A"
                            class="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <div class="text-xs font-medium">TEAM A</div>
                      </div>
                      
                      <div class="text-sm font-bold bg-white/10 px-2 py-0.5 rounded-md">VS</div>
                      
                      <div class="text-center">
                        <div class="w-6 h-6 bg-white rounded-full mb-1 flex items-center justify-center shadow-lg p-0.5">
                          <img 
                            src="/images/card/logo/phnom-penh-crown-fc.png" 
                            alt="Team B"
                            class="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <div class="text-xs font-medium">TEAM B</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Soccer Ball Icon -->
                  <div class="absolute bottom-2 left-2">
                    <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
                
                <!-- LIVE Badge -->
                <div class="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  LIVE
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-2">
                <div class="flex items-center justify-between">
                  <div class="text-xs">
                    <div class="font-bold text-gray-800">Team A vs Team B</div>
                    <div class="text-xs font-medium text-gray-700">BLV NONAME</div>
                  </div>
                  <div class="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                    LIVE
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile Basketball Card 4 -->
            <div 
              class="w-full bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('basketball-2')"
            >
              <div class="relative h-24 lg:h-44">
                <!-- Real Basketball Image Background -->
                <div class="absolute inset-0">
                  <img 
                    src="/images/card/sports/basketball-players-basketball-match.avif" 
                    alt="Basketball match"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced lighting effects -->
                  <div class="absolute top-0 left-1/3 w-16 h-8 bg-orange-400/20 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/3 w-12 h-6 bg-amber-400/15 rounded-full blur-md"></div>
                  
                  <!-- Basketball Icon with real styling -->
                  <div class="absolute bottom-2 left-2">
                    <div class="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-.55 0-1 .45-1 1v5.59l-2.29-2.3c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4 4c.39.39 1.02.39 1.41 0l4-4c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 12.59V7c0-.55-.45-1-1-1z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- HOT Badge -->
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-400/50">
                  HOT
                </div>
              </div>
              
              <!-- Card Footer -->
              <div class="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 p-2">
                <div class="flex items-center justify-between">
                  <div class="text-xs">
                    <div class="font-bold text-gray-800">Team A vs Team B</div>
                    <div class="text-xs font-medium text-gray-700">BLV NONAME</div>
                  </div>
                  <div class="flex items-center space-x-1 text-xs text-gray-700">
                    <svg class="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <span class="font-medium text-xs">Đặt lịch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop Scrollable Cards -->
          <div 
            ref="scrollContainer"
            class="hidden lg:flex space-x-3 md:space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            <!-- Gaming/eSports Card -->
            <div 
              class="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              @click="handleCardClick('gaming-1')"
            >
              <div class="relative h-36 md:h-44">
                <!-- Real Gaming/eSports Image Background -->
                <div class="absolute inset-0">
                  <img 
                    src="/images/card/sports/starcraft-2-tournaments-esports.jpg" 
                    alt="eSports tournament"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced gaming effects -->
                  <div class="absolute top-0 left-1/4 w-32 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/4 w-24 h-12 bg-blue-400/15 rounded-full blur-lg"></div>
                  
                  <!-- Gaming Icon with controller SVG -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
                        <circle cx="8.5" cy="10.5" r="1"/>
                        <circle cx="15.5" cy="10.5" r="1"/>
                      </svg>
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
                    
                    <!-- Teams with Real Logos -->
                    <div class="flex items-center space-x-4">
                      <div class="text-center">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full mb-1 flex items-center justify-center shadow-lg p-1">
                          <img 
                            src="/images/card/logo/Macarthur_FC.webp" 
                            alt="Team A"
                            class="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <div class="text-xs font-medium">TEAM A</div>
                      </div>
                      
                      <div class="text-lg md:text-xl font-bold bg-white/10 px-3 py-1 rounded-lg">VS</div>
                      
                      <div class="text-center">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full mb-1 flex items-center justify-center shadow-lg p-1">
                          <img 
                            src="/images/card/logo/phnom-penh-crown-fc.png" 
                            alt="Team B"
                            class="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <div class="text-xs font-medium">TEAM B</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Soccer Ball Icon -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
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
                <!-- Real Basketball Image Background -->
                <div class="absolute inset-0">
                  <img 
                    src="/images/card/sports/basketball-players-basketball-match.avif" 
                    alt="Basketball match"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced lighting effects -->
                  <div class="absolute top-0 left-1/3 w-28 h-14 bg-orange-400/20 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/3 w-20 h-10 bg-amber-400/15 rounded-full blur-lg"></div>
                  
                  <!-- Basketball Icon with real styling -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-.55 0-1 .45-1 1v5.59l-2.29-2.3c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4 4c.39.39 1.02.39 1.41 0l4-4c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 12.59V7c0-.55-.45-1-1-1z"/>
                      </svg>
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
                <!-- Real Gaming/eSports Image Background -->
                <div class="absolute inset-0">
                  <img 
                    src="/images/card/sports/starcraft-2-tournaments-esports.jpg" 
                    alt="eSports tournament"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced gaming effects -->
                  <div class="absolute top-0 left-1/3 w-28 h-14 bg-purple-400/20 rounded-full blur-xl"></div>
                  <div class="absolute top-0 right-1/3 w-20 h-10 bg-blue-400/15 rounded-full blur-lg"></div>
                  
                  <!-- Gaming Icon with controller SVG -->
                  <div class="absolute bottom-3 left-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
                        <circle cx="8.5" cy="10.5" r="1"/>
                        <circle cx="15.5" cy="10.5" r="1"/>
                      </svg>
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

      <!-- Desktop Second Section - Grid Layout -->
      <div class="hidden lg:block">
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
                <!-- Real Sport Image Background -->
                <div class="absolute inset-0">
                  <img 
                    :src="getSportImage(index)" 
                    :alt="`Sport ${index + 1}`"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced lighting effects -->
                  <div v-if="index % 2 === 0" class="absolute top-0 left-1/4 w-16 h-8 bg-orange-400/20 rounded-full blur-lg"></div>
                  <div v-else class="absolute top-0 left-1/4 w-16 h-8 bg-purple-400/20 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-white/10 rounded-full blur-md"></div>
                  
                  <!-- Modern sport icon with SVG -->
                  <div class="absolute bottom-2 left-2">
                    <div :class="getModernIconBg(index)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <!-- Basketball Icon -->
                      <svg v-if="index % 5 === 0" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                      <!-- Gaming Controller Icon -->
                      <svg v-else-if="index % 5 === 1" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
                        <circle cx="8.5" cy="10.5" r="1"/>
                        <circle cx="15.5" cy="10.5" r="1"/>
                      </svg>
                      <!-- Default Sport Icon -->
                      <svg v-else class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
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
                <!-- Real Sport Image Background -->
                <div class="absolute inset-0">
                  <img 
                    :src="getSportImage(index + 1)" 
                    :alt="`Sport ${index + 2}`"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced lighting effects -->
                  <div v-if="(index + 1) % 2 === 0" class="absolute top-0 left-1/4 w-16 h-8 bg-orange-400/20 rounded-full blur-lg"></div>
                  <div v-else class="absolute top-0 left-1/4 w-16 h-8 bg-purple-400/20 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-white/10 rounded-full blur-md"></div>
                  
                  <!-- Modern sport icon with SVG -->
                  <div class="absolute bottom-2 left-2">
                    <div :class="getModernIconBg(index + 1)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <!-- Basketball Icon -->
                      <svg v-if="(index + 1) % 5 === 0" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                      <!-- Gaming Controller Icon -->
                      <svg v-else-if="(index + 1) % 5 === 1" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
                        <circle cx="8.5" cy="10.5" r="1"/>
                        <circle cx="15.5" cy="10.5" r="1"/>
                      </svg>
                      <!-- Soccer Ball Icon -->
                      <svg v-else-if="(index + 1) % 5 === 2" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <!-- Default Sport Icon -->
                      <svg v-else class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
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
                <!-- Real Sport Image Background -->
                <div class="absolute inset-0">
                  <img 
                    :src="getSportImage(index + 2)" 
                    :alt="`Sport ${index + 3}`"
                    class="w-full h-full object-cover"
                  />
                  <!-- Dark overlay for better text readability -->
                  <div class="absolute inset-0 bg-black/50"></div>
                  
                  <!-- Enhanced lighting effects -->
                  <div v-if="(index + 2) % 2 === 0" class="absolute top-0 left-1/4 w-16 h-8 bg-orange-400/20 rounded-full blur-lg"></div>
                  <div v-else class="absolute top-0 left-1/4 w-16 h-8 bg-purple-400/20 rounded-full blur-lg"></div>
                  <div class="absolute top-0 right-1/4 w-12 h-6 bg-white/10 rounded-full blur-md"></div>
                  
                  <!-- Modern sport icon with SVG -->
                  <div class="absolute bottom-2 left-2">
                    <div :class="getModernIconBg(index + 2)" class="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <!-- Basketball Icon -->
                      <svg v-if="(index + 2) % 5 === 0" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                      <!-- Gaming Controller Icon -->
                      <svg v-else-if="(index + 2) % 5 === 1" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
                        <circle cx="8.5" cy="10.5" r="1"/>
                        <circle cx="15.5" cy="10.5" r="1"/>
                      </svg>
                      <!-- Soccer Ball Icon -->
                      <svg v-else-if="(index + 2) % 5 === 2" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <!-- Volleyball Icon -->
                      <svg v-else-if="(index + 2) % 5 === 3" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
                      </svg>
                      <!-- Tennis Icon -->
                      <svg v-else-if="(index + 2) % 5 === 4" class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                      </svg>
                      <!-- Default Sport Icon -->
                      <svg v-else class="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
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

// Get real sport images for grid cards
const getSportImage = (index: number) => {
  const images = [
    '/images/card/sports/basketball-players-basketball-match.avif', // Basketball
    '/images/card/sports/starcraft-2-tournaments-esports.jpg',      // Gaming
    '/images/card/sports/basketball-players-basketball-match.avif', // Soccer (using basketball as fallback)
    '/images/card/sports/basketball-players-basketball-match.avif', // Volleyball (using basketball as fallback)
    '/images/card/sports/starcraft-2-tournaments-esports.jpg'       // Tennis (using gaming as fallback)
  ]
  return images[index % images.length]
}

// Get SVG icons for different sports
const getSportIconSvg = (index: number) => {
  const sportType = index % 5
  switch (sportType) {
    case 0: // Basketball
      return `<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6c-.55 0-1 .45-1 1v5.59l-2.29-2.3c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4 4c.39.39 1.02.39 1.41 0l4-4c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 12.59V7c0-.55-.45-1-1-1z"/>
      </svg>`
    case 1: // Gaming
      return `<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
        <circle cx="8.5" cy="10.5" r="1"/>
        <circle cx="15.5" cy="10.5" r="1"/>
      </svg>`
    case 2: // Soccer
      return `<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>`
    case 3: // Volleyball
      return `<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
      </svg>`
    case 4: // Tennis
      return `<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>`
    default:
      return getSportIcon(index)
  }
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
