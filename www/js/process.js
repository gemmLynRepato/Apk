Framework7.prototype.plugins.math = function (app, params) {
    if (!params) return;

    var stat = function(){
      'use strict';
      return {
            mean:function(num){
              var y = 0;
              $$.each(num,function(a,b){
                y = y + b;
              })
              return Math.round(y/num.length);
            },
        median:function (num){
                num.sort(function(a,b){return a-b});
                var median= 0;
                var num2 = num.length;
                if (num2 % 2 == 0) {
                median = ( num [num2 / 2-1] + num [num2/2])/2;
                } else {
                median = num [(num2 -1) /2];
                }
                return median;
        },
       mode:function(num){
                if (num.length===0) return null;
                var countMode = [],
                modes=[num[0]],
                maxVal = 0;
              num.forEach(function(a){
                if (countMode[a]===undefined)
                {
                     countMode[a]=1;
                }
                else
                {
                 countMode[a]++;
                }
                if(countMode[a]>maxVal){
                    modes =[a];
                    maxVal=countMode[a];
                    }
                else if (countMode[a]==maxVal){
                    modes.push(a);
                    maxVal=countMode[a];
                 }
                 if (modes ==countMode) {
                  modes = 'No Mode in this set';
                 }
            });
               return modes; 
           }
        }
       
    }();

return {
        hooks: {
            appInit: function () {
                $$("#btn_calc").click(function(){
                    var input = $$("#input_ages").val().split(',');
                    $$.each(input,function(a,b){
                        input[a] = parseInt(input[a]);
                    });
               
                    $$("#statSolutions").html("Mean: "+stat.mean(input)+"<br/>Median: "+stat.median(input)+"<br/>Mode: "+stat.mode(input));



                });
            }
        }
    };
};

var $$ = Dom7;

var app = new Framework7({
  material:true,
  math:true
});


