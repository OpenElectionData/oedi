---
title: 'May the Fourth: Quiz & Game'
display_order: 2
excerpt: "I've got a bad feeling about this... The OEDI open data principles are in danger and it's up to you to save them! Prove that the force (of open data) is strong within you by playing our Stars Wars-themed quiz game."
preview_img: starwars-preview.png
head:
  - /holiday/datawars/dw_css/styles.css
footer:
  - https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
  - /holiday/datawars/dw_js/transit.js
  - https://cdn.jsdelivr.net/kute.js/1.5.0/kute.min.js
  - https://cdn.jsdelivr.net/kute.js/1.5.0/kute-svg.min.js
  - /holiday/datawars/dw_js/datawars.js
---

  <!-- START QUIZ CONTENT -->
  <section id="opening">

  <div class="container">

  <h1>DATA WARS</h1>
  <p class="instructions">Jabba the Hut has captured the open data principles. We need you to help free them. Choose your character wisely.</p>
  <p class="char-error"></p>
  <button id="play" type="submit">Play</button>

  <div class="row">
    <div class="col-xs-12 col-sm-2 padding0">
      <div class="oedi margin-center"></div>
    </div>
    <div class="col-xs-12 col-sm-10">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3 padding0">
          <div class="luke margin-center" id="luke_costume"></div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 padding0">
          <div class="yoda margin-center" id="yoda_costume"></div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 padding0">
          <div class="leia margin-center" id="leia_costume"></div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 padding0">
          <div class="han margin-center" id="han_costume"></div>
        </div>
      </div>
    </div>
  </div>

  </div>

  </section>

  <section id="quiz">
    <div class="container">
      <!-- START QUIZ CONTAINER -->
      <div class="quiz_container">
        <p>Help OEDI free the open election data principles by answering these questions!</p>
        <div class="questions">
          <div class="q0">
              <span>1. Which of the following is an example of a machine-readable format?</span>
              <div class="row">
                <div class="col-xs-12 col-sm-5">
                  <input type="radio" name="q0" id="q01" value="a"> <label for="q01">A. Carbonite-frozen format</label><br />
                  <input type="radio" name="q0" id="q02" value="b"> <label for="q02">B. JabbaScript Object Notation</label>
              </div>
              <div class="col-xs-12 col-sm-6">
                  <input type="radio" name="q0" id="q03" value="c"> <label for="q03">C. Comma-separated file</label><br />
                  <input type="radio" name="q0" id="q04" value="d"> <label for="q04">D. None of them, these aren't the formats you're looking for.</label>
              </div>
            </div>
            </div>
            <div class="q1">
              <span>2. Which one is not an open election data principle?</span>
              <div class="row">
                <div class="col-xs-12 col-sm-5">
                  <input type="radio" name="q1" id="q11" value="a"> <label for="q11">A. Complete and in bulk, there is no try</label><br />
                  <input type="radio" name="q1" id="q12" value="b"> <label for="q12">B. Hyperspace compatibility</label>
              </div>
              <div class="col-xs-12 col-sm-6">
                  <input type="radio" name="q1" id="q13" value="c"> <label for="q13">C. Non-proprietary &mdash; the Rebel Alliance answers to no evil overlord</label><br />
                  <input type="radio" name="q1" id="q14" value="d"> <label for="q14">D. Non-discriminatory, even for half-witted, scruffy-looking Nerf herders.</label>
              </div>
            </div>
            </div>
            <div class="q2">
              <span>3. When should election results be released to be considered timely?</span><br />
              <div class="row">
                <div class="col-xs-12 col-sm-5">
                  <input type="radio" name="q2" id="q21" value="a"> <label for="q21">A. A long time ago in a galaxy far far away</label><br />
                  <input type="radio" name="q2" id="q22" value="b"> <label for="q22">B. As quickly as necessary for it to be useful</label>
              </div>
              <div class="col-xs-12 col-sm-6">
                  <input type="radio" name="q2" id="q23" value="c"> <label for="q23">C. Never, it's a trap.</label><br />
                  <input type="radio" name="q2" id="q24" value="d"> <label for="q24">D. Whenever Darth Vader says they're good and ready.</label>
              </div>
            </div>
            </div>
            <div class="submit">
              <button name="quizsubmit" class="btn btn-primary">Submit</button>
              <div class="result"></div>
          </div>
        </div>
      </div>
      <!-- END QUIZ CONTAINER -->

