---
title: 'Shark Week: Quiz & Competitive Game'
display_order: 1
excerpt: 'Dive for Data. Avoid the Sharks. Save the Election. Test your knowledge of the elections process and earn more lives to help you rescue as many ballots as possible. Can you top the leaderboard with a JAWS-dropping high score?'
preview_img: sharkweek-preview.png
image: /holiday/sharkweek/assets/oedi-shark-week.png
head:
  - /holiday/sharkweek/stylesheets/styles.css
  - /holiday/sharkweek/stylesheets/bootstrap-social.css
footer:
  - https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
  - https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js
  - https://use.fontawesome.com/908da1ccad.js
  - https://www.gstatic.com/firebasejs/3.0.2/firebase.js
  - https://apis.google.com/js/platform.js
  - /holiday/sharkweek/js/modernizr-custom.js
  - /holiday/sharkweek/js/leaderboard.js
  - /holiday/sharkweek/js/authentication.js
  - /holiday/sharkweek/js/quiz.js
  - /holiday/sharkweek/js/p5.js
  - /holiday/sharkweek/js/p5.dom.js
  - /holiday/sharkweek/js/p5.sound.js
  - /holiday/sharkweek/js/sketch_b.js
---

<div class="container">

<!-- START: Welcome & Instructions -->
<section id="welcome">
  <h1>Ballots: Casted Away</h1>
  <div id="instructions" class="row col-xs-12 col-md-9">
    <p>Someone's thrown a Sharkville ballot box overboard! Take the bait and help OEDI retrieve the missing ballots! Test your knowledge of the election process, but watch out for the sharks! Check back daily for new quiz questions!</p>
  </div>
</section>
<!-- END: Welcome & Leaderboard -->

<div class="row">

  <!-- START: Game Canvas -->
  <div class="col-xs-12 col-md-9">

  <!-- START: Quiz -->
  <section id="quiz">
    <div class="result"></div>
    <div class="questions"></div>
    <div class="submit">
        <button name="quizsubmit" class="btn btn-orange">Submit</button>
      </div>
  </section>
  <!-- END: Quiz -->

  <section id="game-holder">
    <div class="directions">
      <span class='heading'>Instructions:</span><br />
      <strong>Use the left and right arrows to swim and collect the ballots.</strong><br />
      Avoid the sharks!<br />
      Each day, answer new quiz questions to earn more lives.
    </div>
    <div class="start-buttons-container">
      <button id="play-game" class="btn btn-orange">Play Game</button>
      <button id="start-quiz" class="btn btn-orange" style="display:none;">Take Quiz</button>
      <button id="free-play" class="btn btn-orange">Free Play</button>
    </div>
    <button type="button" class="btn btn-instructions" data-toggle="modal" data-target="#game_instructions_modal">
      <img src="assets/help.png" title="Help" />
    </button>
    <div class="sound-buttons-container">
      <img src="assets/sound-play-1.png" title="Mute Sound" class="sound-play" />
      <img src="assets/sound-mute-1.png" title="Play Sound" class="sound-mute" />
    </div>
    <button type="button" class="btn btn-pause">
      <img src="assets/pause.png" title="Pause Game" />
    </button>

  <div id="game-over-results"></div>
  <div id="game-over-sharebuttons"></div>
  </section>
  </div>
  <!-- END: Game Canvas -->

  <div class="col-xs-12 col-md-3">
    <section>
      <h2>Leaderboard</h2>
      <div id="highestscore">
        Overall High Score: <span class="highestScoreDiv"></span>
      </div><br />
      <table id="leaderboardTable" class="leaderboard"></table>
      <a id="fullLeaderboardLink" href="#" data-toggle="modal" data-target="#leaderboard_modal">View Full Leaderboard</a><br /><br />
      <div id="welcomeMessage">
        <span id="welcomeUser"></span>
        <div id="userInfo">
          <span id="currentRanking"></span>
          <span id="personalHighScore"></span>
          <span id="livesEarnedContainer"></span>
        </div>
      </div>
      <a class="btn btn-orange sign-out">
        Sign Out
      </a>     
    </section>
    <!-- START: Authentication Screen -->
    <section id="authentication">
      <a class="btn btn-block btn-social btn-twitter">
        <span class="fa fa-twitter"></span> Sign in with Twitter
      </a>
      <a class="btn btn-block btn-social btn-facebook">
        <span class="fa fa-facebook"></span> Sign in with Facebook
      </a>
      <a class="btn btn-block btn-social btn-google">
        <span class="fa fa-google"></span> Sign in with Google
      </a>
    </section>
    <br />
    <span class="sw_credits"><a id="creditsLink" href="#" data-toggle="modal" data-target="#credits_modal">Credits</a><br /></span>
    <!-- END: Authentication Screen -->
  </div>

