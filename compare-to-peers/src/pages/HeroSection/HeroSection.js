import AddTags from './AddTags'
import HeroText from './HeroText'
import RaiseGraph from './RaiseGraph'
import DisplayTags from './DisplayIndustryTags/DisplayTags'
import DisplayFilters from './DisplayFilterTags/DisplayFilters'

export default function HeroSection () {
    return (
        <div class="hero-width">
            <div id="hero-left">
                <HeroText />
                <AddTags />
                <div class="tags-area">
                    <div class="tags-position">
                        <DisplayTags/>
                    </div>
                    <div class="filters-position">
                        <DisplayFilters/>
                    </div>
                </div>
           
            </div>
            <div id="hero-right">
                <RaiseGraph />
            </div>

        </div>
    )
}