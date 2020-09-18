// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var SetStructElementByIndex = function (StructName,StructElement,Index,Value) {
        //%s%PLC1.GVL.arrStruct%/s%
        //%s%PLC1.GVL.arrStruct[0]::A%/s%
        //console.log(StructName);
        var pos = StructName.lastIndexOf("%/s%");
        //console.log(pos);
        var _strName = StructName.slice(0, pos);
        _strName = _strName + '[' + Index + ']::' + StructElement + '%/s%';
        console.log(_strName);
        TcHmi.Symbol.writeEx(_strName, Value, function (data) {
            if (data.error === TcHmi.Errors.NONE) {
                console.log('success');
            } else {
                console.log('error');
            }
        });
    };
    
    TcHmi.Functions.registerFunction('SetStructElementByIndex', SetStructElementByIndex);
})(TcHmi);
