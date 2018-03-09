var api = null;

var iniciarVideoConferencia = function()
{

  if (api != null){
     api.executeCommand('hangup');
     api.dispose();
     api = null

     $("#btnIniciar").text($("#btnIniciar").text().replace("Finalizar", "Iniciar"));
     return;
   }

  let doctorName = $("#nombreDoctor").val();

  if (doctorName === '') doctorName = "WebExpression";

  var options = {
      roomName: `sala-dr-${s.slugify(doctorName)}`,
      width: 700,
      height: 700,
      parentNode: document.querySelector('#meet'),
      interfaceConfigOverwrite: {filmStripOnly: false},
      onload: function(ev)
      {

      }
  }

  var domain = 'meet.jit.si';
  api = new JitsiMeetExternalAPI(domain, options);

  api.executeCommand('displayName', doctorName);
  $("#btnIniciar").text($("#btnIniciar").text().replace("Iniciar", "Finalizar"))
};
