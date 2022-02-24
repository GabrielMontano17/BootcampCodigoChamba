using Brive.Bootcamp.PruebaApi.Models;

namespace Brive.Bootcamp.PruebaApi.Servicios
{
    public interface IParticipantes
    {
        bool GuardarParticipante(Participantes participantes);

        Participantes[] ObtenerParticipantes();

        Participantes[] ObtenerParticipantesMayoresDeEdad();
    }
}
