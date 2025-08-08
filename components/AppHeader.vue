<template>
  <header class="bg-black text-white relative">
    <!-- Desktop Logo spanning both rows -->
    <div class="hidden lg:block absolute top-0 left-0 justify-end z-20">
      <div class="logo-shape-full"></div>
      <div class="absolute top-2 left-[115px] text-white text-[6.8rem] flex items-center h-24 z-30">
        LOGO
      </div>
    </div>
    
    <!-- Mobile Header -->
    <div class="lg:hidden bg-gradient-to-r from-[rgba(248,232,137,1)] to-[rgba(228,183,100,1)] px-4 py-3 flex items-center justify-between relative z-30">
      <!-- Mobile Logo -->
      <div class="flex items-center">
        <div class="bg-black text-white px-6 py-2 rounded-full text-xl font-bold">
          LOGO
        </div>
      </div>
      
      <!-- Sports Icons Container -->
      <div class="flex items-center space-x-3 bg-black/80 rounded-full px-4 py-2">
        <!-- Soccer Ball -->
        <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </button>
        
        <!-- Basketball -->
        <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-.55 0-1 .45-1 1v5.59l-2.29-2.3c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4 4c.39.39 1.02.39 1.41 0l4-4c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 12.59V7c0-.55-.45-1-1-1z"/>
          </svg>
        </button>
        
        <!-- Gaming Controller -->
        <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.97 16c.7 0 1.3-.3 1.8-.8l2.1-2.7c.2-.2.5-.2.7 0l2.1 2.7c.5.5 1.1.8 1.8.8h1.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1.5z"/>
            <circle cx="8.5" cy="10.5" r="1"/>
            <circle cx="15.5" cy="10.5" r="1"/>
          </svg>
        </button>
        
        <!-- Clock/Time -->
        <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        </button>
      </div>
      
      <!-- Right Side Controls -->
      <div class="flex items-center space-x-3">
        <!-- Language Selector -->
        <div class="bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1">
          <div class="w-4 h-4 rounded-full bg-red-800 flex items-center justify-center">
            <span class="text-xs font-bold text-yellow-400">⭐</span>
          </div>
          <span>Vn</span>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Desktop Top Navigation Bar -->
    <div class="hidden lg:block relative bg-gradient-to-r from-[rgba(248,232,137,1)] to-[rgba(228,183,100,1)] px-4 py-3">
      <div class="header-container w-full min-w-[1024px] max-w-[1440px] mx-auto flex items-center justify-between px-6">
        <!-- Logo spacer -->
        <div class="w-48"></div>
        
        <!-- Main Navigation -->
        <nav class="hidden lg:flex items-center space-x-12 text-sm font-medium text-black">
          <div class="relative main-nav-dropdown">
            <!-- Trigger Button -->
            <button 
              @click="toggleMainNavDropdown"
              class="hover:text-gray-800 transition-colors"
            >
              <span>{{ t.liveSchedule }}</span>
            </button>
            
            <!-- Combined Button + Dropdown -->
            <div 
              v-if="showMainNavDropdown" 
              class="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 w-[140px]"
            >
              <!-- Header Button -->
              <button 
                @click="toggleMainNavDropdown"
                class="w-full bg-gradient-to-r from-gray-800 to-black text-yellow-400 px-4 py-3 text-left font-semibold text-sm tracking-wide rounded-full mb-2"
              >
                <span>{{ t.liveSchedule }}</span>
              </button>
              <!-- Menu Items -->
              <div class="p-2">
                <!-- Football -->
                <button 
                  @click="selectSport('football')" 
                  class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1"
                >
                  <span class="text-lg">⚽</span>
                  <span class="text-black text-sm font-medium">BÓNG ĐÁ</span>
                </button>
                
                <!-- Horse Racing -->
                <button 
                  @click="selectSport('horse-racing')" 
                  class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1"
                >
                  <span class="text-lg">🏃</span>
                  <span class="text-black text-sm font-medium">ĐUA BỊ</span>
                </button>
                
                <!-- Basketball -->
                <button 
                  @click="selectSport('basketball')" 
                  class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1"
                >
                  <span class="text-lg">🏀</span>
                  <span class="text-black text-sm font-medium">BÓNG RỔ</span>
                </button>
                
                <!-- E-Sports -->
                <button 
                  @click="selectSport('esports')" 
                  class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1"
                >
                  <span class="text-lg">🎮</span>
                  <span class="text-black text-sm font-medium">E-SPORTS</span>
                </button>
                
                <!-- Casino -->
                <button 
                  @click="selectSport('casino')" 
                  class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20"
                >
                  <span class="text-lg">🎰</span>
                  <span class="text-black text-sm font-medium">CASINO</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Match Schedule Dropdown -->
          <div class="relative match-schedule-dropdown">
            <button 
              @click="toggleMatchScheduleDropdown"
              class="hover:text-gray-800 transition-colors"
            >
              <span>{{ t.matchSchedule }}</span>
            </button>
            
            <div 
              v-if="showMatchScheduleDropdown" 
              class="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 w-[140px]"
            >
              <!-- Header Button -->
              <button 
                @click="toggleMatchScheduleDropdown"
                class="w-full bg-gradient-to-r from-gray-800 to-black text-yellow-400 px-4 py-3 text-left font-semibold text-sm tracking-wide rounded-full mb-2"
              >
                <span>{{ t.matchSchedule }}</span>
              </button>
              <!-- Menu Items -->
              <div class="p-2">
                <button @click="selectSportFromNav('football', 'match-schedule')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">⚽</span>
                  <span class="text-black text-sm font-medium">BÓNG ĐÁ</span>
                </button>
                <button @click="selectSportFromNav('horse-racing', 'match-schedule')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏃</span>
                  <span class="text-black text-sm font-medium">ĐUA BỊ</span>
                </button>
                <button @click="selectSportFromNav('basketball', 'match-schedule')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏀</span>
                  <span class="text-black text-sm font-medium">BÓNG RỔ</span>
                </button>
                <button @click="selectSportFromNav('esports', 'match-schedule')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🎮</span>
                  <span class="text-black text-sm font-medium">E-SPORTS</span>
                </button>
                <button @click="selectSportFromNav('casino', 'match-schedule')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20">
                  <span class="text-lg">🎰</span>
                  <span class="text-black text-sm font-medium">CASINO</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Odds Dropdown -->
          <div class="relative odds-dropdown">
            <button 
              @click="toggleOddsDropdown"
              class="hover:text-gray-800 transition-colors"
            >
              <span>{{ t.odds }}</span>
            </button>
            
            <div 
              v-if="showOddsDropdown" 
              class="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 w-[140px]"
            >
              <!-- Header Button -->
              <button 
                @click="toggleOddsDropdown"
                class="w-full bg-gradient-to-r from-gray-800 to-black text-yellow-400 px-4 py-3 text-left font-semibold text-sm tracking-wide rounded-full mb-2"
              >
                <span>{{ t.odds }}</span>
              </button>
              <!-- Menu Items -->
              <div class="p-2">
                <button @click="selectSportFromNav('football', 'odds')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">⚽</span>
                  <span class="text-black text-sm font-medium">BÓNG ĐÁ</span>
                </button>
                <button @click="selectSportFromNav('horse-racing', 'odds')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏃</span>
                  <span class="text-black text-sm font-medium">ĐUA BỊ</span>
                </button>
                <button @click="selectSportFromNav('basketball', 'odds')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏀</span>
                  <span class="text-black text-sm font-medium">BÓNG RỔ</span>
                </button>
                <button @click="selectSportFromNav('esports', 'odds')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🎮</span>
                  <span class="text-black text-sm font-medium">E-SPORTS</span>
                </button>
                <button @click="selectSportFromNav('casino', 'odds')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20">
                  <span class="text-lg">🎰</span>
                  <span class="text-black text-sm font-medium">CASINO</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Results Dropdown -->
          <div class="relative results-dropdown">
            <button 
              @click="toggleResultsDropdown"
              class="hover:text-gray-800 transition-colors"
            >
              <span>{{ t.results }}</span>
            </button>
            
            <div 
              v-if="showResultsDropdown" 
              class="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 w-[140px]"
            >
              <!-- Header Button -->
              <button 
                @click="toggleResultsDropdown"
                class="w-full bg-gradient-to-r from-gray-800 to-black text-yellow-400 px-4 py-3 text-left font-semibold text-sm tracking-wide rounded-full mb-2"
              >
                <span>{{ t.results }}</span>
              </button>
              <!-- Menu Items -->
              <div class="p-2">
                <button @click="selectSportFromNav('football', 'results')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">⚽</span>
                  <span class="text-black text-sm font-medium">BÓNG ĐÁ</span>
                </button>
                <button @click="selectSportFromNav('horse-racing', 'results')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏃</span>
                  <span class="text-black text-sm font-medium">ĐUA BỊ</span>
                </button>
                <button @click="selectSportFromNav('basketball', 'results')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏀</span>
                  <span class="text-black text-sm font-medium">BÓNG RỔ</span>
                </button>
                <button @click="selectSportFromNav('esports', 'results')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🎮</span>
                  <span class="text-black text-sm font-medium">E-SPORTS</span>
                </button>
                <button @click="selectSportFromNav('casino', 'results')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20">
                  <span class="text-lg">🎰</span>
                  <span class="text-black text-sm font-medium">CASINO</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Chat Dropdown -->
          <div class="relative chat-dropdown">
            <button 
              @click="toggleChatDropdown"
              class="hover:text-gray-800 transition-colors"
            >
              <span>{{ t.chat }}</span>
            </button>
            
            <div 
              v-if="showChatDropdown" 
              class="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 w-[140px]"
            >
              <!-- Header Button -->
              <button 
                @click="toggleChatDropdown"
                class="w-full bg-gradient-to-r from-gray-800 to-black text-yellow-400 px-4 py-3 text-left font-semibold text-sm tracking-wide rounded-full mb-2"
              >
                <span>{{ t.chat }}</span>
              </button>
              <!-- Menu Items -->
              <div class="p-2">
                <button @click="selectSportFromNav('football', 'chat')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">⚽</span>
                  <span class="text-black text-sm font-medium">BÓNG ĐÁ</span>
                </button>
                <button @click="selectSportFromNav('horse-racing', 'chat')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏃</span>
                  <span class="text-black text-sm font-medium">ĐUA BỊ</span>
                </button>
                <button @click="selectSportFromNav('basketball', 'chat')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏀</span>
                  <span class="text-black text-sm font-medium">BÓNG RỔ</span>
                </button>
                <button @click="selectSportFromNav('esports', 'chat')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🎮</span>
                  <span class="text-black text-sm font-medium">E-SPORTS</span>
                </button>
                <button @click="selectSportFromNav('casino', 'chat')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20">
                  <span class="text-lg">🎰</span>
                  <span class="text-black text-sm font-medium">CASINO</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- News Dropdown -->
          <div class="relative news-dropdown">
            <button 
              @click="toggleNewsDropdown"
              class="hover:text-gray-800 transition-colors"
            >
              <span>{{ t.news }}</span>
            </button>
            
            <div 
              v-if="showNewsDropdown" 
              class="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 w-[140px]"
            >
              <!-- Header Button -->
              <button 
                @click="toggleNewsDropdown"
                class="w-full bg-gradient-to-r from-gray-800 to-black text-yellow-400 px-4 py-3 text-left font-semibold text-sm tracking-wide rounded-full mb-2"
              >
                <span>{{ t.news }}</span>
              </button>
              <!-- Menu Items -->
              <div class="p-2">
                <button @click="selectSportFromNav('football', 'news')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">⚽</span>
                  <span class="text-black text-sm font-medium">BÓNG ĐÁ</span>
                </button>
                <button @click="selectSportFromNav('horse-racing', 'news')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏃</span>
                  <span class="text-black text-sm font-medium">ĐUA BỊ</span>
                </button>
                <button @click="selectSportFromNav('basketball', 'news')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🏀</span>
                  <span class="text-black text-sm font-medium">BÓNG RỔ</span>
                </button>
                <button @click="selectSportFromNav('esports', 'news')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20 mb-1">
                  <span class="text-lg">🎮</span>
                  <span class="text-black text-sm font-medium">E-SPORTS</span>
                </button>
                <button @click="selectSportFromNav('casino', 'news')" class="w-full flex items-center space-x-2 px-3 py-2 text-left transition-all duration-200 hover:bg-white/20">
                  <span class="text-lg">🎰</span>
                  <span class="text-black text-sm font-medium">CASINO</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <!-- User Actions -->
        <div v-if="!isLoggedIn" class="flex items-center space-x-3 h-12">
          <button @click="login" class="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            {{ t.register }}
          </button>
          <button @click="login" class="px-5 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors shadow-sm">
            {{ t.login }}
          </button>
        </div>
        
        <!-- Logged In User Section -->
        <div v-else class="flex flex-col items-end space-y-1 h-12 justify-end">
          <!-- Greeting Text -->
          <div class="text-xs text-black font-medium mt-2">
            {{ selectedLanguage === 'TIẾNG VIỆT' ? 'Xin chào, NguyenVanDen' : 'Hello, NguyenVanDen' }}
          </div>
          <!-- Single Black Container -->
          <div class="flex items-center space-x-2.5 bg-black text-white px-3 py-1.5 rounded-full shadow-lg overflow-visible">
            <!-- Balance/Coins -->
            <div class="flex items-center space-x-1.5">
              <div class="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span class="text-xs text-black font-bold">🪙</span>
              </div>
              <span class="font-bold text-white text-sm">1000</span>
              <button class="ml-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <span class="text-xs text-black font-bold">+</span>
              </button>
            </div>
            
            <!-- Notifications -->
            <div class="flex items-center space-x-2">
              <!-- Bell Icon -->
              <div class="relative">
                <svg class="w-5 h-5 text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                <div class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
                  <span class="text-xs text-white font-bold">10</span>
                </div>
              </div>
              
              <!-- Message Icon -->
              <div class="relative">
                <svg class="w-5 h-5 text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
                  <span class="text-xs text-white font-bold">2</span>
                </div>
              </div>
              
              <!-- Calendar/Settings Icon -->
              <svg class="w-5 h-5 text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
            </div>
            
            <!-- Profile Avatar -->
            <div class="relative w-10 h-10 profile-dropdown-container">
              <div @click="toggleProfileDropdown" class="w-full h-full relative cursor-pointer hover:opacity-90 transition-opacity">
                <!-- Simplified Premium Avatar Border -->
                <div class="w-16 h-16 absolute -top-3 -left-3 z-10">
                  <div class="w-full h-full rounded-full relative">
                    <!-- Single golden border frame -->
                    <div class="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-2 shadow-xl">
                      <!-- Transparent center for profile image -->
                      <div class="w-full h-full rounded-full bg-transparent"></div>
                    </div>
                    
                    <!-- Decorative Gems positioned around the border -->
                    <!-- Top gem -->
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 z-20">
                      <div class="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 border border-amber-600 shadow-md"></div>
                      <div class="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-gradient-to-tr from-white to-yellow-100 opacity-80"></div>
                    </div>
                    
                    <!-- Bottom gem -->
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 z-20">
                      <div class="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 border border-amber-600 shadow-md"></div>
                      <div class="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-gradient-to-tr from-white to-yellow-100 opacity-80"></div>
                    </div>
                    
                    <!-- Left gem -->
                    <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 z-20">
                      <div class="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 border border-amber-600 shadow-md"></div>
                      <div class="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-gradient-to-tr from-white to-yellow-100 opacity-80"></div>
                    </div>
                    
                    <!-- Right gem -->
                    <div class="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 z-20">
                      <div class="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 border border-amber-600 shadow-md"></div>
                      <div class="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-gradient-to-tr from-white to-yellow-100 opacity-80"></div>
                    </div>
                  </div>
                </div>

                <!-- Profile Image (positioned on top of border) -->
                <img 
                  src="/images/profile4.jpg" 
                  alt="Profile" 
                  class="w-10 h-10 rounded-full object-cover absolute top-0 left-0 z-30 shadow-lg border-2 border-white"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <!-- Fallback user icon -->
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 absolute top-0 left-0 z-30 shadow-lg border-2 border-white hidden items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              
              <!-- Optimized Level Badge -->
              <div class="absolute -bottom-1 -right-1 w-6 h-6 z-40">
                <!-- Badge background -->
                <div class="w-full h-full rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-yellow-400 shadow-xl flex items-center justify-center">
                  <!-- Inner golden circle -->
                  <div class="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                    <span class="text-xs text-black font-bold leading-none">20</span>
                  </div>
                </div>
                <!-- Badge highlight -->
                <div class="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white opacity-30"></div>
              </div>
            </div>
            
            <!-- Profile Dropdown Menu -->
            <div 
              v-if="showProfileDropdown" 
              class="absolute top-full right-0 mt-2 backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden z-50 min-w-[280px]"
              style="backdrop-filter: blur(20px); border-radius: 2rem;"
            >
              <!-- Menu Items -->
              <div class="p-4">
                <!-- TRUNG TÂM TÀI KHOẢN -->
                <button 
                  @click="navigateToAccountCenter" 
                  :class="[
                    'w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-200 rounded-full mb-3',
                    selectedMenuItem === 'account-center' 
                      ? 'bg-gradient-to-r from-gray-800 to-black' 
                      : 'hover:bg-white/20'
                  ]"
                >
                  <svg :class="selectedMenuItem === 'account-center' ? 'w-6 h-6 text-yellow-400' : 'w-6 h-6 text-black'" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                  <span :class="selectedMenuItem === 'account-center' ? 'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-sm tracking-wide' : 'text-black text-base font-semibold'">TRUNG TÂM TÀI KHOẢN</span>
                </button>
                <!-- Personal Page -->
                <button 
                  @click="navigateToProfile" 
                  :class="[
                    'w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-200 rounded-full mb-3',
                    selectedMenuItem === 'profile' 
                      ? 'bg-gradient-to-r from-gray-800 to-black' 
                      : 'hover:bg-white/20'
                  ]"
                >
                  <svg :class="selectedMenuItem === 'profile' ? 'w-6 h-6 text-yellow-400' : 'w-6 h-6 text-black'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                  <span :class="selectedMenuItem === 'profile' ? 'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-sm tracking-wide' : 'text-black text-base font-semibold'">TRANG CÁ NHÂN</span>
                </button>
                
                <!-- Tasks -->
                <button 
                  @click="navigateToTasks" 
                  :class="[
                    'w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-200 rounded-full mb-3',
                    selectedMenuItem === 'tasks' 
                      ? 'bg-gradient-to-r from-gray-800 to-black' 
                      : 'hover:bg-white/20'
                  ]"
                >
                  <svg :class="selectedMenuItem === 'tasks' ? 'w-6 h-6 text-yellow-400' : 'w-6 h-6 text-black'" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                  </svg>
                  <span :class="selectedMenuItem === 'tasks' ? 'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-sm tracking-wide' : 'text-black text-base font-semibold'">NHIỆM VỤ</span>
                </button>
                
                <!-- Wallet -->
                <button 
                  @click="navigateToWallet" 
                  :class="[
                    'w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-200 rounded-full mb-3',
                    selectedMenuItem === 'wallet' 
                      ? 'bg-gradient-to-r from-gray-800 to-black' 
                      : 'hover:bg-white/20'
                  ]"
                >
                  <svg :class="selectedMenuItem === 'wallet' ? 'w-6 h-6 text-yellow-400' : 'w-6 h-6 text-black'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
                  </svg>
                  <span :class="selectedMenuItem === 'wallet' ? 'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-sm tracking-wide' : 'text-black text-base font-semibold'">VÍ CỦA BẠN</span>
                </button>
                
                <!-- Transaction History -->
                <button 
                  @click="navigateToHistory" 
                  :class="[
                    'w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-200 rounded-full mb-3',
                    selectedMenuItem === 'history' 
                      ? 'bg-gradient-to-r from-gray-800 to-black' 
                      : 'hover:bg-white/20'
                  ]"
                >
                  <svg :class="selectedMenuItem === 'history' ? 'w-6 h-6 text-yellow-400' : 'w-6 h-6 text-black'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                  <span :class="selectedMenuItem === 'history' ? 'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-sm tracking-wide' : 'text-black text-base font-semibold'">LỊCH SỬ GIAO DỊCH</span>
                </button>
                
                <!-- Logout -->
                <button 
                  @click="logout" 
                  :class="[
                    'w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-200 rounded-full',
                    selectedMenuItem === 'logout' 
                      ? 'bg-gradient-to-r from-gray-800 to-black' 
                      : 'hover:bg-white/20'
                  ]"
                >
                  <svg :class="selectedMenuItem === 'logout' ? 'w-6 h-6 text-yellow-400' : 'w-6 h-6 text-black'" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 01-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
                  </svg>
                  <span :class="selectedMenuItem === 'logout' ? 'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-sm tracking-wide' : 'text-black text-base font-semibold'">THOÁT TÀI KHOẢN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Desktop Secondary Navigation -->
    <div class="hidden lg:block bg-black px-4 py-3">
      <div class="header-container w-full min-w-[1024px] max-w-[1440px] mx-auto flex items-center px-6">
        <!-- Secondary navigation starts right after logo -->
        <nav class="hidden lg:flex items-center space-x-8 flex-1" style="margin-left: 325px;">
          <div class="flex items-center space-x-2">
            <font-awesome-icon :icon="['far', 'comment']" class="w-6 h-6 gold-gradient" />
            <span class="text-sm gold-text">{{ t.board }}</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <font-awesome-icon :icon="['far', 'play-circle']" class="w-6 h-6 gold-gradient" />
            <span class="text-sm gold-text">{{ t.reels }}</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="play" class="w-6 h-6 gold-gradient" />
            <span class="text-sm gold-text">{{ t.highlight }}</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="crown" class="w-6 h-6 gold-gradient" />
            <span class="text-sm gold-text">{{ t.tipBet }}</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="photo-film" class="w-6 h-6 gold-gradient" />
            <span class="text-sm gold-text">{{ t.movies }}</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="book" class="w-6 h-6 gold-gradient" />
            <span class="text-sm gold-text">{{ t.comics }}</span>
          </div>
        </nav>

        <!-- Language Selector and Toggle Switch -->
        <div class="flex items-center space-x-3 ml-auto">
          <!-- Language Selector -->
          <div class="relative language-dropdown">
            <button 
              @click="toggleLanguageDropdown"
              class="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-red-700 transition-colors"
            >
              <div class="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-red-800">
                <span class="text-xs font-bold text-yellow-400">⭐</span>
              </div>
              <span class="text-sm font-semibold">{{ selectedLanguage }}</span>
              <svg class="w-4 h-4 ml-1 transition-transform duration-200" :class="{ 'rotate-180': showLanguageDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div 
              v-if="showLanguageDropdown" 
              class="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border overflow-hidden z-50 min-w-[160px]"
            >
              <button 
                @click="selectLanguage('TIẾNG VIỆT')"
                class="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                :class="{ 'bg-red-50 text-red-600': selectedLanguage === 'TIẾNG VIỆT' }"
              >
                <div class="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-red-600">
                  <span class="text-xs font-bold text-yellow-400">⭐</span>
                </div>
                <span class="text-sm font-medium text-gray-800">TIẾNG VIỆT</span>
              </button>
              
              <button 
                @click="selectLanguage('English')"
                class="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                :class="{ 'bg-red-50 text-red-600': selectedLanguage === 'English' }"
              >
                <div class="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-blue-600">
                  <span class="text-xs font-bold text-white">🇺🇸</span>
                </div>
                <span class="text-sm font-medium text-gray-800">English</span>
              </button>
            </div>
          </div>
          
          <!-- Toggle Switch -->
          <div class="relative flex items-center">
            <!-- Gold gradient border wrapper -->
            <div class="gold-gradient-border">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600 shadow-sm"></div>
              <!-- Sun icon on toggle -->
              <font-awesome-icon 
                icon="sun" 
                class="absolute left-[4px] top-[4px] w-4 h-4 text-yellow-500 peer-checked:opacity-0 transition-opacity duration-300 pointer-events-none"
              />
              <!-- Moon icon on toggle -->
              <font-awesome-icon 
                icon="moon" 
                class="absolute right-[4px] top-[4px] w-4 h-4 text-gray-300 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
              </label>
            </div>
          </div>
        </div>

        <!-- Mobile Settings -->
        <div class="lg:hidden flex items-center space-x-2">
          <div class="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg class="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer">
            <div class="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-yellow-400"></div>
          </label>
        </div>
      </div>
    </div>
    
    <!-- Mobile Secondary Navigation -->
    <div class="lg:hidden bg-black px-4 py-2">
      <nav class="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        <div class="flex items-center space-x-1 flex-shrink-0">
          <font-awesome-icon :icon="['far', 'comment']" class="w-4 h-4 gold-gradient" />
          <span class="text-xs gold-text whitespace-nowrap">{{ t.board }}</span>
        </div>
        
        <div class="flex items-center space-x-1 flex-shrink-0">
          <font-awesome-icon :icon="['far', 'play-circle']" class="w-4 h-4 gold-gradient" />
          <span class="text-xs gold-text whitespace-nowrap">{{ t.reels }}</span>
        </div>
        
        <div class="flex items-center space-x-1 flex-shrink-0">
          <font-awesome-icon icon="play" class="w-4 h-4 gold-gradient" />
          <span class="text-xs gold-text whitespace-nowrap">{{ t.highlight }}</span>
        </div>
        
        <div class="flex items-center space-x-1 flex-shrink-0">
          <font-awesome-icon icon="crown" class="w-4 h-4 gold-gradient" />
          <span class="text-xs gold-text whitespace-nowrap">{{ t.tipBet }}</span>
        </div>
        
        <div class="flex items-center space-x-1 flex-shrink-0">
          <font-awesome-icon icon="photo-film" class="w-4 h-4 gold-gradient" />
          <span class="text-xs gold-text whitespace-nowrap">{{ t.movies }}</span>
        </div>
        
        <div class="flex items-center space-x-1 flex-shrink-0">
          <font-awesome-icon icon="book" class="w-4 h-4 gold-gradient" />
          <span class="text-xs gold-text whitespace-nowrap">{{ t.comics }}</span>
        </div>
      </nav>
    </div>
    
    <!-- Mobile Menu Button -->
    <div class="lg:hidden absolute top-4 right-4">
      <button @click="toggleMobileMenu" class="text-black">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="showMobileMenu" class="lg:hidden bg-black border-t border-gray-700">
      <!-- Main Navigation -->
      <nav class="px-4 py-4 space-y-3 border-b border-gray-700">
        <h3 class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{{ t.mainMenu }}</h3>
        <a href="#" class="block text-sm hover:text-yellow-400 transition-colors gold-text">{{ t.liveSchedule }}</a>
        <a href="#" class="block text-sm hover:text-yellow-400 transition-colors gold-text">{{ t.matchSchedule }}</a>
        <a href="#" class="block text-sm hover:text-yellow-400 transition-colors gold-text">{{ t.odds }}</a>
        <a href="#" class="block text-sm hover:text-yellow-400 transition-colors gold-text">{{ t.results }}</a>
        <a href="#" class="block text-sm hover:text-yellow-400 transition-colors gold-text">{{ t.chat }}</a>
        <a href="#" class="block text-sm hover:text-yellow-400 transition-colors gold-text">{{ t.news }}</a>
      </nav>
      
      <!-- Secondary Navigation -->
      <nav class="px-4 py-4 space-y-3 border-b border-gray-700">
        <h3 class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{{ t.categories }}</h3>
        <div class="grid grid-cols-2 gap-3">
          <a href="#" class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <font-awesome-icon :icon="['far', 'comment']" class="w-4 h-4 gold-gradient" />
            <span class="text-sm gold-text">{{ t.board }}</span>
          </a>
          
          <a href="#" class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <font-awesome-icon :icon="['far', 'play-circle']" class="w-4 h-4 gold-gradient" />
            <span class="text-sm gold-text">{{ t.reels }}</span>
          </a>
          
          <a href="#" class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <font-awesome-icon icon="play" class="w-4 h-4 gold-gradient" />
            <span class="text-sm gold-text">{{ t.highlight }}</span>
          </a>
          
          <a href="#" class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <font-awesome-icon icon="crown" class="w-4 h-4 gold-gradient" />
            <span class="text-sm gold-text">{{ t.tipBet }}</span>
          </a>
          
          <a href="#" class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <font-awesome-icon icon="photo-film" class="w-4 h-4 gold-gradient" />
            <span class="text-sm gold-text">{{ t.movies }}</span>
          </a>
          
          <a href="#" class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <font-awesome-icon icon="book" class="w-4 h-4 gold-gradient" />
            <span class="text-sm gold-text">{{ t.comics }}</span>
          </a>
        </div>
      </nav>
      
      <!-- Mobile Auth Section -->
      <div v-if="!isLoggedIn" class="px-4 py-4 border-b border-gray-700">
        <h3 class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{{ t.account }}</h3>
        <div class="space-y-2">
          <button @click="login" class="w-full px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
            {{ t.register }}
          </button>
          <button @click="login" class="w-full px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors">
            {{ t.login }}
          </button>
        </div>
      </div>

      <!-- Mobile Settings -->
      <div class="px-4 py-4">
        <h3 class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{{ t.settings }}</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm gold-text">{{ t.language }}</span>
            <div class="flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              <div class="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center bg-red-800">
                <span class="text-xs font-bold text-yellow-400">⭐</span>
              </div>
              <span>{{ selectedLanguage === 'TIẾNG VIỆT' ? 'VN' : 'EN' }}</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm gold-text">{{ t.darkMode }}</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-yellow-400"></div>
            </label>
          </div>
          
          <div v-if="isLoggedIn" class="flex items-center justify-between">
            <span class="text-sm gold-text">{{ t.account }}</span>
            <button @click="logout" class="px-3 py-1 bg-red-600 text-white text-xs rounded-full hover:bg-red-700 transition-colors">
              {{ t.logout }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const showMobileMenu = ref(false)
const isLoggedIn = ref(true)
const showLanguageDropdown = ref(false)
const showProfileDropdown = ref(false)
const showMainNavDropdown = ref(false)
const showMatchScheduleDropdown = ref(false)
const showOddsDropdown = ref(false)
const showResultsDropdown = ref(false)
const showChatDropdown = ref(false)
const showNewsDropdown = ref(false)
const selectedLanguage = ref('TIẾNG VIỆT')
const selectedMenuItem = ref('account-center')
const selectedSport = ref('football')
const selectedMatchType = ref('today')
const selectedOddsType = ref('live')
const selectedResultPeriod = ref('today')
const selectedChatRoom = ref('general')
const selectedNewsCategory = ref('football')

// Translations object
const translations: Record<string, any> = {
  'TIẾNG VIỆT': {
    // Main Navigation
    liveSchedule: 'LỊCH TRỰC TIẾP',
    matchSchedule: 'LỊCH THI ĐẤU',
    odds: 'TỶ LỆ KÈO',
    results: 'KẾT QUA',
    chat: 'PHÒNG CHAT',
    news: 'TIN TỨC',
    
    // Secondary Navigation
    board: 'Bảng Tin',
    reels: 'Reels',
    highlight: 'Highlight',
    tipBet: 'Tip Kèo',
    movies: 'Phim Ảnh',
    comics: 'Truyện Tranh',
    
    // Auth
    register: 'ĐĂNG KÝ',
    login: 'ĐĂNG NHẬP',
    logout: 'Logout',
    
    // Mobile Menu
    mainMenu: 'Main Menu',
    categories: 'Categories',
    settings: 'Settings',
    account: 'Account',
    language: 'Language',
    darkMode: 'Dark Mode'
  },
  'English': {
    // Main Navigation
    liveSchedule: 'LIVE SCHEDULE',
    matchSchedule: 'FIXTURES',
    odds: 'ODDS',
    results: 'RESULTS',
    chat: 'CHAT ROOM',
    news: 'NEWS',
    
    // Secondary Navigation
    board: 'News Board',
    reels: 'Reels',
    highlight: 'Highlight',
    tipBet: 'Betting Tips',
    movies: 'Movies',
    comics: 'Comics',
    
    // Auth
    register: 'REGISTER',
    login: 'LOGIN',
    logout: 'Logout',
    
    // Mobile Menu
    mainMenu: 'Main Menu',
    categories: 'Categories',
    settings: 'Settings',
    account: 'Account',
    language: 'Language',
    darkMode: 'Dark Mode'
  }
}

// Computed property for current translations
const t = computed(() => translations[selectedLanguage.value])

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
}

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value
}

