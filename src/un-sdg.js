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
    switch (this.goal) {
      case "1":
        console.log("Goal is 1");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
                <div class="col-12 col-sm-3 calendar-item px-2">
                    <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-01.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">
                        <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/reversal-and-resilience-sdg-progress-after-a-year-of-covid-19/" target="">
                            <div class="calendar-item-link-container">
                                <div class="calendar-item-title"></div>
                                <div class="calendar-item-team">Reversal and Resilience: SDG Progress After a Year of COVID-19</div>
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

        break;
      case "2":
        console.log("Goal is 2");
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-02.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/hungrier-than-ever-generations-of-undernourished-and-overlooked-mothers-women-and-girls/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Hungrier Than Ever: Generations Of Undernourished And Overlooked Mothers Women And Girls</div>
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
      case "3":
        console.log("Goal is 3");
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-03.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/health-for-all-our-experts-reflect-on-whos-75-years-of-impact/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Health For All: Our Experts Reflect On WHOs 75 Years Of Impact</div>
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

        
        `
        
        break;
      case "4":
        console.log("Goal is 4");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-04.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/7-innovative-ways-american-universities-are-driving-progress-on-the-sdgs/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">7 Innovative Ways American Universities are Driving Progress on the SDGs</div>
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

        
        `
        
        break;
      case "5":
        console.log("Goal is 5");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-05.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/stand-with-her-6-women-led-organizations-tackling-gender-based-violence/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Stand With Her: 6 Women-Led Organizations Tackling Gender-Based Violence</div>
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

        
        `
        
        break;
      case "6":
        console.log("Goal is 6");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-06.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/the-last-straw-how-you-can-beat-plastic-pollution/ " target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">The Last Straw: How You Can Beat Plastic Pollution</div>
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

        
        `
        
        break;
      case "7":
        console.log("Goal is 7");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-07.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/in-india-a-cleaner-way-of-cooking-fuels-climate-action-in-the-home/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">In India, a Cleaner Way of Cooking Fuels Climate Action in the Home </div>
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

        
        `
        
        break;
      case "8":
        console.log("Goal is 8");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-08.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="http://unfoundation.org/blog/post/protectors-of-progress-manyang-redefines-refugees/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Protectors of Progress: Manyang Redefines Refugees </div>
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

        
        `
        
        break;
      case "9":
        console.log("Goal is 9");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-09.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/key-takeaways-from-act-accelerator-platform-for-sharing-pandemic-countermeasures/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Key Takeaways From The ACT- Accelerator: A First-Of-Its-Kind Platform For Sharing Pandemic Countermeasures</div>
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

        
        `
        
        break;
      case "10":
        console.log("Goal is 10");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-10.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/breakdown-or-breakthrough-the-high-stakes-in-our-common-agenda/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Breakdown or Breakthrough? The High Stakes in Our Common Agenda</div>
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

        
        `
        
        break;
      case "11":
        console.log("Goal is 11");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-11.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/how-5-community-foundations-in-kansas-are-bringing-the-sdgs-home/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">How 5 Community Foundations in Kansas are Bringing the SDGs Home</div>
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

        
        `
        
        break;
      case "12":
        console.log("Goal is 12");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-12.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/these-companies-leading-climate-race-against-time/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">These Companies Leading Climate Race Against Time</div>
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

        
        `
        
        break;
      case "13":
        console.log("Goal is 13");
        
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-13.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/3-recent-diplomatic-wins-for-climate-justice-and-what-comes-next/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">3 Recent Diplomatic Wins For Climate Justice — And What Comes Next</div>
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

        
        `
        
        break;
      case "14":
        console.log("Goal is 14");

        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-14.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/climate-energy-and-food-crises-loom-heres-why-the-ocean-could-be-the-solution/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Climate Energy And Food Crises Loom. Heres Why The Ocean Could Be The Solution</div>
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

        
        `

      case "15":
        console.log("Goal is 15");
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-15.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/meet-3-women-in-brazil-who-are-protecting-the-amazon-rainforest-and-indigenous-rights/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Meet 3 Women In Brazil Who Are Protecting The Amazon Rainforest And Indigenous Rights</div>
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

        
        `
      case "16":
          console.log("Goal is 16");
          return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-16.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/reimagining-a-multilateral-future-with-by-and-for-young-people/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Reimagining A Multilateral Future With, By, And For Young People</div>
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

        
        `
      case "17":
        console.log("Goal is 17");
        return html`
        
        <section class="interactive-calendar-block container plain pt-0 pb-5">
    <div class="row no-gutters">
        <div class="col-12">
            <div class="row no-gutters">
              <!--Put class="col-12 col-sm-3 calendar-item px-2" here-->
              <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-17.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/a-city-rising-how-phoenix-is-harnessing-the-power-of-sdg-17/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">A City Rising: How Phoenix Is Harnessing The Power Of SDG 17</div>
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

        
        `
          
            
        
        break;
        case "all":
          console.log("Goal is all");
          return html`
          
          <section class="interactive-calendar-block container plain pt-0 pb-5">
<div class="row no-gutters">
                
                        <div class="col-12">
            <div class="container">
                <div class="row no-gutters">
            
                <div class="col-12">
                                
                    <div class="container p-0">
                        <div class="row no-gutters">
                            
                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-01.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/reversal-and-resilience-sdg-progress-after-a-year-of-covid-19/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Reversal and Resilience: SDG Progress After a Year of COVID-19 </div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-02.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/hungrier-than-ever-generations-of-undernourished-and-overlooked-mothers-women-and-girls/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Hungrier Than Ever: Generations Of Undernourished And Overlooked Mothers Women And Girls</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-03.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/health-for-all-our-experts-reflect-on-whos-75-years-of-impact/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Health For All: Our Experts Reflect On WHOs 75 Years Of Impact</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-04.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/7-innovative-ways-american-universities-are-driving-progress-on-the-sdgs/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">7 Innovative Ways American Universities are Driving Progress on the SDGs</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-05.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/stand-with-her-6-women-led-organizations-tackling-gender-based-violence/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Stand With Her: 6 Women-Led Organizations Tackling Gender-Based Violence</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-06.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/the-last-straw-how-you-can-beat-plastic-pollution/ " target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">The Last Straw: How You Can Beat Plastic Pollution</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-07.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/in-india-a-cleaner-way-of-cooking-fuels-climate-action-in-the-home/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">In India, a Cleaner Way of Cooking Fuels Climate Action in the Home </div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-08.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="http://unfoundation.org/blog/post/protectors-of-progress-manyang-redefines-refugees/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Protectors of Progress: Manyang Redefines Refugees </div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-09.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/key-takeaways-from-act-accelerator-platform-for-sharing-pandemic-countermeasures/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Key Takeaways From The ACT- Accelerator: A First-Of-Its-Kind Platform For Sharing Pandemic Countermeasures</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-10.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/breakdown-or-breakthrough-the-high-stakes-in-our-common-agenda/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Breakdown or Breakthrough? The High Stakes in Our Common Agenda</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-11.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/how-5-community-foundations-in-kansas-are-bringing-the-sdgs-home/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">How 5 Community Foundations in Kansas are Bringing the SDGs Home</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-12.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/these-companies-leading-climate-race-against-time/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">These Companies Leading Climate Race Against Time</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-13.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/3-recent-diplomatic-wins-for-climate-justice-and-what-comes-next/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">3 Recent Diplomatic Wins For Climate Justice — And What Comes Next</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-14.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/climate-energy-and-food-crises-loom-heres-why-the-ocean-could-be-the-solution/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Climate Energy And Food Crises Loom. Heres Why The Ocean Could Be The Solution</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-15.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/meet-3-women-in-brazil-who-are-protecting-the-amazon-rainforest-and-indigenous-rights/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Meet 3 Women In Brazil Who Are Protecting The Amazon Rainforest And Indigenous Rights</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-16.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/reimagining-a-multilateral-future-with-by-and-for-young-people/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">Reimagining A Multilateral Future With, By, And For Young People</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                             
                                <div class="col-12 col-sm-3 calendar-item px-2">
                                        <div class="calendar-item-img" style="background-image: url(https://unf.imgix.net/2019/09/E-WEB-Goal-17.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3)">

                                                

                                                                                                        
                                                        
                                                                                                                    <a class="d-flex flex-column justify-content-end calendar-item-link" href="https://unfoundation.org/blog/post/a-city-rising-how-phoenix-is-harnessing-the-power-of-sdg-17/" target="">
                                                                <div class="calendar-item-link-container">
                                                                    <div class="calendar-item-title"></div>
                                                                    <!-- <img class="caret" src="https://unfoundation.org/app/themes/unf/dist/images/caret-reg-white.svg"> -->
                                                                    <div class="calendar-item-team">A City Rising: How Phoenix Is Harnessing The Power Of SDG 17</div>
                                                                </div>
                                                            </a>
                                                        
                                                                                        </div>
                                </div> 

                                                    </div>
                    </div>
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
          
          break;
      default:
        console.log("Goal is not between 1 and 14");
        

        break;
    }

    if (this.goal == "all"){
    return html`
  <div class="wrapper">
    <div>${this.goal}</div>
    <slot></slot>
   <head>
   <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
  </head>
  </div>`;
  }
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