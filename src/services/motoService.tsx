// Define a interface Moto que descreve a estrutura de dados de uma moto
export interface Moto {
  codigo: string;
  modelo: string;
  cor: string;
  valor: string;
  status: string;
}

// Array para armazenar a lista de motos
let motos: Moto[] = [];

// Função para obter todas as motos
export const getMotos = (): Moto[] => {
  return motos; // Retorna o array de motos
};

// Função para obter uma moto pelo código
export const getMotoByCodigo = (codigo: string): Moto | undefined => {
  return motos.find((moto) => moto.codigo === codigo); // Retorna a moto com o código correspondente ou undefined se não encontrada
};

// Função para adicionar uma nova moto
export const addMoto = (moto: Moto): void => {
  motos.push(moto); // Adiciona a moto ao array de motos
};

// Função para atualizar os dados de uma moto existente
export const updateMoto = (updatedMoto: Moto): void => {
  motos = motos.map((moto) => (moto.codigo === updatedMoto.codigo ? updatedMoto : moto)); // Atualiza a moto com o código correspondente no array de motos
};

// Função para deletar uma moto pelo código
export const deleteMoto = (codigo: string): void => {
  motos = motos.filter((moto) => moto.codigo !== codigo); // Remove a moto com o código correspondente do array de motos
};
