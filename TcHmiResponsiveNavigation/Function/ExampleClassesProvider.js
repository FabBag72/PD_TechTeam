// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var ExampleClassesProvider = function ExampleClassesProvider(rowData, rowIndex, rowNumber) {
        var classes = [];

        var value = Number(rowData.Value);

        if (isNaN(value)) {
            classes.push('isNaN');
        } else {
            if (rowData.Value > rowData.Maximun) {
                classes.push('max-input');
            }

            if (rowData.Value < rowData.Minimun) {
                classes.push('min-input');
            }
        }

        return classes;
    };
    
    TcHmi.Functions.registerFunction('ExampleClassesProvider', ExampleClassesProvider);
})(TcHmi);
