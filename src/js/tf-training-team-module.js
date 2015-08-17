(function(){
  'use strict';

  angular.module('TFTrainingTeam', ['ui.bootstrap'])
    .controller('TFTrainingTeamController', TFTrainingTeamController);

    function TFTrainingTeamController($timeout) {
      var vm = this;

      vm.aboutSelected = 'team';

      vm.powerfitnessVisible = true;
      vm.osceolaVisible = true;

      vm.testimonials = [
        {
          id: '1',
          img: 'img/adrienne-transformation.jpg',
          text: "A long time 1-On-1 PT client, Adrienne Rizwan and I, have become dear friends, not only because she is extremely kind and selfless, but also because her relentless work ethic and dedication have earned my most sincere respect. The visual and numerical confirmation of her \"Before\" and \"After\" is really only a small insight into how inspirational this \"Brit that won\'t quit\" is to all around her.AMAZING life transformation here, Folks."
        },
        {
          id: '2',
          img: 'img/luis-transformation.jpg',
          text: "Luis Salgado has done it!!! This 1-on-1 PT client of mine has accomplished a complete 180° lifestyle change and his results are AWESOME!!!"
        },
        {
          id: '3',
          img: 'img/marissa-transformation.jpg',
          text: "1-On-1 PT Client and C.O.R.E. BootCAMP Squad Leader. Struggling through a tough pregnancy, Marissa found herself inactive, unmotivated, and carrying a weight of almost 200 lbs. Exercise and food struggles are something many of us deal with, but what set her apart in this transformation is the way she approached her future change. After the birth of our daughter, Marissa chose action over excuse. It was at this point where all passive behavior was cast out. Tough, intense workouts and consistent, smart eating were the foundations of her change. While she's not where she wants to be just yet, she continues to push forward and become more educated in her fitness journey."
        },
        {
          id: '4',
          img: 'img/rich-transformation.jpg',
          text: "It took Jean Richard Pierre a little bit of persuasion from some friends to give our C.O.R.E. BootCAMP a try, but once he gave our H.I.I.T. sessions a shot, he was hooked. Our workouts are fun and challenging, but more importantly, the teamwork of the TF Training Team Fitness Family is what kept him coming back. Down 52 lbs and 6 inches in his waist, Rich is now one of our strongest campers and admired by all for his intense work ethic and always lovable/helpful demeanor."
        },
        {
          id: '5',
          img: 'img/kelly-transformation.jpg',
          text: "While a picture may be worth a 1,000 words, there are only 5 words that matter when describing the amazing transformation of this hard working, always helpful, mother of 2......KELLY O\'BRIEN CHOSE C.O.R.E. BootCAMP."
        }
      ];

      vm.aboutSelect = aboutSelect;
      vm.showMap = showMap;

      aboutSelect('team');

      $timeout(function() {
        showMap('osceola')
      }, 500);

      function aboutSelect(item) {
        vm.aboutSelected = item;
      }

      function showMap(mapName) {
        if (mapName === 'osceola') {
          vm.osceolaVisible = true;
          vm.powerfitnessVisible = false;
        } else {
          vm.osceolaVisible = false;
          vm.powerfitnessVisible = true;
        }
      }

    }
})();


