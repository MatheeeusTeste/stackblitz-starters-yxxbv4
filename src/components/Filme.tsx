import React from 'react';

export interface FilmeInterface {
  original_title: string;
  release_date: string;
  poster_path: string;
  id: number; // Adicionei a propriedade 'id' para evitar o aviso de falta de uma 'key' única no mapeamento.
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({ filme }: FilmeProps) {
  return (
    <>
      <img src={"https://image.tmdb.org/t/p/w154/" + filme.poster_path} alt={filme.original_title} />
      <div>{filme.original_title}</div>
    </>
  );
}
