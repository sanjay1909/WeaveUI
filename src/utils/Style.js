import appendVendorPrefix from './appendVendorPrefix';



(function (module) {


    function Style() {

    }



    function merge(into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }

        return into;
    }

    Style.mergeStyleObjects = function (into, obj, appendVendorPrefix) {
        var styleObject = merge(into, obj);
        if (appendVendorPrefix)
            return Style.appendVendorPrefix(styleObject)
        else return styleObject;
    }




    Style.getStyle = function (style) {
        return appendVendorPrefix(style);
    }

    Style.appendVendorPrefix = function (style) {
        return appendVendorPrefix(style);
    }







    // due to bootstrap Navbar zindex (1029) value we have to give 1030 for overlay
    Style.overlayContainer = function (isOpen) {
        return appendVendorPrefix({
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            background: 'rgba(0, 0, 0, 0.1)',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
            zIndex: 1030
        });
    }

    Style.modal = function (isOpen) {
        return appendVendorPrefix({
            position: 'fixed',
            zIndex: 1050,
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s',

        });
    }





    module.exports = Style;

}(module));
