// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ChangePsw(user, password) {
                TcHmi.Server.UserManagement.updateUser(
                    user,
                    {
                        domain: 'TcHmiUserManagement',
                        enabled: true,
                        newName: user,
                        password: password,
                        autoLogout: 'P30D',
                        locale: 'project',
                        addGroups: user.groups,
                        removeGoups: [],
                    },
                    function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            alert("Cambio password avvenuto con successo");
                        } else {
                            alert("Cambio password NON effettuato. Verificare di avere i diritti necessari.");
                            console.log("Dettagli errore" + data.error);
                        }

                    }
                );
            }
            TcHmiProject1.ChangePsw = ChangePsw;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('ChangePsw', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.ChangePsw);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
