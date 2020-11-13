// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ExportServerConfig(ctx) {
                // Create a dummy HTMLAnchorElement
                var downloaderAElement = document.createElement('a');

                downloaderAElement.download = 'TcHmiSrv.json';
                // Create correct link for export function of the server
                downloaderAElement.href = '/Export/TcHmiSrv';
                // Hide dummy element to prevent visual impact
                downloaderAElement.style.display = 'none';
                // Append dummy element, so even Firefox allows a simulated click.
                document.body.appendChild(downloaderAElement);
                // Simulate a click. Works probably only if this action is triggered by a user interaction (not on load or symbol change)
                downloaderAElement.click();
                // Remove dummy element
                document.body.removeChild(downloaderAElement);

                // Inform the system that we are done
                ctx.success();

                return;    // We are running async so the return value is not used
            };
            TcHmiProject1.ExportServerConfig = ExportServerConfig;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('ExportServerConfig', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.ExportServerConfig);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