const toggleMainNavDropdown = () => {
  showMainNavDropdown.value = !showMainNavDropdown.value
}

const toggleMatchScheduleDropdown = () => {
  showMatchScheduleDropdown.value = !showMatchScheduleDropdown.value
}

const toggleOddsDropdown = () => {
  showOddsDropdown.value = !showOddsDropdown.value
}

const toggleResultsDropdown = () => {
  showResultsDropdown.value = !showResultsDropdown.value
}

const toggleChatDropdown = () => {
  showChatDropdown.value = !showChatDropdown.value
}

const toggleNewsDropdown = () => {
  showNewsDropdown.value = !showNewsDropdown.value
}

const selectLanguage = (language: string) => {
  selectedLanguage.value = language
  showLanguageDropdown.value = false
}

const selectSport = (sport: string) => {
  selectedSport.value = sport
  showMainNavDropdown.value = false
}

const selectMatchType = (type: string) => {
  selectedMatchType.value = type
  showMatchScheduleDropdown.value = false
}

const selectOddsType = (type: string) => {
  selectedOddsType.value = type
  showOddsDropdown.value = false
}

const selectResultPeriod = (period: string) => {
  selectedResultPeriod.value = period
  showResultsDropdown.value = false
}

const selectChatRoom = (room: string) => {
  selectedChatRoom.value = room
  showChatDropdown.value = false
}

