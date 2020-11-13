// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ListGroups(ctx) {
                TcHmi.Server.UserManagement.listUserGroupsEx(
                    null,
                    { timeout: 2000 },
                    function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            // Are Guests able to fetch current user status?
                            console.log(data.groupDetailsList.__SystemGuests.symbols.GetCurrentUser === TcHmi.Server.ACCESS.READWRITE);
                            console.log(data.groupDetailsList);
                            /*
                            {
                                "__SystemAdministrators": {
                                    "enabled": true,
                                    "fileAccess": 3,
                                    "files": {},
                                    "symbolAccess": 3,
                                    "symbols": {}
                                },
                                "__SystemGuests": {
                                    "enabled": true,
                                    "fileAccess": 0,
                                    "files": {},
                                    "symbolAccess": 0,
                                    "symbols": {
                                        "GetCurrentUser": 3,
                                        "IsAuthRequired": 3,
                                        "ListUserNames": 3,
                                        "Login": 3
                                    }
                                } // and more…
                            }
                            */
                        } else {
                            // Error
                        }
                    }
                );
            }
            TcHmiProject1.ListGroups = ListGroups;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('ListGroups', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.ListGroups);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
