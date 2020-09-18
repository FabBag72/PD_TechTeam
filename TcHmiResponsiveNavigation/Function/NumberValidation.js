// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var NumberValidation = function NumberValidation(ctx, symbolExpr, maximun, minimun, nDecPt) {
        // Property Text reading
        console.log(symbolExpr);
        TcHmi.Symbol.readEx2(symbolExpr, function (data) {
            if (data.error === TcHmi.Errors.NONE) {
                // Handle result value... 
                var value = data.value;
                console.log(value);
                value = Number(value);
                if (isNaN(value)) {
                    alert('Not allowed value');
                    console.log(value);
                    return;
                }
                if (value > maximun){
                    alert('The value is greater than maximun');
                } else if (value < minimun) {
                    alert('The value is lower than minmun');
                } else {
                    value = value.toFixed(nDecPt);
                    console.log(value);
                    ctx.success(value);
                    return;
                }              
            } else {
                // Handle error... 
                alert('TcHmi.Symbol.readEx2 error');
            }
        });
    };
    
    TcHmi.Functions.registerFunction('NumberValidation', NumberValidation);
})(TcHmi);
