app.directive('miBuscador',[function() {
    return {
        template: '<input type="text" placeholder="Introduce tu texto a buscar" ng-model="buscar">',
        restrict: 'E',
        scope: {
            buscar: '='
        },
        link: function (scope, element) {
            scope.inline={'display':'inline-block','border':'0px','margin':'0px','border-color':'black','vertical-align':'middle'};
            scope.widht80 ={'width':'80%'}
            scope.center={'text-align':'center'}
           $(element).find('i').css({
                'font-size' : '12px',
                'padding' : '8px',
                'color' : 'black',
                'background-color':'white',
                'vertical-align':'middle',
                'left': '32px',
                'top': '0px'
            });
            $(element).find('input').css({
                'border-radius' : '0px',
                'height': '32px',
                'padding': '0 16px 0 32px'
            });
            scope.margeStyleObj = function(objectList) {
            var obj = {};
            objectList.forEach(function(x) {
              for (var i in x)
                obj[i] = x[i];
            });
            return obj;
          }
        }
    };
}]);