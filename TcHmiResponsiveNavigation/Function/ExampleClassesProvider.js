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

        var value = Number(rowData.Value);  //casting to number

        if (isNaN(value)) {         //if it is not a number
            classes.push('isNaN');  //use the class 'isNan' of ExampleStyle.css file
        } else {
            if (rowData.Value > rowData.Maximun) {  //if greater than max  
                classes.push('max-input');          //use the class 'max-input' of ExampleStyle.css file
            }

            if (rowData.Value < rowData.Minimun) {  //if lower than max 
                classes.push('min-input');          //use the class 'min-input' of ExampleStyle.css file
            }
        }

        return classes;
    };
    
    TcHmi.Functions.registerFunction('ExampleClassesProvider', ExampleClassesProvider);
})(TcHmi);
