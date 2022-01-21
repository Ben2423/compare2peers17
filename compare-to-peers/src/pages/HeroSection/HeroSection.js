import AddTags from './AddTags'
import HeroText from './HeroText'
import RaiseGraph from './RaiseGraph'
import DisplayTags from './DisplayTags'

export default function HeroSection () {
    return (
        <div class="hero-width">
            <div id="hero-left">
                <HeroText />
                <AddTags />
                <DisplayTags/>
           
            </div>
            <div id="hero-right">
                <RaiseGraph />
            </div>

        </div>
    )
}