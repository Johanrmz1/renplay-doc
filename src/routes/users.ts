import express, { Request, Response } from "express";
import { UserType } from "../types/user.type";

const router = express.Router();

router.get("/users", (req: Request, res: Response) => {
  const data: UserType[] = [
    {
      name: "REN",
      avatar: "http://",
    },
    {
      name: "REN",
      avatar: "http://",
    },
  ];

  res.send({ data });
});

//USUARIOS

/**
 * Put track
 * @openapi
 * /usr/login:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Login del usuario"
 *      description: "Este endpoint es para que el usuario pueda iniciar sesión.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Usuario no encontrado.<br>
 *        1: Usuario Suscrito con servicio vencido.<br>
 *        2: Usuario Suscrito.<br>
 *        3: Contraseña incorrecta.<br>
 *        4: Usuario con pago vencido.<br>
 *        5: Usuario en modo gratuito.<br>
 *        6: Este usuario excede el límite de dispositivos permitidos.<br>
 *        7: El correo no ha sido verificado por el usuario.<br>
 *        8: Error desconocido."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/usrLoginBody"
 *      responses:
 *        '200':
 *          description: El usuario ingresó con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/info:
 *    put:
 *      tags:
 *        - Usuarios
 *      summary: "Información del usuario"
 *      description: "Este endpoint busca y muestra toda la información del usuario.<br><br>
 *        ResponseCode:<br>
 *        No regresa un ResponseCode."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userInfoBody"
 *      responses:
 *        '200':
 *          description: Información del usuario mostrada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/create:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Crear usuario"
 *      description: "Este endpoint hace el registro para crear un nuevo usuario.<br><br>
 *        ResponseCode: <br><br>
 *        2: Usuario registrado con éxito."       
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userCreateBody"
 *      responses:
 *        '200':
 *          description: Usuario creado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * @openapi
 * /usr/validate/email:
 *    get: 
 *     summary: Validar correo electrónico
 *     description: "Este endpoint valida el correo electrónico ingresado por el usuario, se manda como parámetro el email.<br><br>
 *      ResponseCode: <br><br>
 *        0: Correo enviado con éxito.<br>
 *        1: Error: El correo electrónico no está registrado.<br>
 *        2: Error: este correo electrónico ya se encuentra validado.<br>
 *        3: (error de la excepcion que lo ocasione a string).<br>
 *        4: Error: existe una validación de correo previa de menos de 1 minuto.<br>
 *        5: Error escribiendo el código de validación en la base de datos."
 *     tags:
 *       [Usuarios]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *           description: Email del usuario
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Email validado correctamente.
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/userValidateEmail"
 */
