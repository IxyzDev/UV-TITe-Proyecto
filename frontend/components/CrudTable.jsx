const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="bg-white p-4 shadow-lg mb-8 w-5/6 mx-auto mt-10 overflow-auto">
      {/* <h3>Tabla de Datos</h3> */}
      <table className="min-w-full divide-y p-8 divide-gray-200 text-center">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Dato
            </th>
            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              //<CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />

              <tr>
                <td className="px-6 py-4 whitespace-no-wrap">{el.label}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={() => setDataToEdit(el)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={() => deleteData(el.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="px-6 py-8 pt-10 text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                Sin datos para mostrar
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