const selectNewsCategory = (category: string) => {
  selectedNewsCategory.value = category
  showNewsDropdown.value = false
}

// Function for selecting sports from navigation dropdowns
const selectSportFromNav = (sport: string, source: string) => {
  selectedSport.value = sport
  // Close the appropriate dropdown based on source
  if (source === 'match-schedule') {
    showMatchScheduleDropdown.value = false
  } else if (source === 'odds') {
    showOddsDropdown.value = false
  } else if (source === 'results') {
    showResultsDropdown.value = false
  } else if (source === 'chat') {
    showChatDropdown.value = false
  } else if (source === 'news') {
    showNewsDropdown.value = false
  }
}

const login = () => {
  isLoggedIn.value = true
}

const logout = () => {
  selectedMenuItem.value = 'logout'
  showProfileDropdown.value = false
  // Actually logout after setting selection
  setTimeout(() => {
    isLoggedIn.value = false
  }, 100)
}

// Navigation functions
const navigateToAccountCenter = () => {
  console.log('Navigate to account center')
  selectedMenuItem.value = 'account-center'
  showProfileDropdown.value = false
}

const navigateToProfile = () => {
  console.log('Navigate to profile page')
  selectedMenuItem.value = 'profile'
  showProfileDropdown.value = false
}

const navigateToTasks = () => {
  console.log('Navigate to tasks page')
  selectedMenuItem.value = 'tasks'
  showProfileDropdown.value = false
}

