$(document).ready(function(){
    var myfunc = function(){
        console.log(test);
    }
    var test = new massrel.Poller({frequency:3000, limit: 2},myfunc);
    
    test.start()

});
