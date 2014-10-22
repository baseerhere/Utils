(function ($) {
    $.getDATA = function (serviceurl, successcallback, errorcallback) {
        $.ajax({
            url: serviceurl,
            type: "GET",
            dataType: "JSON",
            success: successcallback,
            error: errorcallback
        });
    };
}(jQuery));