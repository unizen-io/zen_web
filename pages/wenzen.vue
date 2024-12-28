<template>
  <div class="py-12 my-12">
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      <h1 class="text-center pt-16 mx-auto mt-6 text-tertiary">
        The Tournament of Altcoins.
      </h1>
      <div class="flex flex-col items-center">
        <small class="text-unizenGray-dark">POWERED BY</small>
        <nuxt-img
          class="mb-12 pb-12"
          format="webp"
          width="240"
          height="70"
          src="/img/partners/lunarcrush.png"
          alt="lunarcrush"
        />
      </div>
    </div>
    <div class="container mx-auto px-8">
      <div class="mb-12 md:flex md:flex-wrap">
        <div
          class="p-4 md:w-1/2 space-y-4"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <p class="text-lg text-tertiary">
            At <strong>Unizen</strong>, we want to make <u>all</u> digital assets available for our users in an easy-to-use, secure and highly compliant manner. In order to get the latest and greatest at the top of the queue, we've spear headed an initiative called <code>#TournamentofAlts</code>. <br><br>This is a <strong>Unizen</strong> hosted competition where the winner gets a free listing on our CEX module with Binance-shared liquidity and top tier market making support. <br><br>The semi-finals will last for <u>24 hours</u> and the final round will run for <u>48 hours</u>. The Altcoin, in the finals, with the highest <strong>UNIZEN Smart Score™</strong> when the timer runs out - will win the free listing.<br><br>
            The respective communities of each finalist can directly influence the outcome of the competition by supporting their favorite project with <i id="popover-target-1">positive sentiment</i> and <i id="popover-target-2">factually driven marketing</i> on <strong>Twitter</strong>. <br><br>We're leveraging the smart data feeds of our partner <strong>LunarCrush</strong> to monitor community sentiment over any digital asset on <strong>Twitter</strong>.
          </p>
          <b-popover
            target="popover-target-1"
            triggers="hover"
            placement="top"
          >
            <strong>OOoOooOOoooooOOOooOoOooOOOOoOF!!!!</strong>
            <br>
            <br>
            <a href="#">$CASHTAG</a>
          </b-popover>
          <b-popover
            target="popover-target-2"
            triggers="hover"
            placement="top"
          >
            <template #title>
              shill
            </template>
            A person engaged in advertising. The shill attempts to spread buzz by personally endorsing the product in public forums.
          </b-popover>
          <nuxt-link
            to="/competition"
            class="competition-link hidden w-72 h-14 rounded sm:grid place-items-center text-base text-white no-underline mx-auto"
          >
            Competition
          </nuxt-link>
        </div>
        <div class="px-4 md:w-1/2">
          <b-card
            class="mb-4 shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
            title="ZSS Score"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p>
              The <strong>UNIZEN Smart Score™</strong> (ZSS), is a custom dataset of aggregated LunarCrush powered social sentiment data. It is the combined metric of <strong>ZTI</strong> and <strong>ZSI</strong>. It is also the <u>sole determinator</u> of the competition.
            </p>
          </b-card>
          <b-card
            class="mb-4 shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
            title="ZTI Score"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p>
              The <strong>UNIZEN Twitter Indicator™</strong> (ZTI) is an aggregate of twitter activity over a selected digital asset. More specifically, it's an aggregate of <code>number of tweets</code>, <code>quoted retweets</code>, <code>retweets</code>, <code>replies</code> and <code>favorites</code>.
            </p>
          </b-card>
          <b-card
            class="mb-4 shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
            title="ZSI Score"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <p>
              The <strong>UNIZEN Sentiment Indicator™</strong> (ZSI) score, is an aggregate of <i>"bullish"</i> sentiment around a digital asset, on twitter. It leverages <strong>LunarCrush</strong> powered deep learning algorithms and language processing to determine the social sentiment.
            </p>
          </b-card>
          <nuxt-link
            to="/competition"
            class="competition-link sm:hidden w-72 h-14 rounded grid place-items-center text-base text-white no-underline mx-auto"
          >
            Competition
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createSEOTags } from '@/utils/helpers/seo'
import { PAGES } from '@/utils/constants/links'

export default {
  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Wen Zen',
      description: 'Listing competition rules and unique social sentiment indexes',
      slug: PAGES.wenzen.url
    })
  }
}
</script>

<style lang="scss" scoped>
a.competition-link {
  position: relative;
  background-image: linear-gradient(to right, #00f5a4, #00e8ac, #00dcb2, #00ceb4, #00c1b3, #00c1b3, #00c1b3, #00c1b3, #00ceb4, #00dcb2, #00e8ac, #00f5a4);    background-size: 400%;
}
a.competition-link:hover {
  animation: animate 8s linear infinite;
  text-decoration: none;
}
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
a.competition-link:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  background-image: linear-gradient(to right, #00f5a4, #00e8ac, #00dcb2, #00ceb4, #00c1b3, #00c1b3, #00c1b3, #00c1b3, #00ceb4, #00dcb2, #00e8ac, #00f5a4);    background-size: 400%;
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 1s;
}
a.competition-link:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
</style>
