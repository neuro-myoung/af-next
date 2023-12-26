import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import GalleryScroll from '@/components/GalleryScroll/GalleryScroll'
import Shop from '@/components/Shop/Shop'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className="container">
        <Hero />
        <GalleryScroll />
        <Shop />
      </div>
  )
}
