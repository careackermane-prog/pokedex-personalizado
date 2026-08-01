import Card from '../Cards/Card';
import CardHeader from '../Cards/CardHeader';
import CardBody from '../Cards/CardBody';
import CardFooter from '../Cards/CardFooter';
import { useNavigate } from 'react-router';

const PokemonCard = ({ data }) => {
  const redirectTo = useNavigate();

  const getStat = (statName) =>
    data?.stats?.find((item) => item?.stat?.name === statName)?.base_stat ?? '-';

  const hp = getStat('hp');
  const atk = getStat('attack');
  const def = getStat('defense');

  const types =
    data?.types?.map((item) => item?.type?.name).filter(Boolean) ?? [];

  const primaryType =
    data?.types?.find((item) => item?.slot === 1)?.type?.name ?? types[0];

  const headerTypeColor = {
    normal: 'bg-stone-500',
    fire: 'bg-orange-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-500',
    grass: 'bg-green-600',
    ice: 'bg-cyan-400',
    fighting: 'bg-red-700',
    poison: 'bg-violet-600',
    ground: 'bg-amber-600',
    flying: 'bg-sky-500',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-600',
    rock: 'bg-yellow-700',
    ghost: 'bg-indigo-700',
    dragon: 'bg-indigo-500',
    dark: 'bg-neutral-800',
    steel: 'bg-slate-500',
    fairy: 'bg-rose-400',
  };

  const headerBgClass =
    headerTypeColor[primaryType] ?? 'bg-green-600';

  const formatText = (value) =>
    value
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const imageUrl =
    data?.sprites?.other?.['official-artwork']?.front_default ||
    data?.sprites?.front_default ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;

  return (
    <Card
      cardHeader={
        <CardHeader>
          <div
            className={`flex flex-col justify-center items-center w-full ${headerBgClass} p-5`}
          >
            <img
              className="w-28 h-28 translate-y-1/3 object-contain rounded-full bg-white border-4 border-white shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6"
              src={imageUrl}
              alt={data?.name || 'pokemon'}
            />
          </div>
        </CardHeader>
      }
      cardBody={
        <CardBody>
          <section className="mt-10 px-5 pb-3">

            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-500 text-lg">
                #{data?.id ?? '-'}
              </span>

              <div className="flex gap-2 flex-wrap justify-end">
                {types.map((typeName) => (
                  <span
                    key={typeName}
                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg ${
                      headerTypeColor[typeName] ?? 'bg-green-600'
                    }`}
                  >
                    {formatText(typeName)}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-center text-3xl font-extrabold text-slate-800 mb-6 tracking-wide">
              {formatText(data?.name)}
            </h2>

            <div className="grid grid-cols-3 gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl shadow-md p-4">

              <div className="text-center">
                <p className="text-red-600 font-bold text-lg">HP</p>
                <p className="text-xl font-semibold">{hp}</p>
              </div>

              <div className="text-center">
                <p className="text-orange-600 font-bold text-lg">ATK</p>
                <p className="text-xl font-semibold">{atk}</p>
              </div>

              <div className="text-center">
                <p className="text-blue-600 font-bold text-lg">DEF</p>
                <p className="text-xl font-semibold">{def}</p>
              </div>

            </div>

          </section>
        </CardBody>
      }
      cardFooter={
        <CardFooter>
          <section className="flex pb-4">
            <button
              className="flex-1 mx-4 mt-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => redirectTo(`/pokemon/${data?.id}`)}
            >
              Ver Detalles
            </button>
          </section>
        </CardFooter>
      }
    />
  );
};

export default PokemonCard;