# Trabajo Final Diplomatura Programación Front End

# Untref

Cotizador con React (Autenticación y Base de Datos Firebase)

https://cotizador-sgallego.netlify.app/
https://app-cotizador-untref.web.app/

La aplicación es un simulador de un cotizador de seguros. 
Según las opciones seleccionadas la aplicación calcula la cuota mensual de la poliza del seguro.
Se puede utilizar como "invitado" para tener una cotizacion que va a ser almacenada en la base de datos de Firebase.
O se puede autenticar como un de los usuarios registrados en la base de datos de Firebase. 

usr: usuario@usuario.com
password: 123321

usr: admin@admin.com
password: 123123

Si el usuario está autenticado puede acceder a la pagina del historial de cotizaciones almacenadas en Firestore.
Aunque no se recomienda eliminar datos de la BD en este caso se puede eliminar información a fines didacticos en la App.
Se puede eliminar cada cotización por separada o todo el historial.

Al realizar una cotización el mismo boton permite limpiar el formulario y dejarlo en las condiciones iniciales.

La información que se muestra en las listas deplegables de "Tipo de Propiedad" y "Ubicación de la propiedad" provienen 
de un archivo json donde además cada opción tiene un factor numérico que es utilizado para realizar la cotización.

Está contemplada una Pagina 404 para rutas inexistentes. 

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

![Ventana Autenticación](/imgReadme.md/image5.png)

# Firebase Coleccion

![Coleccion Polizas](/imgReadme.md/image1.png)

# Página Login

![Alt text](/imgReadme.md/image6.png)

# Página Cotizaciones

![Alt text](/imgReadme.md/image7.png)

# Página Historial (Protegida)

![Alt text](/imgReadme.md/image8.png)
