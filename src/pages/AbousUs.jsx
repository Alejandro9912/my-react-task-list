export const AbousUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        ¡Bienvenido a ToDo App, tu aplicación de gestión de tareas favorita!
        Nuestra aplicación está diseñada para ayudarte a organizar tus tareas
        diarias de manera eficiente y mantener un seguimiento de tus
        responsabilidades.
      </p>
      <h2>Funcionalidades Clave:</h2>
      <ul>
        <li>
          <strong>Lista de Tareas:</strong> Utiliza la página de "Tasks" para
          ver, agregar, editar y eliminar tareas. La lista de tareas se
          actualiza dinámicamente en tiempo real.
        </li>
        <li>
          <strong>Lazy Loading:</strong> Hemos implementado la carga diferida
          (Lazy Loading) para optimizar el rendimiento de la aplicación. Los
          componentes se cargan solo cuando son necesarios.
        </li>
        <li>
          <strong>Edición en Tiempo Real:</strong> Edita tus tareas sobre la
          marcha. Haz clic en el icono de lápiz para editar el nombre y la
          descripción de tus tareas.
        </li>
        <li>
          <strong>Estado de Completitud:</strong> Marca tus tareas como
          completadas o pendientes con un simple clic en el icono
          correspondiente.
        </li>
        <li>
          <strong>Navegación:</strong> Utiliza el menú de navegación para
          moverte entre las páginas de "Home", "Tasks" y "About Us".
        </li>
      </ul>
      <h2>Tecnologías Utilizadas:</h2>
      <ul>
        <li>React.js</li>
        <li>React Router</li>
        <li>React Hook Form</li>
        <li>LocalStorage para almacenamiento local</li>
        {/* Agrega otras tecnologías utilizadas en tu aplicación */}
      </ul>
      <p>
        Gracias por elegir ToDo App. Esperamos que disfrutes utilizando nuestra
        aplicación para mejorar tu productividad diaria.
      </p>
    </div>
  );
};
