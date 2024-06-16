export interface Moto {
    codigo: string;
    modelo: string;
    cor: string;
    valor: string;
    status: string;
  }
  
  let motos: Moto[] = [];
  
  export const getMotos = (): Moto[] => {
    return motos;
  };
  
  export const getMotoByCodigo = (codigo: string): Moto | undefined => {
    return motos.find((moto) => moto.codigo === codigo);
  };
  
  export const addMoto = (moto: Moto): void => {
    motos.push(moto);
  };
  
  export const updateMoto = (updatedMoto: Moto): void => {
    motos = motos.map((moto) => (moto.codigo === updatedMoto.codigo ? updatedMoto : moto));
  };
  
  export const deleteMoto = (codigo: string): void => {
    motos = motos.filter((moto) => moto.codigo !== codigo);
  };
  