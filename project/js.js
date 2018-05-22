/*Code JavaScript*/

var d = new Date();

/*Api de Calendário com Feriados || Calendar api with holidays;
  **Get Token API : http://www.calendario.com.br/dev/api_feriados_municipais_estaduais_nacionais.php
  **More information Calendar: http://www.calendario.com.br/
  **More information Datepicker: https://bootstrap-datepicker.readthedocs.io/en/latest/options.html#beforeshowday
*/

//Parameters your Token,City,State || Parametros seu token,cidade,estado
$.getJSON('https://api.calendario.com.br/?json=true&ano='+ d.getFullYear() +'&estado=AC&cidade=RIO_BRANCO&token=[your-token]',function(dates){

$('#datepicker').datepicker({
    //Get function highlightDays();
    beforeShowDay: highlightDays,
})

function highlightDays(date){

    for (var i = 0; i < dates.length; i++) {

        //Date format Calendar Api pattern;
        var dateAtual = dates[i]['date'];
        //Formatting date pattern;
        var day = dateAtual[0] + dateAtual[1];
        var month = dateAtual[3] + dateAtual[4];
        //Date formatted in Datepicker pattern
        var dateFormatted = month + "/" + day + "/" + d.getFullYear();
        //Comparing dates true case returns class 'highlight'
        if (new Date(dateFormatted).toString() == date.toString()) {

            return {classes: 'highlight', tooltip: dates[i]['name'] + ' - ' + dates[i]['type']};

        }
    }
    return [true, ''];
}});
