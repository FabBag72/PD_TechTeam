// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function IMPORTServerConfig(ctx) {

                if (typeof FileReader === 'undefined') {
                    ctx.error(TcHmi.Errors.E_NOT_SUPPORTED, {
                        code: TcHmi.Errors.E_NOT_SUPPORTED,
                        message: TcHmi.Errors[TcHmi.Errors.E_NOT_SUPPORTED],
                        reason: 'The Browser does not support the FileReader API.'
                    });
                    return;
                }

                // Create a dummy HTMLAnchorElement
                var inputElement = document.createElement('input');

                inputElement.type = 'file';
                inputElement.accept = '.json';
                inputElement.multiple = true;

                var pendingFileCount = 0;

                inputElement.addEventListener('change', function (data) {
                    if (inputElement.files) {
                        pendingFileCount += inputElement.files.length;
                        for (var i = 0, numFiles = inputElement.files.length; i < numFiles; i++) {
                            var file = inputElement.files[i];
                            var reader = new FileReader();
                            reader.addEventListener('loadend', function (data2) {
                                var request = TcHmi.ValueConverter.toObject(reader.result);
                                TcHmi.Server.writeSymbol("Import", request, function (data) {
                                    if (data.error !== TcHmi.Errors.NONE) {
                                        ctx.error(TcHmi.Errors.ERROR);
                                    }

                                    var response = data.response;
                                    if (response.error !== undefined) {
                                        ctx.error(TcHmi.Errors.ERROR);
                                    }

                                    var commands = response.commands;
                                    if (commands === undefined) {
                                        ctx.error(TcHmi.Errors.ERROR);
                                    }

                                    var command = response.commands[0];
                                    if (command === undefined) {
                                        ctx.error(TcHmi.Errors.ERROR);
                                    }

                                    if (command.error !== undefined) {
                                        ctx.error(TcHmi.Errors.ERROR);
                                    }

                                    // Inform the system that we are done
                                    ctx.success();
                                });
                            });
                            reader.addEventListener('error', function (data2) {
                                if (pendingFileCount <= 0) {
                                    // abort in error state
                                    return;
                                }
                                pendingFileCount = 0;
                                ctx.error(TcHmi.Errors.ERROR);
                            });
                            reader.readAsText(file);
                        }
                    } else {
                        if (pendingFileCount <= 0) {
                            // abort in error state
                            return;
                        }
                        pendingFileCount = 0;
                        ctx.error(TcHmi.Errors.ERROR);
                    }
                });
                // Simulate a click
                inputElement.click();

                return;    // We are running async so the return value is not used

            };
            TcHmiProject1.IMPORTServerConfig = IMPORTServerConfig;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('IMPORTServerConfig', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.IMPORTServerConfig);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
