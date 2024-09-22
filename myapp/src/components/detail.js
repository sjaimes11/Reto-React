import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

function Detail(mascota) {
  const params = useParams();
  const [mascotaDetail, setMascotaDetail] = useState([]);
  
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascotaDetail(data.filter((m) => m.id === parseInt(params.mascotaId))[0]);
      });
  });

  return (
      <div>
        <h1>{mascotaDetail.nombre}</h1>
        <img height="500rem" src={mascotaDetail.foto} alt={mascotaDetail.descripcion}></img>
        <h4>{mascotaDetail.raza}</h4>
      </div>
  );
}

export default Detail;