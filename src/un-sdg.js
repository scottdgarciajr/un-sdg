import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.goal = "all";
  }

  static get properties() {
    return {
      goal: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  render() {
    const goals = {
      1: {
        imageNumber: "01",
        link: "https://unfoundation.org/blog/post/reversal-and-resilience-sdg-progress-after-a-year-of-covid-19/",
        title: "Reversal and Resilience: SDG Progress After a Year of COVID-19"
      },
      2: {
        imageNumber: "02",
        link: "https://unfoundation.org/blog/post/hungrier-than-ever-generations-of-undernourished-and-overlooked-mothers-women-and-girls/",
        title: "Hungrier Than Ever: Generations Of Undernourished And Overlooked Mothers, Women And Girls"
      },
      3: {
        imageNumber: "03",
        link: "https://unfoundation.org/blog/post/health-for-all-our-experts-reflect-on-whos-75-years-of-impact/",
        title: "Health For All: Our Experts Reflect On WHO's 75 Years Of Impact"
      },
      4: {
        imageNumber: "04",
        link: "https://unfoundation.org/blog/post/7-innovative-ways-american-universities-are-driving-progress-on-the-sdgs/",
        title: "7 Innovative Ways American Universities are Driving Progress on the SDGs"
      },
      5: {
        imageNumber: "05",
        link: "https://unfoundation.org/blog/post/stand-with-her-6-women-led-organizations-tackling-gender-based-violence/",
        title: "Stand With Her: 6 Women-Led Organizations Tackling Gender-Based Violence"
      },
      6: {
        imageNumber: "06",
        link: "https://unfoundation.org/blog/post/the-last-straw-how-you-can-beat-plastic-pollution/",
        title: "The Last Straw: How You Can Beat Plastic Pollution"
      },
      7: {
        imageNumber: "07",
        link: "https://unfoundation.org/blog/post/in-india-a-cleaner-way-of-cooking-fuels-climate-action-in-the-home/",
        title: "In India, a Cleaner Way of Cooking Fuels Climate Action in the Home"
      },
      8: {
        imageNumber: "08",
        link: "http://unfoundation.org/blog/post/protectors-of-progress-manyang-redefines-refugees/",
        title: "Protectors of Progress: Manyang Redefines Refugees"
      },
      9: {
        imageNumber: "09",
        link: "https://unfoundation.org/blog/post/key-takeaways-from-act-accelerator-platform-for-sharing-pandemic-countermeasures/",
        title: "Key Takeaways From The ACT- Accelerator: A First-Of-Its-Kind Platform For Sharing Pandemic Countermeasures"
      },
      10: {
        imageNumber: "10",
        link: "https://unfoundation.org/blog/post/breakdown-or-breakthrough-the-high-stakes-in-our-common-agenda/",
        title: "Breakdown or Breakthrough? The High Stakes in Our Common Agenda"
      },
      11: {
        imageNumber: "11",
        link: "https://unfoundation.org/blog/post/how-5-community-foundations-in-kansas-are-bringing-the-sdgs-home/",
        title: "How 5 Community Foundations in Kansas are Bringing the SDGs Home"
      },
      12: {
        imageNumber: "12",
        link: "https://unfoundation.org/blog/post/these-companies-leading-climate-race-against-time/",
        title: "These Companies Leading Climate Race Against Time"
      },
      13: {
        imageNumber: "13",
        link: "https://unfoundation.org/blog/post/3-recent-diplomatic-wins-for-climate-justice-and-what-comes-next/",
        title: "3 Recent Diplomatic Wins For Climate Justice — And What Comes Next"
      },
      14: {
        imageNumber: "14",
        link: "https://unfoundation.org/blog/post/climate-energy-and-food-crises-loom-heres-why-the-ocean-could-be-the-solution/",
        title: "Climate Energy And Food Crises Loom. Heres Why The Ocean Could Be The Solution"
      },
      15: {
        imageNumber: "15",
        link: "https://unfoundation.org/blog/post/meet-3-women-in-brazil-who-are-protecting-the-amazon-rainforest-and-indigenous-rights/",
        title: "Meet 3 Women In Brazil Who Are Protecting The Amazon Rainforest And Indigenous Rights"
      },
      16: {
        imageNumber: "16",
        link: "https://unfoundation.org/blog/post/reimagining-a-multilateral-future-with-by-and-for-young-people/",
        title: "Reimagining A Multilateral Future With, By, And For Young People"
      },
      17: {
        imageNumber: "17",
        link: "https://unfoundation.org/blog/post/a-city-rising-how-phoenix-is-harnessing-the-power-of-sdg-17/",
        title: "A City Rising: How Phoenix Is Harnessing The Power Of SDG 17"
      }
    };
  
    // Check if the goal is "all" to render all calendar items
  if (this.goal === "all") {
    return html`
      <section class="interactive-calendar-block container plain pt-0 pb-5">
        <div class="row no-gutters">
          ${Object.values(goals).map(goal => html`
            <div class="col-12 col-sm-3 calendar-item px-2">
              <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-${goal.imageNumber}.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">
                <a class="d-flex flex-column justify-content-end calendar-item-link" href="${goal.link}" target="">
                  <div class="calendar-item-link-container">
                    <div class="calendar-item-title"></div>
                    <div class="calendar-item-team">${goal.title}</div>
                  </div>
                </a>
              </div>
            </div>
          `)}
        </div>
      </section>

      <head>
        <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
      </head>
      <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
    `;
  }

  // For individual goals
  const goal = goals[this.goal]; // Get goal data by key

  if (!goal) {
    console.log("Invalid goal");
    return;
  }

  console.log(`Goal is ${this.goal}`);

  return html`
    <section class="interactive-calendar-block container plain pt-0 pb-5">
      <div class="row no-gutters">
        <div class="col-12">
          <div class="row no-gutters">
            <div class="col-12 col-sm-3 calendar-item px-2">
              <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-${goal.imageNumber}.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">
                <a class="d-flex flex-column justify-content-end calendar-item-link" href="${goal.link}" target="">
                  <div class="calendar-item-link-container">
                    <div class="calendar-item-title"></div>
                    <div class="calendar-item-team">${goal.title}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <head>
      <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
    </head>
    <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
  `;

  }
  


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);