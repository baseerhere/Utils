function SetpopupWindow(_ElementID, _click) {
    // get window width
    var _browserHeight = $(document).height();
    var _browserWidth = $(document).width();

    var _iframeWidth = $(_ElementID).data("width");
    var _iframeHeight = $(_ElementID).data("height");

    var _leftMargin = eval(_browserWidth / 2) - eval(_iframeWidth / 2);
    var _topMargin = eval(_browserHeight / 2) - eval(_iframeHeight / 2);

    var _popupWindow;
    var _append = true;

    if ($(".popupWindow").length) {
        $(".popupWindow").empty();
        _popupWindow = $(".popupWindow");
        _append = false;
    }
    else {
        _popupWindow = $("<div class=\"popupWindow\"></div>");
    }

    if ($(".popupWindow-Shadow").length <= 0) {
        var _popupWindowShadow = $("<div class=\"popupWindow-Shadow\"></div>");
        _popupWindowShadow.css("width", _browserWidth + "px");
        _popupWindowShadow.css("height", _browserHeight + "px");
        _popupWindowShadow.css("left", "0px");
        _popupWindowShadow.css("top", "0px");
        $("body").append(_popupWindowShadow);
    }

    // Append the iframe
    var _iframe = $("<iframe class=\"popupWindow-iFrame\"></iframe>");
    _iframe.css("width", _iframeWidth + "px");
    _iframe.css("height", _iframeHeight + "px");

    _iframe.attr("src", $(_ElementID).data("url"));
    _iframe.attr("scrolling", "no");
    _iframe.attr("frameborder", "0");

    _popupWindow.append(_iframe);

    if (_click != 'undefined' && _click != null) {
        _popupWindow.css("left", _click.clientX + "px");
        _popupWindow.css("top", _click.clientY + "px");
    }

    if (_append == true) {
        _popupWindow.css({
            width: _iframeWidth + "px",
            height: _iframeHeight + "px",
            left: _leftMargin + "px",
            top: _topMargin + "px"
        });
    }
    else {
        _popupWindow.css({
            width: _iframeWidth + "px",
            height: _iframeHeight + "px",
            left: _leftMargin + "px",
            top: _topMargin + "px"
        });
    }

    if (_append) {
        $("body").append(_popupWindow);
        $(".popupWindow-Shadow").click(function () {
            $(".popupWindow").remove();
            $(".popupWindow-Shadow").remove();
        });
    }
}

function ClosepopupWindow() {
    $(".popupWindow").animate({
        top: "-1000px"
    }, 400);

    setTimeout(function () {
        $(".popupWindow").remove();
        $(".popupWindow-Shadow").remove();
    }, 400);

}