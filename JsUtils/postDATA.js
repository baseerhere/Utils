(function ($) {
    $.postDATA = function (serviceurl, formData, successcallback, errorcallback) {
        $.ajax({
            url: serviceurl,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            type: "POST",
            dataType: "JSON",
            data: formData,
            success: successcallback,
            error: errorcallback
        });
    };
}(jQuery));