</div>

</div>

<div id="game_instructions_modal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <p class="modal-title blue"><strong>Help &amp; Instructions</strong></p>
      </div>
      <div id="game_modal_result" class="modal-body">
      <strong>Game Play: Quiz</strong><br />
      <ul>
        <li>Earn <strong>1</strong> life for every question answered correctly</li>
        <li>For every question answered correctly, you get an opportunity to earn <strong>1</strong> life by getting the ballot with the correct letter</li>
        <li>Hitting a shark moves you to the next question without earning an extra life.</li>
        <li>There are new quiz questions every day from 6/26/16 - 6/30/16</li>
        <li>Your lives earned will reset every day until 7/1/16</li>
      </ul>
      <strong>Game Play: Free Play</strong><br />
      <ul>
        <li>Lives earned from taking the quiz are the number of lives for free play</li>
        <li>Earn more lives by taking the quiz again; maximum number of lives is <strong>6</strong></li>
        <li>Collect as many ballots as possible</li>
        <li>Hitting a shark costs <strong>1</strong> life</li>
        <li>Game Over when all lives lost</li>
      </ul>
      <strong>Controls</strong><br />
        <dl class="dl-horizontal">
          <dt>Left Arrow</dt>
          <dd>Move Left</dd>
          <dt>Right Arrow</dt>
          <dd>Move Right</dd>
          <dt>Mobile/Touch Screen</dt>
          <dd>Touch left or right of OEDI to change directions</dd>
          <dt>Spacebar</dt>
          <dd>Pause/Play Game</dd>
          <dt><img src="assets/sound-play-1.png" title="Mute Sound" class="sound-play" style="display:inline" />/<img src="assets/sound-mute-1.png" title="Play Sound" class="sound-mute" style="display:inline" /></dt>
          <dd>Mute/Play Sound</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

<div id="leaderboard_modal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <p class="modal-title blue"><strong>Complete Leaderboard</strong></p>
      </div>
      <div id="leaderboard_modal_result" class="modal-body">
        <div id="highestscore">
          Overall High Score: <span class="highestScoreDiv"></span>
        </div><br />
        <table id="leaderboardTableFull" class="leaderboard"></table><br />
      </div>
    </div>
  </div>
</div>

<div id="credits_modal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <p class="modal-title blue"><strong>Credits</strong></p>
      </div>
      <div id="credits_modal_result" class="modal-body">
        <strong>Created by:</strong><br />
        <ul>
          <li>Michelle Brown</li>
          <li>Jacque Schrag</li>
          <li>Amanda Pleasant</li>
          <li>Ben Mindes</li>
          <li>Michael McNulty</li>
          <li>Maggie Suter</li>
          <li>Sarah Cooper</li>
        </ul>
        <strong>Special thanks to:</strong><br />
        <ul>
          <li>Tomas Husted</li>
          <li>Lyndsey Romick</li>
          <li>Khadija Boussen</li>
          <li>Jared Short</li>
        </ul>
        <strong>Created with:</strong><br />
        <ul>
          <li><a href="http://p5js.org/" target="_blank">p5.js &amp; libraries</a></li>
        </ul>
        <strong>Inspired by:</strong><br />
          <ul>
            <li>Shark Week!</li>
            <li>Jawesome!</li>
             <li>Jawsdropping</li>
             <li>Take a bite out of something</li>
             <li>Take a byte out of something - multiple puns!</li>
             <li>Somefin</li>
             <li>Card shark</li>
             <li>Take the bait - more fish related but could still work</li>
             <li>Fintastic</li>
             <li>Fin-ished</li>
             <li>Ballots are friends, not food</li>
             <li>We’re gonna need a bigger ballot</li>
             <li>Sharkville</li>
             <li>Sharktown</li>
             <li>Island Town</li>
             <li>Bait box</li>
             <li>Bite the vote</li>
          </ul>
      </div>
    </div>
  </div>
</div>

<div>
  <iframe id="feedback" src="https://docs.google.com/forms/d/1HN6qJ7dinQV12QEgCPSYDcpJsPPNMpTjgUaKCPT-jQg/viewform?embedded=true" width="760" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
</div>
<button class="btn btn-orange btn-feedback">Give Feedback</button>

<!---  ADDED JS for FACEBook share -->
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '144243785989962',
      xfbml      : true,
      version    : 'v2.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<!-- ENd of JS for facebook share button -->
