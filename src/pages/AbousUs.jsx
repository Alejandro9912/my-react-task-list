/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";

export const AbousUs = () => {
  return (
    <Flex
      alignItems="inherit"
      justifyContent="space-evenly"
      flexDirection="column"
      h="90%"
      w="60%"
    >
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <Text mb={4} textAlign={"center"}>
        ¡Bienvenido a ToDo App, tu aplicación de gestión de tareas favorita!
        Nuestra aplicación está diseñada para ayudarte a organizar tus tareas
        diarias de manera eficiente y mantener un seguimiento de tus
        responsabilidades.
      </Text>
      <Heading as="h2" size="lg" mb={2}>
        Funcionalidades Clave:
      </Heading>
      <UnorderedList mb={4} styleType="none" textAlign={"justify"}>
        <ListItem>
          <strong>Lista de Tareas:</strong> Utiliza la página de "Tasks" para
          ver, agregar, editar y eliminar tareas. La lista de tareas se
          actualiza dinámicamente en tiempo real.
        </ListItem>
        <ListItem>
          <strong>Lazy Loading:</strong> Hemos implementado la carga diferida
          (Lazy Loading) para optimizar el rendimiento de la aplicación. Los
          componentes se cargan solo cuando son necesarios.
        </ListItem>
        <ListItem>
          <strong>Edición en Tiempo Real:</strong> Edita tus tareas sobre la
          marcha. Haz clic en el icono de lápiz para editar el nombre y la
          descripción de tus tareas.
        </ListItem>
        <ListItem>
          <strong>Estado de Completitud:</strong> Marca tus tareas como
          completadas o pendientes con un simple clic en el icono
          correspondiente.
        </ListItem>
        <ListItem>
          <strong>Navegación:</strong> Utiliza el menú de navegación para
          moverte entre las páginas de "Home", "Tasks" y "About Us".
        </ListItem>
      </UnorderedList>
      <Heading as="h2" size="lg" mb={2}>
        Tecnologías Utilizadas:
      </Heading>
      <UnorderedList mb={4} styleType="none" textAlign={"center"}>
        <ListItem>
          <Flex justifyContent={"center"}>
            <Link href="https://es.react.dev" justifyItems={"center"}>
              <FaReact size={50} />
            </Link>
          </Flex>
        </ListItem>
        <ListItem>React Router</ListItem>
        <ListItem>React Hook Form</ListItem>
        <ListItem>LocalStorage para almacenamiento local</ListItem>
        {/* Agrega otras tecnologías utilizadas en tu aplicación */}
      </UnorderedList>
      <Text textAlign={"center"}>
        Gracias por elegir ToDo App. Esperamos que disfrutes utilizando nuestra
        aplicación para mejorar tu productividad diaria.
      </Text>
    </Flex>
  );
};