router.get("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/verify/email:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Verificar email"
 *      description: "Este endpoint verifica el correo electrónico ingresado por el usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Código verificado con éxito.<br>
 *        1: Error: correo electrónico para validar no encontrado.<br>
 *        2: Error: este correo electrónico ya se encuentra verificado.<br>
 *        3: Error: ocurrió un problema desconocido.<br>
 *        4: Error: el código que intentamos verificar ya expiró.<br>
 *        5: Error: se tuvo un error al actualizar la base de datos, intente de nuevo.<br>
 *        6: Error: código de verificación no encontrado."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userVerifyEmailBody"
 *      responses:
 *        '200':
 *          description: Email verificado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/validate/phone:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Validar teléfono"
 *      description: "Este endpoint valida el teléfono ingresado por el usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Mensaje de validación envíado con éxito.<br>
 *        1: Error: El número telefónico no está registrado.<br>
 *        2: Error: este número telefónico ya se encuentra validado..<br>
 *        3: Error del API de SMS: 23, There are no recipients.<br>
 *        5: Error escribiendo el código de validación en la base de datos."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userValidatePhoneBody"
 *      responses:
 *        '200':
 *          description: Teléfono validado correctamente.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/verify/phone:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Verificar teléfono"
 *      description: "Este endpoint verifica el teléfono ingresado por el usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        1: Número telefónico para validar no encontrado.<br>
 *        2 :Este número telefónico ya se encuentra verificado.<br>
 *        6: Error: código de verificación no encontrado."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userVerifyPhoneBody"
 *      responses:
 *        '200':
 *          description: Teléfono verificado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/delete:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Eliminar"
 *      description: Este endpoint elimina un usuario
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userDeleteBody"
 *      responses:
 *        '200':
 *          description: Usuario eliminado.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/update/name:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Actualizar nombre"
 *      description: "Este endpoint permite al usuario actualizar su nombre.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El valor fue actualizado con éxito.<br>
 *        1: Suscriber ID no encontrado en DB.<br>
 *        3: Error actualizando DB."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userUpdateNameBody"
 *      responses:
 *        '200':
 *          description: Nombre actualizado correctamente.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/update/masterpin:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Actualizar masterpin"
 *      description: "Este endpoint le permite al usuario actualizar su masterpin.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El valor fue actualizado con éxito.<br>
 *        1: Suscriber ID no encontrado en DB.<br>
 *        2: Existe un usuario con el mismo valor en la DB.<br>
 *        3: Erro actualizando DB><br>
 *        4: Existe un intento de actualización previa de menos de 1 minuto.<br>"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userUpdateMasterpinBody"
 *      responses:
 *        '200':
 *          description: Masterpin actualizado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/update/pass:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Actualizar contraseña"
 *      description: "Este endpoint le permite al usuario actualizar su contraseña.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El valor fue actualizado con éxito.<br>
 *        1: Suscriber ID no encontrado en DB.<br>
 *        2: Existe un usuario con el mismo valor en la DB.<br>
 *        3: Erro actualizando DB><br>
 *        4: Existe un intento de actualización previa de menos de 1 minuto."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userUpdatePasswordBody"
 *      responses:
 *        '200':
 *          description: Contraseña actualizada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/update/email:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Actualizar email"
 *      description: "Este endpoint le permite al usuario actualizar su correo electrónico.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El valor fue actualizado con éxito.<br>
 *        1: Suscriber ID no encontrado en DB.<br>
 *        2: Existe un usuario con el mismo valor en la DB.<br>
 *        3: Erro actualizando DB>" 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userUpdateEmailBody"
 *      responses:
 *        '200':
 *          description: Email actualizado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/reset/pass:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Restaurar contraseña"
 *      description: "Este endpoint le permite al usuario restaurar su contraseña en caso de olvidarla.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Correo envíado con éxito.<br>
 *        1: Usuario no encontrado.<br>
 *        4: Existe un intento de recuperación de contraseña previa de menos de 1 minuto.<br>
 *        5: Error escribiendo el código de validación en la base de datos." 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userResetPasswordBody"
 *      responses:
 *        '200':
 *          description: Contraseña restaurada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/update/phone:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Actualizar teléfono"
 *      description: "Este endpoint le permite al usuario actualizar su número de teléfono.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El valor fue actualizado con éxito.<br>
 *        1: Suscriber ID no encontrado en DB.<br>
 *        2: Existe un usuario con el mismo valor en la DB.<br>
 *        3: Erro actualizando DB><br>
 *        4: Existe un intento de actualización previa de menos de 1 minuto.<br>"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userUpdatePhoneBody"
 *      responses:
 *        '200':
 *          description: Teléfono actualizado correctamente.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/update/user:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Actualizar usuario"
 *      description: "Este endpoint le permite al cliente actualizar su perfil de usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El valor fue actualizado con éxito.<br>
 *        1: Suscriber ID no encontrado en DB.<br>
 *        3: Error actualizando DB."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userUpdateUserBody"
 *      responses:
 *        '200':
 *          description: Usuario actualizado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/validation:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Validar"
 *      description: "Este endpoint permite al usuario validar su información.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        1: Usuario para validar no encontrado.<br>
 *        6: Código de verificación no encontrado."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userValidationBody"
 *      responses:
 *        '200':
 *          description: Usuario validado correctamente.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/profiles:
 *    put:
 *      tags:
 *        - Usuarios
 *      summary: "Lista de Perfiles"
 *      description: "Este endpoint le permite al usuario ver la lista de perfiles que hay en la cuenta.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Se tiene: 5 perfil(es) para este usuario.<br>
 *        1: Usuario sin perfiles registrados."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userProfileListBody"
 *      responses:
 *        '200':
 *          description: Perfiles mostrados correctamente.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/profile:
 *    post:
 *      tags:
 *        - Usuarios
 *      summary: "Agrega un perfil al Usuario"
 *      description: "Este endpoint le permite al usuario agregar un nuevo perfil.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Valor agregado con éxito.<br>
 *        3: Error: {ex.Message}.<br>
 *        3: Error: Cannot insert the value NULL into column 'UserID', table 'leon_users.dbo.UsrProfiles'; column does not allow nulls. INSERT fails.\r\nThe statement has been terminated.<br>
 *        4: Error escribiendo en la DB.<br>"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userProfileAddBody"
 *      responses:
 *        '200':
 *          description: Usuario agregado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/profile:
 *    delete:
 *      tags:
 *        - Usuarios
 *      summary: "Eliminar"
 *      description: "Elimina un perfil del usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Valor eliminado con éxito.<br>
 *        3: Error: {ex.Message}.<br>
 *        4: Error escribiendo en la DB.<br>
 *        4: No existe coincidencia de los valores proporcionados en la DB."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userProfileDeleteBody"
 *      responses:
 *        '200':
 *          description: Perfil eliminado.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/profiles/imgs:
 *    put:
 *      tags:
 *        - Usuarios
 *      summary: "Imagenes para perfiles"
 *      description: "Este endpoint le muestra al usuario imágenes que puede utilizar para identificar su perfil.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Se tienen: 3 imagen(es) en la biblioteca.<br>
 *        1: Error: Sin imagenes en biblioteca."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userProfilesImgBody"
 *      responses:
 *        '200':
 *          description: Imágenes.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/devices:
 *    put:
 *      tags:
 *        - Usuarios
 *      summary: "Lista de dispositivos"
 *      description: "Este endpoint muestra la lista de dispositivos ligados al usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Se encontraron 141 dispositivos ligados a este user.<br>
 *        1: No se encontraron dispositivos con la información proporcionada.<br>
 *        4: Error obteniendo los datos desde la DB> {e.Message}."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userDevicesListBody"
 *      responses:
 *        '200':
 *          description: Dispositivos ligados al usuario.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Put track
 * @openapi
 * /usr/device:
 *    delete:
 *      tags:
 *        - Usuarios
 *      summary: "Eliminar dispositivo"
 *      description: "Este endpoint elimina un dispositivo ligado al usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Valor eliminado con éxito.<br>
 *        3: Error: {ex.Message}.<br>
 *        4: No existe coincidencia de los valores proporcionados en la DB."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userDeviceDeleteBody"
 *      responses:
 *        '200':
 *          description: Dispositivo eliminado.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

//HOME

/**
 * Get music home sections
 * @openapi
 * /music/section/home:
 *    put:
 *      tags:
 *        - Home
 *      summary: "Inicio"
 *      description: "Este endpoint lleva al usuario al inicio de la aplicación web.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Suscripción vencida.<br>
 *        1: Suscripción vigente.<br>
 *        1: Suscripción en modo de prueba gratuito.<br>
 *        2: Suscripción en período de gracia.<br>
 *        3: Usuario en modo gratuito."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicHomeBody"
 *      responses:
 *        '200':
 *          description: Inicio.
 *      security:
 *       - bearerAuth: []
 */
router.get("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/spotlight/home:
 *    put:
 *      tags:
 *        - Home
 *      summary: "Spotlight"
 *      description: "Este endpoint muestra los anuncios que la aplicación tiene para el usuario, como lo más nuevo o tendencias.<br><br>
 *        ResponseCode:<br>
 *        No regresa un ResponseCode."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicSpotlightHomeBody"
 *      responses:
 *        '200':
 *          description: Spotlight.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

//AUDIOBOOKS

/**
 * @openapi
 * /music/audiobook/{id}:
 *    get: 
 *     summary: Audiolibro
 *     description: "Este endpoint muestra el audiolibro que se le indique por medio del id que se introduce.<br><br>
 *      No regresa un ResponseCode."
 *     tags:
 *       [AudioBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: Audiolibro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/audiobook"
 */
router.get("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

//MUSIC

/**
 * @openapi
 * /music/album/{id}:
 *    get:
 *     summary: Album
 *     description: "Este endpoint muestra el albúm llamado por medio del id.<br><br>
 *      No regresa un ResponseCode."
 *     tags:
 *       - Music
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: Album 
 *     responses:
 *       200:
 *         description: Álbum
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/musicAlbumID"
 */
router.get("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * @openapi
 * /music/artist/{id}:
 *    get:
 *     summary: Artista
 *     description: "Este endpoint muestra todo sobre el artista llamado por medio del id.<br><br>
 *      No regresa un ResponseCode."
 *     tags:
 *       - Music
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: Artista
 *     responses:
 *       200:
 *         description: Artista
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/musicArtistID"
 */
router.get("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/playlist/{id}:
 *    put:
 *      tags:
 *        - Music
 *      summary: "Playlist"
 *      description: "Este endpoint muestra la playlist llamada por medio del id.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Consulta exitosa.<br>
 *        1: Error <1>: La MusicCollection (número de id) no existe en la DB."
 *      parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         description: Playlist
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicPlaylistIdBody"
 *      responses:
 *        '200':
 *          description: Consulta exitosa.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/pl:
 *    post:
 *      tags:
 *        - Music
 *      summary: "Crear playlist"
 *      description: "Este endpoint es para crear una nueva playlist.<br><br>
 *        ResponseCode:<br>
 *        0: Lista creada con éxito.<br>
 *        1: Error creando PlayList, error en datos enviados o usuario con suscripcion no vigente."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicPlBodyCrear"
 *      responses:
 *        '200':
 *          description: Playlist creada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/pl:
 *    put:
 *      tags:
 *        - Music
 *      summary: "Editar playlist"
 *      description: "Este endpoint es para editar una playlist.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        1: Error actualizando PlayList, error en datos enviados o usuario no vigente.<br>
 *        4: Error actualizando PlayList en DB, no se cumplen los parametros ProfileID:1 con PlayListID:2144"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicPlBodyEditar"
 *      responses:
 *        '200':
 *          description: Playlist editada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/pl:
 *    delete:
 *      tags:
 *        - Music
 *      summary: "Eliminar playlist"
 *      description: "Este endpoint es para eliminar una playlist.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Valor eliminado con éxito.<br>
 *        1: Error eliminando PlayList, DeviceID no encontrado.<br>
 *        4: Error actualizando PlayList en DB, no se cumplen los parametros> playlistID: 2140, profileID: 1.<br>"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicPlBodyEliminar"
 *      responses:
 *        '200':
 *          description: Playlist eliminada.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/pl/track:
 *    post:
 *      tags:
 *        - Music
 *      summary: "Agrega un track a una playlist"
 *      description: "Este endpoint es para agregar una canción a una playlist.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        4: Error: PlayList no válida para el usuario proporcionado.<br>
 *        1: Información proporcionada no válida."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicPlTrackBodyAgregar"
 *      responses:
 *        '200':
 *          description: Track añadido a la playlist con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/pl/track:
 *    delete:
 *      tags:
 *        - Music
 *      summary: "Eliminar track de playlist"
 *      description: "Este endpoint es para eliminar un track de una playList.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Valor eliminado con éxito.<br>
 *        1: Error eliminando Track, DeviceID no encontrado.<br>
 *        1: Error: Información proporcionada no válida. Este PlayList no corresponde al usuario.<br>"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicPlTrackBodyEliminar"
 *      responses:
 *        '200':
 *          description: Track eliminado de la playlist con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/myplaylist:
 *    put:
 *      tags:
 *        - Music
 *      summary: "Obtener playlist"
 *      description: "Este endpoint obtiene los playlist del usuario por profile ID.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Suscripción vigente.<br>
 *        1: Sesión no válida, favor de iniciar nueva sesión."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicMyplaylistBody"
 *      responses:
 *        '200':
 *          description: Playlist encontrada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/tracklink:
 *    put:
 *      tags:
 *        - Music
 *      summary: "Obtener tracklink"
 *      description: "Este enpoint obtiene el link de reproducción del track, mismo que contiene un código de protección.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        1: Suscripción vigente.<br>
 *        4: Sesión no válida, favor de iniciar nueva sesión."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicTracklinkBody"
 *      responses:
 *        '200':
 *          description: Track obtenido con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /music/feedback:
 *    put:
 *      tags:
 *        - Music
 *      summary: "Feedback"
 *      description: "Este enpoint nos sirve para otorgar el Feedback de un elemento.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Valor actualizado con éxito.<br>
 *        1: Error <1>: Usuario no encontrado, favor de revisar el SuscriberID."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/musicFeedbackBody"
 *      responses:
 *        '200':
 *          description: Feedback obtenido con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

//SUBSCRIBER

/**
 * Get track
 * @openapi
 * /subscription/status:
 *    put:
 *      tags:
 *        - Subscription
 *      summary: "Status de suscripción"
 *      description: "Este endpoint muestra el status de la subscripción del usuario.<br><br>
 *        ResponseCode:<br>
 *        1: Suscripción vigente.<br>
 *        3: Membresía gratuita."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/subscriptionStatusBody"
 *      responses:
 *        '200':
 *          description: Status obtenido con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /subscription/packs:
 *    put:
 *      tags:
 *        - Subscription
 *      summary: "Planes de suscripción"
 *      description: "Este endpoint muestra los paquetes disponibles para la subscripción del usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        No regresa un ResponseCode."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/packageBody"
 *      responses:
 *        '200':
 *          description: Planes de suscripción obtenidos con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /subscription/demo:
 *    put:
 *      tags:
 *        - Subscription
 *      summary: "Prueba gratis"
 *      description: "Este endpoint le permite al usuario tener un paquete de suscrpción gratis por 7 días (Prueba gratuita).<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: Suscripción agregada con éxito.<br>
 *        1: Error: No existe el paquete solicitado para agregar al usuario.<br>
 *        1: Error: Usuario no encontrado, favor de revisar el SuscriberID.<br>
 *        4: Error: No se puede volver a dar un período de prueba a este usario.<br>
 *        4: Error: Este usuario cuenta con una suscripción válida: Suscripción vigente> Suscripción Estándar para México.<br>
 *        4: Error actualizando base de datos."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getDemoBody"
 *      responses:
 *        '200':
 *          description: Prueba gratuita obtenida.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /subscription/valcup:
 *    put:
 *      tags:
 *        - Subscription
 *      summary: "Validar Cupón"
 *      description: "Este endpoint valida un cupón de descuento ingresado por el usuario.<br><br>
 *        ResponseCode / Msg: <br><br>
 *        0: El cupón PromoTest2023OK es válido para el paquete seleccionado.<br>
 *        4: Error <1>: Cupón no encontrado.<br>
 *        4: Error: Cupón expirado, expiró en 1/1/2021 12:00:00 AM.<br>
 *        4: Error <5>: Cupón no válido para el paquete de suscripción seleccionado."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/validarCuponBody"
 *      responses:
 *        '200':
 *          description: Cupón validado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /subscription/subscribe:
 *    put:
 *      tags:
 *        - Subscription
 *      summary: "Añadir suscripción de un usuario"
 *      description: "Este endpoint define la suscripción del paquete que el usuario haya elegido.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Suscripción agregada con éxito.<br>
 *        1: Error <1>: Usuario no encontrado, favor de revisar el SuscriberID.<br>
 *        4: Error <2>: favor de validar los montos, precio con descuento no coincide.<br>
 *        4: Error <3>: Cupón no encontrado.<br>
 *        4: Error <4>: Cupón expirado.<br>
 *        4: Error <5>: Cupón no válido en tu país.<br>
 *        4: Error <6>: no se pudo validar el cupón, contacte a soporte técnico.<br>
 *        4: Error <7>: cupón no válido para el paquete de suscripción.<br>
 *        4: Error <8>: favor de validar el monto a cobrar no coincide con el del paquete.<br>
 *        4: Error <9>: No existe el paquete solicitado para agregar al usuario.<br>
 *        4: Error<10>: Este usuario cuenta con una suscripción válida: Suscripción vigente> Suscripción Estándar para México."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/addSuscripcionBody"
 *      responses:
 *        '200':
 *          description: Suscripción añadida con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

//CREATORS 

/**
 * Get track
 * @openapi
 * /creators/list/artist:
 *    put:
 *      tags:
 *        - Creators
 *      summary: "Lista de artistas"
 *      description: "Este endpoint muestra todos los artistas.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Se encontraron {dt.Rows.Count} registros en la DB.<br>
 *        1: Error en CreatorID no coincide.<br>
 *        1: No existen registros en la DB.<br>
 *        3: Error {e.Message}."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/listaDeArtistasBody"
 *      responses:
 *        '200':
 *          description: Artistas encontrados con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/artist:
 *    put:
 *      tags:
 *        - Creators
 *      summary: "Editar"
 *      description: "Este endpoint es para editar la información del artista.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Artista editado con éxito.<br>
 *        1: No existen registros en la DB.<br>
 *        1: Error editando Artista, CreatorID no coincide.<br>
 *        2: Error <2>: El título del artista ya existe en la DB.<br>
 *        3: Error {e.Message}.<br>
 *        4: Error <1>: No se pudo editar el Artista en la DB.<br>
 *        4: Error <3>: Error en la portada del artista.<br>
 *        4: Error <4>: Error en el título del artista.<br>
 *        4: Error <5>: Error en la descripción del artista."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/artistEditBody"
 *      responses:
 *        '200':
 *          description: Información del artista editada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/artist:
 *    post:
 *      tags:
 *        - Creators
 *      summary: "Crear"
 *      description: "Este endpoint es para crear un artista.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Artista creado con éxito.<br>
 *        1: Error creando Artista, CreatorID no coincide.<br>
 *        2: Error <2>: El título del artista ya existe en la DB.<br>
 *        3: Error {e.Message}.<br>
 *        4: Error <1>: No se pudo guardar en la DB.<br>
 *        4: Error <3>: Error en la portada del artista.<br>
 *        4: Error <4>: Error en el título del artista.<br>
 *        4: Error <5>: Error en la descripción del artista."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/artistCreateBody"
 *      responses:
 *        '200':
 *          description: Artista creado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/album:
 *    post:
 *      tags:
 *        - Creators
 *      summary: "Crear album"
 *      description: "Este endpoint es para crear un nuevo álbum.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Item creado con éxito.<br>
 *        1: Error creando Item, CreatorID no coincide.<br>
 *        2: Error <2>: El título ya existe en la DB.<br>
 *        3: Error {e.Message}.<br>
 *        4: Error <1>: No se pudo guardar en la DB.<br>
 *        4: Error <3>: Error en la portada.<br>
 *        4: Error <4>: Error en el título.<br>
 *        4: Error <5>: Error en la descripción.<br>
 *        4: Error <6>: Error en la longitud.<br>
 *        4: Error <7>: Error en la fecha de lanzamiento.<br>
 *        4: Error <8>: Error en el campo TotalItems.<br>
 *        4: Error <9>: No se pudo guardar en la DB, creando la relacion Album/Artista."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/albumCreateBody"
 *      responses:
 *        '200':
 *          description: Albúm creado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/album:
 *    put:
 *      tags:
 *        - Creators
 *      summary: "Editar album"
 *      description: "Este endpoint es para editar un álbum.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Item creado con éxito.<br>
 *        1: Error creando Item, CreatorID no coincide.<br>
 *        2: Error <2>: El título ya existe en la DB.<br>
 *        3: Error creando Item, One or more errors occurred. (Object reference not set to an instance of an object.)"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/albumEditBody"
 *      responses:
 *        '200':
 *          description: Albúm editado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/list/album:
 *    put:
 *      tags:
 *        - Creators
 *      summary: "Lista de album"
 *      description: "Este endpoint muestra la lista de los álbums existentes.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: Se encontraron 11 registros en la DB.<br>
 *        1: Error en CreatorID no coincide.<br>
 *        2: Error <2>: El título ya existe en la DB.<br>
 *        3: Error creando Item, One or more errors occurred. (Object reference not set to an instance of an object.)"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/albumListBody"
 *      responses:
 *        '200':
 *          description: Listas de albúm encontradas con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/artist:
 *    delete:
 *      tags:
 *        - Creators
 *      summary: "Eliminar"
 *      description: "Este endpoint elimina una lista de album por medio del ArtistID.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: null.<br>
 *        0: ItemID: eliminado con éxito.<br>
 *        4: Error <2> registro no encontrado para el itemID: (#)"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/artistDeleteBody"
 *      responses:
 *        '200':
 *          description: Lista eliminada con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/album:
 *    delete:
 *      tags:
 *        - Creators
 *      summary: "Eliminar album"
 *      description: "Este endpoint elimina un album de la lista de album por medio del AlbumID.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: null.<br>
 *        0: ItemID:(#)eliminado con éxito.<br>
 *        4: Error <2> registro no encontrado para el itemID: (#)"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/albumDeleteBody"
 *      responses:
 *        '200':
 *          description: Albúm eliminado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/track:
 *    post:
 *      tags:
 *        - Creators
 *      summary: "Crear track"
 *      description: "Este endpoint crea un track.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: null.<br>
 *        0: ItemID:(#)eliminado con éxito.<br>
 *        2: Error <2>: El trackNumber para ese AlbumID ya existe en la DB.<br>
 *        4: Error <2> registro no encontrado para el itemID: (#)"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/trackCreateBody"
 *      responses:
 *        '200':
 *          description: Track creado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.post("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/track:
 *    put:
 *      tags:
 *        - Creators
 *      summary: "Editar track"
 *      description: "Este endpoint permite editar un track.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: null.<br>
 *        0: ItemID:(#)editado con éxito.<br>
 *        1: Error editando Item, CreatorID no coincide.<br>
 *        2: Error <2>: El trackNumber para ese AlbumID ya existe en la DB.<br>
 *        3: Error de ex editando Item, One or more errors occurred. (One or more errors occurred. (Object reference not set to an instance of an object.))<br>
 *        4: Error <2> registro no encontrado para el itemID: (#)"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/trackEditBody"
 *      responses:
 *        '200':
 *          description: Track editado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.put("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

/**
 * Get track
 * @openapi
 * /creators/track:
 *    delete:
 *      tags:
 *        - Creators
 *      summary: "Eliminar track"
 *      description: "Este endpoint permite eliminar un track.<br><br>
 *        ResponseCode / Msg:<br><br>
 *        0: null.<br>
 *        0: ItemID:(#)editado con éxito.<br>
 *        2: Error <2>: El trackNumber para ese AlbumID ya existe en la DB.<br>
 *        3: Error de ex editando Item, One or more errors occurred. (One or more errors occurred. (Object reference not set to an instance of an object.))<br>
 *        4: Error <2> registro no encontrado para el itemID: (#)<br>
 *        4: Error <9> eliminando itemID: 36, el OwnerID no es correcto."
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/trackDeleteBody"
 *      responses:
 *        '200':
 *          description: Track eliminado con éxito.
 *      security:
 *       - bearerAuth: []
 */
router.delete("/users", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body)
  res.send({ data: body });
});

export default router;
