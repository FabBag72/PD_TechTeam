// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var TcHmiResponsiveNavigation;
        (function (TcHmiResponsiveNavigation) {
            function CalculationMethod(ctx, in1, in2, operator) {
                TcHmi.Symbol.writeEx("%s%PLC1.MAIN.Base::Calculation%/s%", { in1: in1, in2: in2, operator: operator}, function (data) {
                    var value = data.value;
                    value = value.toString();
                    console.log(value);
                    ctx.success(value);
                    return;
                });
            }
            TcHmiResponsiveNavigation.CalculationMethod = CalculationMethod;
        })(TcHmiResponsiveNavigation = Functions.TcHmiResponsiveNavigation || (Functions.TcHmiResponsiveNavigation = {}));
        Functions.registerFunctionEx('CalculationMethod', 'TcHmi.Functions.TcHmiResponsiveNavigation', TcHmiResponsiveNavigation.CalculationMethod);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);