# Trabajo Final Diplomatura Programación Front End

# Untref

Cotizador con React

La aplicación consta de un cotizador de seguros. Según las opciones seleccionaleas va a calcular la cuota mensual de la poliza del seguro.
Se puede utilizar como "invitado" para tener una cotizacion que va a ser almacenada en la base de datos de Firebase.
O se puede utilizar pasando la autencicacion de usuario de la base de datos de Firebase:

usr: usuario@usuario.com
password: 123321

Si el usuario está autenticado puede acceder a otra pagina donde puede visualizar el historial de cotizacion almacenados en la base de datos de Firebase.
Aunque no se recomienda eliminar datos de la BD en este caso se puede eliminar información a fines didacticos en la App.

Pagina 404

# Herramientas / Librerias / Otros:

- Vite
- React Rourter Dom
- Tailwind Css
- SweetAlert
- Firebase (Autenticacion / BD)

# Hooks:

- useState
- useEffect
- useUserContext (custom)
- useNavigate

# Vista como Invitado

![Imagen Inicio Invitado](/imgReadme.md/image-2.png)

# Vista como Usuario Registrado (Inicio)

![Imagen Inicio Usuario](/imgReadme.md/image-3.png)

# Vista como Usuario Registrado (Historial)

![imagen Historial Usuario](/imgReadme.md/image-4.png)

# Firebase Autenticación

![Ventana Autenticación](/imgReadme.md/image.png)
