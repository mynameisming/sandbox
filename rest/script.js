function Request(){
    this.apiRequest = function(url){
        $.ajax(url,{
            success: function(result){
                $.each(result.Results, function(i,obj){
                    // Build a generic list
                })
            }
        })
    };
};

$(document).ready(function(){
    var displayUl = new Request();
    displayUl.apiRequest("http://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=i0e8jczt5qzhm9ttg673cmdkp&Filter=ProductId:TEST_ARTICLE1");


});
