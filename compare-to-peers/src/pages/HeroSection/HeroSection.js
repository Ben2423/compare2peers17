import AddTags from './AddTags'
import HeroText from './HeroText'
import RaiseGraph from './RaiseGraph'

export default function HeroSection () {
    return (
        <div class="hero-width">
            <div id="hero-left">
                <HeroText />
                <AddTags />
            </div>
            <div id="hero-right">
                <RaiseGraph />
            </div>

        </div>
    )
}