const navigateToWallet = () => {
  console.log('Navigate to wallet page')
  selectedMenuItem.value = 'wallet'
  showProfileDropdown.value = false
}

const navigateToHistory = () => {
  console.log('Navigate to transaction history page')
  selectedMenuItem.value = 'history'
  showProfileDropdown.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('.language-dropdown')) {
    showLanguageDropdown.value = false
  }
  if (!target.closest('.profile-dropdown-container')) {
    showProfileDropdown.value = false
  }
  if (!target.closest('.main-nav-dropdown')) {
    showMainNavDropdown.value = false
  }
  if (!target.closest('.match-schedule-dropdown')) {
    showMatchScheduleDropdown.value = false
  }
  if (!target.closest('.odds-dropdown')) {
    showOddsDropdown.value = false
  }
  if (!target.closest('.results-dropdown')) {
    showResultsDropdown.value = false
  }
  if (!target.closest('.chat-dropdown')) {
    showChatDropdown.value = false
  }
  if (!target.closest('.news-dropdown')) {
    showNewsDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.logo-shape-full {
  position: absolute;
  background: black;
  width: 410px;
  height: 120px;
  top: 0;
  left: 0;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 30px;
  z-index: 1;
}

.logo-shape-full::before {
  content: '';
  position: absolute;
  top: 0;
  width: 60px;
  height: 100px;
  background: radial-gradient(ellipse at left, black 30%, transparent 70%);
  border-top-right-radius: 60px;
  border-bottom-right-radius: 30px;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .logo-shape-full {
    width: 200px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%);
  }
  
  .logo-shape-full::before {
    width: 40px;
    right: -20px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 20px;
  }
}

.gold-gradient {
  color: #f8e889 !important;
  filter: drop-shadow(0 0 2px rgba(228, 183, 100, 0.8)) 
          drop-shadow(0 1px 3px rgba(228, 183, 100, 0.5));
}

.gold-text {
  color: #f8e889 !important;
  text-shadow: 0 0 4px rgba(228, 183, 100, 0.6);
}

.gold-gradient-border {
  position: relative;
  border-radius: 9999px;
  padding: 2px;
  background: linear-gradient(135deg, #f8e889 0%, #e4b764 100%);
}

.gold-gradient-border > label {
  background: #1f2937;
  border-radius: 9999px;
  display: block;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* PC-Focused Responsive Design */
@media (min-width: 1024px) and (max-width: 1440px) {
  /* Optimal layout for PC screens */
  .header-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1441px) {
  /* Large desktop adjustments */
  .header-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Mobile fallback */
@media (max-width: 1023px) {
  .logo-shape-full {
    width: 150px;
    height: 80px;
  }
  
  .logo-shape-full .absolute {
    font-size: 4rem !important;
    left: 100px !important;
  }
  
  /* Override min-width for mobile */
  .header-container {
    min-width: auto !important;
    max-width: 100% !important;
  }
}
</style>
