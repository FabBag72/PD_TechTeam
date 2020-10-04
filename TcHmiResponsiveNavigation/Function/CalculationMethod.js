// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var TcHmiResponsiveNavigation;
        (function (TcHmiResponsiveNavigation) {
            function CalculationMethod(par1) {
                TcHmi.Symbol.writeEx("%s%PLC1.MAIN.Base::Calculation%/s%", { in1: 1, in2: 3, operator: 1 }, function (data) {
                    console.log(data);
                });
            }
            TcHmiResponsiveNavigation.CalculationMethod = CalculationMethod;
        })(TcHmiResponsiveNavigation = Functions.TcHmiResponsiveNavigation || (Functions.TcHmiResponsiveNavigation = {}));
        Functions.registerFunctionEx('CalculationMethod', 'TcHmi.Functions.TcHmiResponsiveNavigation', TcHmiResponsiveNavigation.CalculationMethod);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);