<!-- START BATTLE CONTAINER -->
<div class="battle_container">

  <!-- START OEDI-WAN -->
  <div id="oedi-wan"></div>
  <!-- END OEDI-WAN -->

  <!-- START OEDI -->
  <div id="oedi">
    <div class="leia">
      <div class="blaster">
        <div class="lazer shot0"></div>
        <div class="lazer shot1"></div>
        <div class="lazer shot2"></div>
      </div>
    </div>
    <div class="yoda">
      <div class="blaster">
        <div class="lazer shot0"></div>
        <div class="lazer shot1"></div>
        <div class="lazer shot2"></div>
      </div>
    </div>
    <div class="luke">
      <div class="blaster">
        <div class="lazer shot0"></div>
        <div class="lazer shot1"></div>
        <div class="lazer shot2"></div>
      </div>
    </div>
    <div class="han">
      <div class="blaster">
        <div class="lazer shot0"></div>
        <div class="lazer shot1"></div>
        <div class="lazer shot2"></div>
      </div>
    </div>
  </div>
  <!-- END OEDI -->

  <!-- START JABBA CONTAINER -->
  <div class="jabba_container">
    <div id="jabba">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.43 273.05">
  <defs>
  <style>.a,.c,.h{fill:#9c9;}.a,.c{stroke:#663;stroke-width:2px;}.a,.c,.f,.g{stroke-miterlimit:10;}.b{fill:#ffc;}.c,.f{stroke-linecap:round;}.d{fill:#344713;}.e{fill:#af1710;}.f,.g{fill:none;}.f{stroke:#996;stroke-width:1.5px;}.g{stroke:#889171;}
  </style>
</defs>
<!-- Smile -->
<path class="a" d="M355.16 6.51s-4.9-11.9-21.7-.7-21.7 17.5-22.4 21.7-22.53 12.49-29.2 31.16c-3.56 10-9.81 11.13-11.33 17.67-2.33 10 10.44 10.64 3.33 19-5.67 6.67-11 9.48-12 13.67-1.45 6.14-1.33 22.33-12.33 28.33s-18.17 2.33-38.67 10.33-111 60-118.5 62-38.38 6.23-47.5 6.5c-51.5 1.5-43.28 28-43.5 31-2.5 33.5 66.5 24 92 22.5 7.14-.42 20.5-11.5 23-17 1.13 3.38 2 5.5 2 5.5s62.5 3 68.5 2.5 168.5-.5 178-1 87-4.5 89.5-7c12.75-1.25 15-7.25 17-13.25 3.81-11.42 4-59.25 1-64.75s-4.5-26.5-3-31-1-31.5-1-31.5 2.5-6.66.5-12c-3-8-6.33-8.67-8.33-10.17s12.23-6.5 10.83-13.5-13.77-19.63-22.17-16.83c-8-9.45-28.93-26.56-32.43-27.26s-6.3-11.9-14.7-16.1-14.7-7-16.8-7-7.7-13.3-30.1-2.8z"/><path class="b" d="M371.53 112c-115.5 10.5-84.17 67.67-86.67 76.92 1 36.42-70.7 22.09-84.33 27.75-35.33 14.67-93.33 14.67-93.33 14.67-36 2.67-82.31 11.19-86 13.33-12.67 7.33 48.42 6 51.33 5.33 14.38-3.23 40.83-6.46 46.83 7.42 13.63.13 33.69.72 37.17 1.25 8.67 1.33 63.67.83 94.67.67 20.18-.11 67.33.17 106-.5 82.66-2.17 103.83-6.67 105.16-14.67s7.5-40.83-1.83-52.17c4.67-48-18.17-69.83-35.17-70.83-5.5-.32-45.81-9.9-53.83-9.17z"/><path class="c" d="M20.53 248.67s22.08 4.5 43.58 1.5c44-4 61-30.25 63.25-29.5 4.94 2.06-7.75 26.5-8.75 29.5s-4.25 5.5-4.25 5.5"/><path class="b" d="M359.19 20s-16.21-16.75-31.33-6.67-13.37 15.89-14 19.67-18.33 7.53-24.33 24.33c-3.21 9-.63 13.79-2 19.67-2.1 9-4 24.67 12 24.33 8-.17 8.27-3.75 29.33-5 7.32-.43 33.24 8 44.33 6 37-6.67 30.29-13.81 33.67-17.67 2.33-2.67 22 6.67 28.67 5 2.18-.55 9.93-7.7 8.67-14s.33-14.33-3.67-13.33c-3.67-19.66-26.15-24.16-27.67-26.99-2.33-4.33-6.69-11.22-14.25-15s-13.23-6.3-15.12-6.3-4.14-3.49-24.3 5.96z"/><path class="d" d="M370.33 43.14a6 6 0 0 1 6.07-.47c2.1 1.17 10.73 9.57 14.93 10.73 0 0-12.13-3.27-14.23-4.2s-5.37-.7-6.07-1.63-.7-4.43-.7-4.43zM352.13 48.74c1.36-.34 6.77-2.57 7.93-.23s0 5-1.4 5.13l-6.77.7c-1.4 1.17-7.93 7-9.57 7.93s-10.73 6.07-11 5.6 7.45-6.09 9.1-7c4.71-2.56 9.84-11.66 11.71-12.13z"/><path class="e" d="M376.39 37.07s7.23-8.17 14.23-8.4 15.63 1.4 16.8 4-8.4 4.9-11.67 4.9-17.26-.96-19.36-.5z"/><path d="M390.63 28.67a10.44 10.44 0 0 0-1.83.25l.4 8.37c2.87.13 5.4.25 6.57.25.28 0 .63 0 1-.06l-1.24-8.69a44.77 44.77 0 0 0-4.9-.12z"/><path class="e" d="M311.29 43.61s11.43-6.77 15.63-7.47 16.33-.47 19.13 1.17 3.5 3.27 2.8 3.5-9.33 3.27-16.33 4c-8.38.8-20.29-.97-21.23-1.2z"/><path d="M332.38 44.77c1.21-.12 2.55-.32 3.81-.55l-1.33-8.43a56.5 56.5 0 0 0-8 .32V45a53.51 53.51 0 0 0 5.52-.23z"/><path class="f" d="M290.86 100s13 10.67 23.33 9.67 60-5.33 67.67-7.33a83.94 83.94 0 0 1 24-3c8 .33 11 2 16.33 0s.33-6.33 10-8.67"/><path class="g" d="M376.16 85.61c2.33 1.87 14-7.6 18-9.27s3 6.94 3 6.94M319.43 31.01s9.8-5.6 15.87-6.07 15.4 2.8 17.27 6.53M370.86 29.21s2.8-6.53 6.07-9.33 4.2-4.2 9.8-4.2 15.4 7.47 15.4 7.47M350.49 21.21s-11.67-7.47-17.27-6.07M393.63 48.01s8.4 2.33 13.07-2.8l4.67-5.13M402.56 51.07s11.2-1.4 13.53-3.27a8.91 8.91 0 0 0 2.77-5.13M309.86 48.74s12.13 1.4 16.33 1.87 14-1.87 15.87-3.73M335.19 84.34s8 2 12.67 3.67 19.67 1.66 19.67 1.66"/><path class="f" d="M288.36 117.17s8.83 8 20.5 7 36.17-14.83 73-12.5c9.41.6 41.67 7.33 44 8.33s9.33 4.33 9.33 4.33M438.19 106.34c.33-1 4.67-8 10.33-7s12.33 2.33 14 3a15.52 15.52 0 0 1 3.83 2.83"/><path class="h" d="M424.53 161.67s0 28.33 4.33 31.33 13 12.67 13.33 24.33-3 20.67 3 20.33 13-4.33 13.33-12-.33-18-3.67-23.33-7.32-7.66-10.66-7.66 5.33 4 5-4.67.33-18-4.67-23-7-6.33-13.33-10.33-6.66 5-6.66 5z"/><path class="a" d="M261.19 127c1 1.33 1.88 5.82 6 6s3.82 3.32 6.33-.46 3-6.28 5.22-4.71c5.78 4.17 6.67 17.58 8.7 17 2.33-.67 1.45-10.78 1.42-11.83s2.75 1.1 3.33 2.67 2.58 7.74 3.94 7.4c1.56-.4 2.06-10.15 2-11.56-.06-1.83 2.61 9 5 8.5 2-.45.83-6.55.67-8.33s-4.83-5.92-5.92-6.75-7.27-5-8.83-4.42 7.58-15.47-7.2-20.94c-23.99-8.9-22.27 25.28-20.66 27.43zM468.53 150c-2.67.33-12 1.33-16 .33s-2-3.33-3.33-7.67-1-6.33-3.67-6-10.33 15-12.33 14.33 2-13.67 2.33-14.67-3.33 1.33-4.33 2.67-5 8.67-6.67 7.33-1-10 1.33-11.67-6 8-6 8-3.33-4.67-2.67-6.33 8-6.67 9-7.67 9.33-4 10.67-3-2-15.59 13.67-17c22.33-1.98 20.66 41.02 18 41.35z"/><path class="f" d="M265.86 142.34s-2 16 .67 21.33 8.67 8.67 8.67 8.67M239.52 144l20.67 28M212.53 148s26.33 22.67 31.66 29.34 8.34 23.33 8.34 23.33M185.53 161s28 12.67 32 24.67c.94 2.83 5.33 22.67 5.33 22.67M166.19 174.34s18 9.33 23.33 16 4 10 4 12 10 9.33 10 9.33M149.86 185.33L173.19 202l4 18M129.86 193.67c9.39 6 14 6.63 19.33 13.33 2.09 2.61 8.67 16.67 8.67 16.67M119.86 199.33l9.33 9.34L147.86 224M104.19 209.67l12.67 10.66M85.53 214.34s12 .67 20 14.67M67.19 215.67s19.67 6.67 20.33 15.67M52.53 217s16.33 10.67 16.33 16M40.19 219.34s10 5.33 10.67 12.67M31.53 219s14 7.33 13.33 18"/><path id="smile" class="d" d="M315.36 80c8.83.67 41.2-9.6 46.8-11s22.53-1.27 26 .83c2.83 1.33 13 1 21 1.5 6.42-.87 10-7.17 17.52-15.43-3.82 10.94-14.49 19.44-18.82 18.44-14.32-1-23.73-2.33-25.83-2.33s-15.22-.22-17.67.83-6.75.37-12 3.52-18.5 4.95-21.7 5.31-9.06 2.2-13.13 2c-7.5-.33-18.17-7.67-18.5-19.33 2 3.16 12.48 17.41 16.33 15.66z"/>
<!-- Jabba Frown -->
<path id="frown" class="d" style="visibility:hidden" d="M299.86 86.67s19.6-6.65 23.45-8.4 33.25-17.85 38.85-19.25 23.1-1.4 26.6.7 14 9.45 21.35 10.5 20.3 6 19.6 7.7-19.6-3.5-21.7-4.2-23.45-12.6-25.55-12.6-14.35-1.05-16.8 0-8 2.1-13.3 5.25-18.5 12.94-21.7 13.3-10.85 1.4-14.35 3.5-14.2 4.5-15.45 4.25-1-.75-1-.75z"/>
<path id="smile2" class="d" style="visibility:hidden" d="M315.36 80c8.83.67 41.2-9.6 46.8-11s22.53-1.27 26 .83c2.83 1.33 13 1 21 1.5 6.42-.87 10-7.17 17.52-15.43-3.82 10.94-14.49 19.44-18.82 18.44-14.32-1-23.73-2.33-25.83-2.33s-15.22-.22-17.67.83-6.75.37-12 3.52-18.5 4.95-21.7 5.31-9.06 2.2-13.13 2c-7.5-.33-18.17-7.67-18.5-19.33 2 3.16 12.48 17.41 16.33 15.66z"/>
</svg>
  </div>
  <div id="platform"></div>
  </div>
  <!-- END JABBA CONTAINER -->
  <!-- START PRINCIPLES -->
  <div class="captured_principles_container">
    <ul class="flex-container">
      <li class="flex-item cp colors timely g0" data-url="timely" title="Timely">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors granular g0" data-url="granular" title="Granular">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors available g0" data-url="available-for-free" title="Available for Free">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors complete g1" data-url="complete-and-in-bulk" title="Complete and in Bulk">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors analyzable g1" data-url="analyzable" title="Analyzable">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors nondiscrim g1" data-url="non-discriminatory" title="Non-Discriminatory">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors nonprop g2" data-url="non-proprietary" title="Non-Proprietary">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors license g2" data-url="license-free" title="License-Free">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
      <li class="flex-item cp colors permanent g2" data-url="permanently-available" title="Permanently Available">
        <div class="chain1"></div>
        <div class="chain2"></div>
        <div class="lock"></div>
      </li>
    </ul>
  </div>
  <!-- END PRINCIPLES -->
</div>
<!-- END BATTLE CONTAINER -->
<div id="music_container"></div>

</div>

  </section>
  <!-- END QUIZ CONTENT -->

  <div class="social-media-container">
  <!--Facebook Button BEGIN -------------------------------------->
  <div class="fb-share-button" data-href="http://openelectiondata.net/holiday/" data-layout="button" data-mobile-iframe="true"></div>
  <!--FAcebook Button END --------------------------------------->

  <!--Twitter Button begin -->

<a href="https://twitter.com/share" class="twitter-share-button" data-via="openelectdata">Tweet</a>

  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
  <!--Twitter Button END -->

  <!-- START REFRESH BUTTON -->
  <input type="button" value="Start Over" class="refresh btn btn-primary" onClick="window.location.reload()">
  <!-- END REFRESH BUTTON -->

  </div>
