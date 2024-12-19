export const revalidate = false;

export default function Page5() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Página 5 - Static buildtime</h1>
      <p className="text-lg text-gray-700 text-center">
        Esta página foi gerada uma única vez durante o build e não será atualizada automaticamente até a próxima compilação.
      </p>
    </div>
  );
}
