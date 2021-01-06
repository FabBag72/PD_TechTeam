// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiResponsiveNavigation;
        (function (TcHmiResponsiveNavigation) {
            function SetColor(Control_Identifier, SetColorRed, SetColorBlack, SetColorBlue) {
                if (SetColorRed) {
                    document.getElementById(Control_Identifier).style.borderColor = "red";
                } else {
                    if (SetColorBlack) {
                        document.getElementById(Control_Identifier).style.borderColor = "black";
                    } else {
                        if (SetColorBlue) {
                            document.getElementById(Control_Identifier).style.borderColor = "blue";
                        }
                    }
                }
            }
            TcHmiResponsiveNavigation.SetColor = SetColor;
        })(TcHmiResponsiveNavigation = Functions.TcHmiResponsiveNavigation || (Functions.TcHmiResponsiveNavigation = {}));
        Functions.registerFunctionEx('SetColor', 'TcHmi.Functions.TcHmiResponsiveNavigation', TcHmiResponsiveNavigation.SetColor);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);