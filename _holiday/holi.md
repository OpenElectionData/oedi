---
title: 'Holi: Holiday Fun'
display_order: 3
lang: en
permalink: '/holiday/holi/'
excerpt: 'Celebrate the most vibrant HOLIday of the year with the Open Election Data Initiative! Our robot needs your help coloring the nine key open data principles. Lend him a hand and throw some color around!'
preview_img: holi-preview.png
head:
  - /holiday/holi/css/styles.css
footer:
  - https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
  - /holiday/holi/js/holi.js
  - /holiday/holi/js/transit.js
---

<div id="canvas_container" style="display: none;">
	<canvas id="canvas"></canvas>
	<div><h1 style="margin: 0.75em 1em;
  line-height: 1.4;">Happy Holi! You've passed the test with flying colors! Go through <strong><a href="http://www.openelectiondata.net/en/guide/">our guide</a></strong> and prepare for our next game.</h1></div>
</div>
<div class="taj"></div>

<div class="container">

  <h1 style="margin-bottom: 15px;margin-top:0px;">It's the most vibrant <strong><span style="color:#36C233;">H</span><span style="color:#00D2F9;">O</span><span style="color:#FAA700;">L</span><span style="color:#7F0092;">I</span></strong>day of the year!</h1>
  <h2 style="font-size: 18px;">Help the robot pass our open election data principles test with <strong>flying colors!</strong></h2>

  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-2 col-xs-offset-1" style="padding-right:0px;padding-top:150px;">
          <ul class="flex-container">
            <li class="flex-item colors green active" data-color="green" data-order="1"></li>
            <li class="flex-item colors blue" data-color="blue" data-order="2"></li>
            <li class="flex-item colors tomato" data-color="tomato" data-order="3"></li>
            <li class="flex-item colors yellow hidden" data-color="yellow" data-order="4"></li>
            <li class="flex-item colors dgreen hidden" data-color="dgreen" data-order="5"></li>
            <li class="flex-item colors purple hidden" data-color="purple" data-order="6"></li>
            <li class="flex-item colors orange hidden" data-color="orange" data-order="7"></li>
            <li class="flex-item colors bblue hidden" data-color="bblue" data-order="8"></li>
            <li class="flex-item colors pink hidden" data-color="pink" data-order="9"></li>
          </ul>
        </div>
        <div class="col-xs-9" style="padding-left:0px;margin-top: 80px;">
          <div id="robot" class="robot_body">
            <div class="arm_container">
              <div class="throw">
                <div class="hand"></div>
                <div class="arm_upper"></div>
              </div>
              <div class="arm_lower"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="principles_container">
        <h2 style="text-align:center;margin-top:.5em;">Open Election Data Principles</h2>
        <p class="instructions">Click a circle below to help the robot throw a color and reveal an open data principle.</p>
        <div class="row">
          <div class="col-xs-4">
            <div data-id="timely" class="principle" data-desc="Election data should be made available as quickly as necessary for it to be useful." data-url="timely" data-title="Timely">
              <div class="overlay" data-principle="timely"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/timely/" target="_blank">Timely</a>
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <div data-id="granular" class="principle" data-desc="Election data should be available at the finest possible level of granularity or detail." data-url="granular" data-clicked="false" data-title="Granular">
              <div class="overlay" data-principle="granular"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/granular/" target="_blank">Granular</a>
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <div data-id="available" class="principle" data-desc='Election data should be free and online.' data-url="available-for-free" data-title="Available for Free">
              <div class="overlay" data-principle="available"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/available-for-free/" target="_blank">Available for Free</a>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4">
            <div data-id="complete" class="principle" data-desc="Election data should be complete and whole." data-url="complete-and-in-bulk" data-title="Complete and in Bulk">
              <div class="overlay" data-principle="complete"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/complete-and-in-bulk/" target="_blank">Complete and in Bulk</a>
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <div data-id="analyzable" class="principle" data-desc='Election data should be in a digital, machine readable format.' data-url="analyzable" data-title="Analyzable">
              <div class="overlay" data-principle="analyzable"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/analyzable/" target="_blank">Analyzable</a>
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <div data-id="nonprop" class="principle" data-desc="Election data should be open and in a format over which no entity has exclusive control." data-url="non-proprietary" data-title="Non-Proprietary">
              <div class="overlay" data-principle="nonprop"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/non-proprietary/" target="_blank">Non-proprietary</a>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4">
            <div data-id="nondisc" class="principle" data-desc='Election data should be available to any individual or organization without limitations based on user identity or intent.' data-url="non-discriminatory" data-title="Non-Discriminatory">
              <div class="overlay" data-principle="nondisc"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/non-discriminatory/" target="_blank">Non-discriminatory</a>
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <div data-id="license" class="principle" data-desc='Election data should be "maximally re-usable" and there should be no barriers for that re-use.' data-url="license-free" data-title="License-Free">
              <div class="overlay" data-principle="license"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/license-free/" target="_blank">License-Free</a>
              </span>
            </div>
          </div>
          <div class="col-xs-4">
            <div data-id="permanent" class="principle" data-desc='Election data should be available via a stable Internet location for an indefinite period of time. ' data-url="permanently-available" data-title="Permanently Available">
              <div class="overlay" data-principle="permanent"></div>
              <span class="name">
                <a href="http://openelectiondata.net/en/guide/principles/permanently-available/" target="_blank">Permanently Available</a>
              </span>
            </div>
          </div>
        </div>
        <div class="description"></div>
      </div>
    </div>
  </div>
</div>
