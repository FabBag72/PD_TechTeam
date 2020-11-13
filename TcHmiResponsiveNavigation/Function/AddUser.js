// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function AddUser(newUser_name, newUser_psw, newUser_group) {
                TcHmi.Server.UserManagement.addUserEx(
                    newUser_name,
                    newUser_psw,
                    {
                        domain: 'TcHmiUserManagement',
                        groups: [newUser_group],
                        enabled: true,
                        autoLogout: 'P30D',      
                        locale: 'project',                                          
                        timeFormatLocale: 'project',
                        timeZone: 'project',                        
                    },
                    { timeout: 2000 },
                    function (data) {
                        if (data.error == TcHmi.Errors.NONE) {
                            alert("New User added SUCCESSFULLY");
                        } else {
                            alert("New User NOT Added");
                            console.log("Dettagli errore" + data.error);
                        }

                    }

                );
            }
            TcHmiProject1.AddUser = AddUser;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('AddUser', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.AddUser);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
