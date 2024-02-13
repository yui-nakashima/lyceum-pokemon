import { ProxyAgent } from "proxy-agent"; // Proxy設定用

const agent = new ProxyAgent(); // Proxy設定用

/** ポケモンの取得 */
export const findPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    agent, // Proxy設定
  });
  const pokemon = await response.json();
  return pokemon;
};

// 元のコード（Proxy設定なし）
// export const findPokemon = async (name) => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   const pokemon = await response.json();
//   return pokemon;
// };


