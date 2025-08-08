import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Prevent auto-adding CSS since we'll add it manually
config.autoAddCss = false
import { 
  faUser, 
  faNewspaper, 
  faFilm, 
  faHighlighter,
  faBullseye,
  faBookOpen,
  faImage,
  faBars,
  faFlag,
  faPlay,
  faVideo,
  faTv,
  faGamepad,
  faFutbol,
  faBasketball,
  faTableTennis,
  faVolleyball,
  faComments,
  faComment,
  faMessage,
  faCrown,
  faAward,
  faTrophy,
  faDice,
  faPhotoFilm,
  faBook,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

// Regular (outlined) icons
import { 
  faUser as farUser,
  faComments as farComments,
  faComment as farComment,
  faMessage as farMessage,
  faPlayCircle as farPlayCircle,
  faFileVideo as farFileVideo,
  faFile as farFile
} from '@fortawesome/free-regular-svg-icons'



// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  // Solid icons
  faUser, 
  faNewspaper, 
  faFilm, 
  faHighlighter,
  faBullseye,
  faBookOpen,
  faImage,
  faBars,
  faFlag,
  faPlay,
  faVideo,
  faTv,
  faGamepad,
  faFutbol,
  faBasketball,
  faTableTennis,
  faVolleyball,
  faComments,
  faComment,
  faMessage,
  // Regular icons
  farUser,
  farComments,
  farComment,
  farMessage,
  farPlayCircle,
  farFileVideo,
  farFile,
  // Additional solid icons
  faCrown,
  faAward,
  faTrophy,
  faDice,
  faPhotoFilm,
  faBook,
  faSun,
  faMoon
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
