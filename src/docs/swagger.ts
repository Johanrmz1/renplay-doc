import swaggerJSDoc, {OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentación del API REN>PLAY",
    version: "1.0.0",
    description: "Este espacio está diseñado para ayudarte y ser guía dentro del código que necesites, ¡Éxito en tu proyecto!"
  },
  servers: [
    {
      url: "https://api.renplay.com",
    },  
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      //Usuarios
      //Esquema
      //usr/login
      usrLogin:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
          },
          DeviceID:{
            type: "string",
          },
          ResponseMsg:{
            type: "string",
          },
          IsSuscribed:{
            type: "boolean",
          },
          ResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/login
      usrLoginBody:{
        type: "object",
        properties:{

          Email:{
            type: "email",
            example: "sarycazares@live.com.mx"
          },
          Password:{
            type: "password",
            example:"JDJhJDEwJFpGcG54UjA0OWtKMHlQNUdVMkxjSHVrcnJ3OWRYb01xTEg0VzFFRHp5bUU0UkdaZk5Xek11"
          },
          DeviceType:{
            type: "string",
            example: "iPhone 11 Pro Max"
          },
          DevicePlatform:{
            type: "string",
            example: "iOS"
          },
          DeviceVersion:{
            type: "string",
            example: "0.1.0"
          },
          DeviceUUID:{
            type: "string",
            example: "228b0413-996f-47b0-8749-30f7d0405db2"
          }
        }
      },
      //Esquema
      //userInfo
      userInfo:{
        type: "object",
        properties:{

          UserReg:{
            type: "number"
          },
          SuscriberID:{
            type: "string"
          },
          UserName:{
            type: "string"
          },
          Name:{
            type: "string"
          },
          Email:{
            type: "email"
          },
          EmailConfirmed:{
            type: "boolean"
          },
          Phone:{
            type: "number"
          },
          PhoneConfirmed:{
            type: "boolean"
          },
          Password:{
            type: "null"
          },
          MasterPin:{
            type: "number"
          },
          TrialTaken:{
            type: "boolean"
          },
          LockoutEnabled:{
            type: "boolean"
          },
          LockoutEnd:{
            type: "null"
          }
        }
      },
      //Body
      //userInfo
      userInfoBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          }
        }
      },
      //Esquema
      //UserUpdateLocalHost // Añadir datos cuando aparezcan en testfully
      userUpdateLocalHost:{
        type: "object",
        properties:{


        }
      },
      //Esquema
      //UserCreateLocalHost // Añadir datos cuando aparezcan en testfully
      userCreateLocalHost:{
        type: "object",
        properties:{

        }
      },
      //Esquema
      //User Create // Añadir datos cuando aparezcan en testfully
      userCreate:{
        type: "object",
        properties:{

        }
      },
      //Body
      //UserCreate
      userCreateBody:{
        type: "object",
        required:["UserName","Name","Email","Phone","MasterPin","Password"],
        properties:{

          UserName:{
            type: "string",
            example: "Miles"
          },
          Name:{
            type: "string",
            example: "Bryan Nava"
          },
          Email:{
            type: "email",
            example: "milestom22@hotmail.com"
          },
          Phone:{
            type: "tel",
            example: '"528126613666"'
          },
          MasterPin:{
            type: "number",
            example: "1234"
          },
          Password:{
            type: "string",
            example: "A/OBs2V6ao/YePd9E83gCw=="
          }
        }
      },
      //Esquema
      //UserValidate Email // Añadir datos cuando aparezcan en testfully
      userValidateEmail:{
        type: "obbject",
        properties:{

        }
      },
      //Body
      //User Validate Email
      userValidateEmailBody:{
        type: "object",
        properties:{

          Email:{
            type: "email",
            example: "admin@fan12.net"
          }
        }
      },
      //Esquema
      //User Verify Email
      userVerifyEmail:{
        type: "object",
        properties:{

          ResponseMsg:{
            type: "string"
          },
          ResponseCode:{
            type: "number"
          },
          SuscriberID:{
            type: "null"
          }
        }
      },
      //Body
      //User Verify Email
      userVerifyEmailBody:{
        type: "object",
        properties:{

          Email:{
            type: "email",
            example: "mpadilla@lap55.com",
          },
          CodeVerification:{
            type: "number",
            example: '"8527"',
          }
        }
      },
      //Esquema
      //User Validate Phone
      userValidatePhone:{
        type: "object",
        properties:{

          ResponseMsg:{
            type: "string"
          },
          ResponseCode:{
            type: "number"
          },
          SuscriberID:{
            type: "null"
          }
        }
      },
      //Body
      //User Validate Phone
      userValidatePhoneBody:{
        type: "object",
        properties:{

          Phone:{
            type: "tel",
            example: '"528110030854"',
          },
          PhoneVerificationMethod:{
            type: "number",
            example: "1",
          }
        }
      },
      //Esquema
      //User Verify Phone
      userVerifyPhone:{
        type: "object",
        properties:{

          ResponseMsg:{
            type: "string"
          },
          ResponseCode:{
            type: "number"
          },
          SuscriberID:{
            type: "null"
          }
        }
      },
      //Body
      //User Verify Phone
      userVerifyPhoneBody:{
        type: "object",
        properties:{

          Phone:{
            type: "tel",
            example: '"528115557980"'
          },
          CodeVerification:{
            type: "number",
            example: '"2870"'
          }
        }
      },
      //Esquema
      //User Delete
      userDelete:{
        type: "object",
        properties:{

          UserReg:{
            type: "number"
          },
          DeleteResponseMsg:{
            type: "string"
          },
          DeleteUserResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //User Delete
      userDeleteBody:{
        type: "object",
        properties:{

          UserReg:{
            type: "number",
            example: "18162",
          },
          SuscriberID:{
            type: "string",
            example: "lYLUNRZ7dDCfaONqdkvB_KcfkdKku53Vhp8tOYwrriA",
          }
        }
      },
      //Esquema
      //usr/update/name
      userUpdateName:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/update/name
      userUpdateNameBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "lYLUNRZ7dDCfaONqdkvB_KcfkdKku53Vhp8tOYwrriA"
          },
          Name:{
            type: "string",
            example: "Sary Cazarez"
          }
        }
      },
      //Esquema
      //usr/update/masterpin
      userUpdateMasterpin:{
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/update/masterpin
      userUpdateMasterpinBody:{
        properties:{

          SuscriberID:{
            type: "string",
            example: "lYLUNRZ7dDCfaONqdkvB_KcfkdKku53Vhp8tOYwrriA"
          },
          MasterPin:{
            type: "number",
            example: "0212"
          }
        }
      },
      //Esquema
      //usr/update/password
      userUpdatePassword:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/update/password
      userUpdatePasswordBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "lYLUNRZ7dDCfaONqdkvB_KcfkdKku53Vhp8tOYwrriA"
          },
          Password:{
            type: "string",
            example: "A/OBs2V6ao/YePd9E83gCw=="
          }
        }
      },
      //Esquema
      //usr/update/email
      userUpdateEmail:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/update/email
      userUpdateEmailBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "lYLUNRZ7dDCfaONqdkvB_KcfkdKku53Vhp8tOYwrriA="
          },
          Email:{
            type: "email",
            example: "donpec@me.com"
          },
        }
      },
      //Esquema
      //User Reset Password
      userResetPassword:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          },
          SuscriberID:{
            type: "string"
          }
        }
      },
      //Body
      //User Reset Password
      userResetPasswordBody:{
        type: "object",
        properties:{

          Email:{
            type: "email",
            example: "mpadilla@lap55.com"
          },
          PhoneVerificationMethod:{
            type: "number",
            example: "0"
          },
        }
      },
      //Esquema
      //usr/update/phone
      userUpdatePhone:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/update/phone
      userUpdatePhoneBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI=",
          },
          Phone:{
            type: "number",
            example: '"528115557980"',
          },
          PhoneVerificationMethod:{
            type: "number",
            example: "0",
          }
        }
      },
      //Esquema
      //usr/update/user
      userUpdateUser:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          }
        }
      },
      //Body
      //usr/update/user
      userUpdateUserBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "lYLUNRZ7dDCfaONqdkvB_KcfkdKku53Vhp8tOYwrriA"
          },
          UserName:{
            type: "string",
            example: "SaryMyster"
          }
        }
      },
      //Esquema
      //usr/validation
      userValidation:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          },
          SuscriberID:{
            type: "null"
          }
        }
      },
      //Body
      //usr/validation
      userValidationBody:{
        type: "object",
        properties:{

          Email:{
            type: "stringemail",
            example: "mpadilla@lap55.com"
          },
          CodeVerification:{
            type: "number",
            example: '"4230"'
          },
        }
      },
      //Esquema
      //usr/profiles Lista de Perfiles
      userProfileList:{
        type: "object",
        properties:{

          ResponseMsg:{
            type: "string"
          },
          ResponseCode:{
            type: "number"
          },
          Limit:{
            type: "number"
          },
          UsrProfiles:{
            type: "object",
            properties:{

              RegID:{
                type: "number"
              },
              Name:{
                type: "string"
              },
              ImageURL:{
                type: "string"
              },
              ImageID:{
                type: "number"
              },
              NumericPin:{
                type: "number"
              },
              IsAKid:{
                type: "boolean"
              }
            }
          }
        }
      },
      //Body
      //usr/profiles Lista de Perfiles
      userProfileListBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          }
        }
      },
      //Esquema
      //usr/profile - Agrega un perfil al Usuario
      userProfileAdd:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          },
        }
      },
      //Body
      //usr/profile - Agrega un perfil al Usuario
      userProfileAddBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          },
          UserProfile:{
            type: "object",
            properties:{

              Name:{
                type: "string",
                example: "Pec"
              },
              ImageID:{
                type: "number",
                example: "1"
              },
              NumericPin:{
                type: "number",
                example: '"2002"'
              },
              IsAKid:{
                type: "boolean",
                example: false
              }
            }
          },
        }
      },
      //Esquema
      //usr/profile - DELETE
      userProfileDelete:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          },
        }
      },
      //Body
      //usr/profile - DELETE
      userProfileDeleteBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          },
          ProfileRegID:{
            type: "number",
            example: "43"
          },
        }
      },
      //Esquema
      //usr/profiles/imgs Imagenes para Perfiles
      userProfilesImg:{
        type: "object",
        properties:{

          ResponseMsg:{
            type: "string"
          },
          ResponseCode:{
            type: "number"
          },
          UsrProfiles:{
            type: "object",
            properties:{

              ImageID:{
                type: "number"
              },
              ImageURL:{
                type: "string"
              }
            }
          }
        }
      },
      //Body
      //usr/profiles/imgs Imagenes para Perfiles
      userProfilesImgBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          }
        }
      },
      //Esquema
      //usr/devices Lista de dispositivos de usuario
      userDevicesList:{
        type: "object",
        properties:{

          ResponseMsg:{
            type: "string"
          },
          ResponseCode:{
            type: "number"
          },
          Limit:{
            type: "number"
          },
          UsrDevices:{
            type: "object",
            properties:{

              SubscriberDeviceID:{
                type: "string"
              },
              UUID:{
                type: "string"
              },
              Platform:{
                type: "string"
              },
              Type:{
                type: "string"
              },
              IP:{
                type: "string"
              },
              LastSignIn:{
                type: "string"
              },
              DeviceCreated:{
                type: "string"
              }
            }
          }
        }
      },
      //Body
      //usr/devices Lista de dispositivos de usuario
      userDevicesListBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          }, 
        }
      },
      //Esquema
      //usr/device Elimina un dispositivo
      userDeviceDelete:{
        type: "object",
        properties:{

          UpdateResponseMsg:{
            type: "string"
          },
          UpdateResponseCode:{
            type: "number"
          },
        }
      },
      //Body
      //usr/device Elimina un dispositivo
      userDeviceDeleteBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "Xqb17-cj7huwqJKUqdVqoEECifdh_ae1-t1LnZyqkPI="
          },
          SubscriberDeviceID:{
            type: "string",
            example: "XXReCc22JxHAdjZEYS9dewV_OemgCTwRJ9hauuHXh3I"
          }
        }
      },

      //HOME

      //Home_music/home
      status:{
        type: "object",
        
        properties: {
          SuscriptionStatus: {
            type: "number",
          },
          SuscriptionResponse: {
            type: "string",
          },
        }
      },
      //Body
      musicHomeBody:{
        type: "object",
        properties: {
          DeviceID: {
            type: "string",
            example: "-C3M-VzZxiTrpuzNJkXV-DWaUF5_3VhoOGtEV3zQn0k"
          },
          ProfileID: {
            type: "number",
            example: 63
          }
        },
      },
      //Esquema
      musicSection:{
        type: "object",
        properties: {
          Title: {
            type: "string",
          },
          Description: {
            type: "string",
          },
          PortadaURL: {
            type: "null",
          },
          ReleaseDate: {
            type: "string",
          },
          PosterType: {
            type: "number",
          },
          ContentType: {
            type: "string",
          },
          ParentSection: {
            type: "null",
          },
          MusicCollectionID: {
            type: "number",
          },
          Order: {
            type: "number",
          },
          TotalItems: {
            type: "number",
          },
          Length: {
            type: "number",
          },
          OwnerID: {
            type: "number",
          },
          IsPublic: {
            type: "boolean",
          },
          Album:{
            type: "object",
            properties:{
              AlbumID:{
                type: "number",
              },
              Title:{
                type: "string",
              },
              Artist:{
                type: "object",
                properties:{
                  ArtistID:{
                    type: "number",
                  },
                  Title:{
                    type: "string"
                  }
                }
              },
              PortadaURL:{
                type: "string"
              }  
            }         
          }
        },
      },
      //Esquema
      //music/Home
      musicHome:{
        type: "object",
        properties: {
          SuscriptionStatus: {
            type: "number",
          },
          SuscriptionResponse: {
            type: "string",
          },
          musicSection:{
            type: "object",
            properties: {
              Title: {
                type: "string",
              },
              Description: {
                type: "string",
              },
              PortadaURL: {
                type: "null",
              },
              ReleaseDate: {
                type: "string",
              },
              PosterType: {
                type: "number",
              },
              ContentType: {
                type: "string",
              },
              ParentSection: {
                type: "null",
              },
              MusicCollectionID: {
                type: "number",
              },
              Order: {
                type: "number",
              },
              TotalItems: {
                type: "number",
              },
              Length: {
                type: "number",
              },
              OwnerID: {
                type: "number",
              },
              IsPublic: {
                type: "boolean",
              },
              Album:{
                type: "object",
                properties:{
                  AlbumID:{
                    type: "number",
                  },
                  Title:{
                    type: "string",
                  },
                  Artist:{
                    type: "object",
                    properties:{
                      ArtistID:{
                        type: "number",
                      },
                      Title:{
                        type: "string"
                      }
                    }        
                  },
                  PortadaURL:{
                    type: "string"
                  }
                }
              },

              SectionAudiobook:{
                type: "object",
                properties:{
                  Title: {
                    type: "string",
                  },               
                  Description: {
                    type: "string",
                  },
                  PortadaURL: {
                    type: "null",
                  },
                  ReleaseDate: {
                    type: "string",
                  },
                  PosterType: {
                    type: "number",
                  },
                  ContentType: {
                    type: "string",
                  },
                  ParentSection: {
                    type: "null",
                  },
                  MusicCollectionID: {
                    type: "number",
                  },
                  Order: {
                    type: "number",
                  },
                  TotalItems: {
                    type: "number",
                  },
                  Length: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  IsPublic: {
                    type: "boolean",
                  },
                  Audiobook:{
                    type: "object",
                    properties:{
                      AudiobookID: {
                        type: "number",
                      },
                      Title: {
                        type: "string",
                      },
                       Artist:{
                        type: "object",
                        properties:{
                          ArtistID:{
                            type: "number",
                          },
                          Title:{
                            type: "string"
                          }
                        }   
                      },
                      Narrator: {
                        type: "string",
                      },
                      PortadaURL: {
                        type: "string",
                      },
                    }
                  },  
                }     
              }, 

              SectionEstreno:{
                type: "object",
                properties:{
                  
                  Title:{
                    type: "string",
                  },
                  Description:{
                    type: "string",
                  },
                  PortadaURL: {
                    type: "null",
                  },
                  ReleaseDate:{
                    type: "string",
                  },
                  PosterType:{
                    type: "number",
                  },
                  ContentType:{
                    type: "string",
                  },
                  ParentSection:{
                    type: "null",
                  },
                  MusicCollectionID:{
                    type: "number",
                  },
                  Order: {
                    type: "number",
                  },
                  TotalItems: {
                    type: "number",
                  },
                  Length: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  IsPublic: {
                    type: "boolean",
                  },
                  Track:{
                    type: "object",
                    properties:{
                      RegID:{
                        type: "number",
                      },
                      Title:{
                        type: "string",
                      },
                      Artist:{
                        type: "object",
                        properties:{

                          ArtistID:{
                            type: "number",
                          },
                          Title:{
                            type: "string"
                          }
                        }
                      },
                      Length:{
                        type: "number",
                      },
                      PortadaURL:{
                        type: "string",
                      },
                      TrackNumber:{
                        type: "number",
                      },
                      AlbumTitle:{
                        type: "string",
                      },
                      AlbumID:{
                        type: "number"
                      }                   
                    },
                  }
                }
              },
              
              SectionmisPlayList:{
                type: "object",
                properties:{

                  Title:{
                    type: "string",
                  },
                  Description:{
                    type: "string",
                  },
                  PortadaURL: {
                    type: "null",
                  },
                  ReleaseDate:{
                    type: "string",
                  },
                  PosterType:{
                    type: "number",
                  },
                  ContentType:{
                    type: "string",
                  },
                  ParentSection:{
                    type: "null",
                  },
                  MusicCollectionID:{
                    type: "number",
                  },
                  Order: {
                    type: "number",
                  },
                  TotalItems: {
                    type: "number",
                  },
                  Length: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  IsPublic: {
                    type: "boolean",
                  },
                  PlayList:{
                    type: "object",
                    properties:{

                      RegID:{
                        type: "number",
                      },
                      Title:{
                        type: "string",
                      },
                      Description:{
                        type: "string",
                      },
                      ArtistID:{
                        type: "number",
                      },
                      OwnerID:{
                        type: "number",
                      },
                      PortadaURL:{
                        type: "string",
                      },
                      ReleaseDate:{
                        type: "string",
                      },
                      ContentType:{
                        type: "string",
                      },
                      Ispublic:{
                        type: "boolean"
                      }
                    }
                  }
                }
              },

              SectionRecomendadosParaTi:{
                type: "object",
                properties:{

                  Title:{
                    type: "string",
                  },
                  Description:{
                    type: "string",
                  },
                  PortadaURL: {
                    type: "null",
                  },
                  ReleaseDate:{
                    type: "string",
                  },
                  PosterType:{
                    type: "number",
                  },
                  ContentType:{
                    type: "string",
                  },
                  ParentSection:{
                    type: "null",
                  },
                  MusicCollectionID:{
                    type: "number",
                  },
                  Order: {
                    type: "number",
                  },
                  TotalItems: {
                    type: "number",
                  },
                  Length: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  IsPublic: {
                    type: "boolean",
                  },
                  Track:{
                    type: "object",
                    properties:{
                      RegID:{
                        type: "number",
                      },
                      Title:{
                        type: "string",
                      },
                      Artist:{
                        type: "object",
                        properties:{

                          ArtistID:{
                            type: "number",
                          },
                          Title:{
                            type: "string"
                          }
                        }
                      },
                      Length:{
                        type: "number",
                      },
                      PortadaURL:{
                        type: "string",
                      },
                      TrackNumber:{
                        type: "number",
                      },
                      AlbumTitle:{
                        type: "string",
                      },
                      AlbumID:{
                        type: "number"
                      }                   
                    },
                  }
                }
              },

              SectionColeccionesParaTi:{
                type: "object",
                properties:{

                  Title:{
                    type: "string",
                  },
                  Description:{
                    type: "string",
                  },
                  PortadaURL: {
                    type: "null",
                  },
                  ReleaseDate:{
                    type: "string",
                  },
                  PosterType:{
                    type: "number",
                  },
                  ContentType:{
                    type: "string",
                  },
                  ParentSection:{
                    type: "null",
                  },
                  MusicCollectionID:{
                    type: "number",
                  },
                  Order: {
                    type: "number",
                  },
                  TotalItems: {
                    type: "number",
                  },
                  Length: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  IsPublic: {
                    type: "boolean",
                  },
                  playList:{
                    type: "object",
            
                    properties: {
                      RegID: {
                        type: "number",
                      },
                      Title: {
                        type: "string",
                      },
                      Description: {
                        type: "string",
                      },
                      ArtistID: {
                        type: "number",
                      },
                      OwnerID: {
                        type: "number",
                      },
                      PortadaURL: {
                        type: "string",
                      },
                      ReleaseDate: {
                        type: "string",
                      },
                      ContentType: {
                        type: "string",
                      },
                      IsPublic: {
                        type: "boolean"
                      }
            
                    }
                  },
                }
              },

              SectionArtistasPopulares:{
                type: "object",
                properties:{

                  Title:{
                    type: "string",
                  },
                  Description:{
                    type: "string",
                  },
                  PortadaURL: {
                    type: "null",
                  },
                  ReleaseDate:{
                    type: "string",
                  },
                  PosterType:{
                    type: "number",
                  },
                  ContentType:{
                    type: "string",
                  },
                  ParentSection:{
                    type: "null",
                  },
                  MusicCollectionID:{
                    type: "number",
                  },
                  Order: {
                    type: "number",
                  },
                  TotalItems: {
                    type: "number",
                  },
                  Length: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  IsPublic: {
                    type: "boolean",
                  },
                  Artist:{
                    type: "object",
            
                    properties: {
                      ArtistID: {
                        type: "number",
                      },
                      Title: {
                        type: "string",
                      },
                      Description:{
                        type: "string",
                      },
                      PortadaURL:{
                        type: "string"
                      }
                    }
                  },
                }
              }

            },
                 
          },     
              
        },          
      },
      //Body
      musicSpotlightHomeBody:{
        type: "object",

          properties:{
            DeviceID:{
              type: "string",
              example: "ObUdavVpzk32y8o-Y0KLPMZUDVz8WCTtIsUHdrX1ehE"
            },
            ProfileID:{
              type: "number",
              example: "0"
            }
          }
      },
      //Esquema 
      album:{
        type: "object",

        properties: {
          AlbumID: {
            type: "number",
          },
          Title: {
            type: "string",
          },
          PortadaURL: {
            type: "string",
          },
        }
      },
      //Esquema 
      artist:{
        type: "object",

        properties: {
          ArtistID: {
            type: "number",
          },
          Title: {
            type: "string",
          },
        }
      },
      //Esquema audiobook_home
      audiobook_home:{
        type: "object",

        properties: {
          AudiobookID: {
            type: "number",
          },
          Title: {
            type: "string",
          },
          Artist: {
            type: "string",
          },
          Narrator: {
            type: "string",
          },
          PortadaURL: {
            type: "string",
          },
        }
      },
      //Esquema 
      track:{
        type: "object",

        properties: {
          RegID: {
            type: "number",
          },
          Title: {
            type: "string",
          },
          Artist: {
            type: "string",
          },
          Length: {
            type: "number",
          },
          PortadaURL: {
            type: "string",
          },
          TrackNumber: {
            type: "number",
          },
          AlbumTitle: {
            type: "string",
          },
          AlbumID: {
            type: "number",
          },
        }
      },
      //Esquema
      playList:{
        type: "object",

        properties: {
          RegID: {
            type: "number",
          },
          Title: {
            type: "string",
          },
          Description: {
            type: "string",
          },
          ArtistID: {
            type: "number",
          },
          OwnerID: {
            type: "number",
          },
          PortadaURL: {
            type: "string",
          },
          ReleaseDate: {
            type: "string",
          },
          ContentType: {
            type: "string",
          },
          IsPublic: {
            type: "boolean"
          }

        }
      },
      //Home_music/spotlight
      spotlight:{
        type: "object",

        properties: {
          RegID: {
            type: "number",
          },
          Order: {
            type: "number",
          },
          ImageURL_landscape: {
            type: "string",
          },
          ImageURL_portrait: {
            type: "string",
          },
          Duration: {
            type: "number",
          },
          ContentID: {
            type: "string",
          },
          ContentType: {
            type: "string",
          },
          Start: {
            type: "string",
          },
          End: {
            type: "string",
          },
        }
      },

      //AUDIOBOOKS

      //Audiobooks_music/audiobook
      audiobook:{
        type:"object",

        properties: {
          Title: {
            type:"string",
          },
          Description: {
            type:"string",
          },
          Lenght: {
            type: "number",
          },
          PortadaURL: {
            type: "string",
          },
          Language: {
            type: "string",
          },
          ASIN: {
            type: "number",
          },
          Artist: {
            type: "object",
            properties:{

              ArtistID:{
                type: "number",
              },
              Title:{
                type: "string",
              }
            }
          },
          Narrator: {
            type: "string",
          },
          ReleaseDate: {
            type: "string",
          },
          Episode: {
            type: "number",
          },
          Track: {
            type: "object",
            properties:{
              RegID:{
                type: "number",
              },
              Title:{
                type: "string",
              },
              Artist:{
                type: "object",
                properties:{

                  ArtistID:{
                    type: "number",
                  },
                  Title:{
                    type: "string"
                  }
                }
              },
              Length:{
                type: "number",
              },
              TrackNumber:{
                type: "number",
              },
              PortadaURL:{
                type: "string",
              },
              AudioBookTitle:{
                type: "string",
              },
              AudioBookID:{
                type: "number"
              }
            }
          },
          AudiobookID: {
            type: "number",
          },
        }
      },
      
      //MUSIC

      //Esquema
      //Music/album/ID
      musicAlbumID:{
        type: "object",

        properties: {
          Title: {
            type: "string",
          },
          Description: {
            type: "string",
          },
          Length: {
            type: "number",
          },
          PortadaURL: {
            type: "string",
          },
          ReleaseDate: {
            type: "string",
          },
          TotalItems: {
            type: "number",
          },
          Artist: {
            type: "object",
            properties:{
              ArtistID:{
                type: "number",
              },
              Title:{
                type: "string",
              },
            }
          },
          Track: {
            type: "object",
            properties:{
              RegID:{
                type: "number",
              },
              Title:{
                type: "string",
              },
              Artist:{
                type: "object",
                properties:{
                  ArtistID:{
                    type: "number",
                  },
                  Title:{
                    type: "string",
                  }
                }
              },
              Length:{
                type: "number",
              },
              PortadaURL:{
                type: "string",
              },
              TrackNumber:{
                type: "number",
              },
              AlbumTitle:{
                type: "string",
              },
              AlbumID:{
                type: "number"
              }
            }
          },
          AlbumID: {
            type: "number",
          },
        }
      },
      //Esquema
      //Music/artist/ID
      musicArtistID:{
        type: "object",

        properties: {
          Title: {
            type: "string",
          },
          Description: {
            type: "string",
          },
          PortadaURL: {
            type: "string",
          },
        }
      },
      //Esquema
      //Music/playlist/ID
      musicPlaylistID:{
        type: "object",

        properties: {
          Title: {
            type: "string",
          },
          Description: {
            type: "string",
          },
          PortadaURL: {
            type: "string",
          },
          ReleaseDate: {
            type: "string",
          },
          PosterType: {
            type: "number",
          },
          ContentType: {
            type: "string",
          },
          ParentSection: {
            type: "null"
          },
          MusicCollectionID: {
            type: "number",
          },
          Order: {
            type: "number",
          },
          TotalItems: {
            type: "number",
          },
          Length: {
            type: "number",
          },
          OwnerID: {
            type: "number",
          },
          IsPublic: {
            type: "boolean",
          },
          Track: {
            type: "object",
            properties:{
              RegID:{
                type: "number",
              },
              Title:{
                type: "string",
              },
              Artist:{
                type: "object",
                properties:{
                  ArtistID:{
                    type: "number",
                  },
                  Title:{
                    type: "string",
                  },                                    
                }
              },
              Lenth:{
                type: "number",
              },
              PortadaURL:{
                type: "string",
              },
              TrackNumber:{
                type: "number",
              },
              AlbumTitle:{
                type: "string",
              },
              AlbumID:{
                type: "number",
              },
            }
          },
        }
      },
      musicPlaylistIdBody:{
          type: "object",
          properties:{
            DeviceID:{
              type: "string",
              example: "-C3M-VzZxiTrpuzNJkXV-DWaUF5_3VhoOGtEV3zQn0k"
            },
            ProfileID:{
              type: "number",
              example: "63"
            }
          }
      },
      //Esquema
      //Music/pl-Crear
      musicPlCrear:{
        type: "object",

        properties:{
          Response:{
            type: "object",

              properties:{
                Msg:{
                  type: "string",
                },
                Code:{
                  type: "number",
                }
              }
          },
          MusicCollectionDTO:{
            type: "object",

              properties:{
                RegID:{
                  type: "number",
                },
                Title:{
                  type: "string",
                },
                Description:{
                  type: "string",
                },
                IsPublic:{
                  type: "boolean",
                }
              }
          }
        }
      },
      //Body
      //music/Pl-Crear
      musicPlBodyCrear:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "JLbuNnzv6nY8gvnOEQNaEXVECuTC2D5YOlfSUiO8X1s"
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          MusicCollectionDTO:{
            type: "object",
            properties:{

              Title:{
                type: "string",
                example: "Prueba de PlayList RenPlay"
              },
              Description:{
                type: "string",
                example: "De todo un poco"
              },
              IsPublic:{
                type: "boolean",
                example: false
              }
            }
          }

        }
      },
      //Esquema
      //Music/pl-Editar
      musicPlEditar:{
        type: "object",

        properties:{
          Response:{
            type: "object",

              properties:{
                Msg:{
                  type: "string",
                },
                Code:{
                  type: "number",
                },
              }
          },
          MusicCollectionDTO:{
            type: "object",

              properties:{
                RegID:{
                  type: "number",
                },
                Title:{
                  type: "string",
                },
                Description:{
                  type: "string",
                },
                IsPublic:{
                  type: "boolean"
                }
              }
          }
        }
      },
      //Body
      //music/pl-Editar
      musicPlBodyEditar:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "JLbuNnzv6nY8gvnOEQNaEXVECuTC2D5YOlfSUiO8X1s"
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          MusicCollectionDTO:{
            type: "object",
            properties:{

              RegID:{
                type: "number",
                example: "2144"
              },
              Title:{
                type: "string",
                example: "Prueba de Edicion PlayList RenPlay"
              },
              Description:{
                type: "string",
                example: "De todo un poco"
              },
              IsPublic:{
                type: "boolean",
                example: true
              }
            }
          }
        }
      },
      //Esquema
      //music/pl-Eliminar
      musicPlEliminar:{
        type: "object",
        properties:{

          Msg:{
            type: "string",
          },
          Code:{
            type: "number"
          }
        }
      },
      //Body
      //music/pl-Eliminar
      musicPlBodyEliminar:{
        type: "object",
        properties: {

          DeviceID:{
            type: "string",
            example: "JLbuNnzv6nY8gvnOEQNaEXVECuTC2D5YOlfSUiO8X1s"
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          MusicCollectionDTO:{
            type: "object",
            properties:{

              RegID:{
                type: "number",
                example: "2140"
              },
              Title:{
                type: "string",
                example: null
              },
              Description:{
                type: "string",
                example: null
              },
              IsPublic:{
                type: "boolean",
                example: false
              }
            }
          }
        }
      },
      //Esquema
      //music/pl/track-Agregar
      musicPlTrackAgregar:{
        type: "object",
        properties:{

          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string",
              },
              Code:{
                type: "number"
              }
            }
          },
          MusicCollectionDTO:{
            type: "object",
            properties:{
              PlayListID:{
                type: "number",
              },
              TrackID:{
                type: "number",
              },
              Order:{
                type: "number"
              }
            }
          }
        }
      },
      //Body
      //music/pl/track-Agregar
      musicPlTrackBodyAgregar:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "JLbuNnzv6nY8gvnOEQNaEXVECuTC2D5YOlfSUiO8X1s"
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          CollectionTrackDTO:{
            type: "object",
            properties:{

              PlayListID:{
                type: "number",
                example: "2146"
              },
              TrackID:{
                type: "number",
                example: "3"
              },              
            }
          }
        }
      },
      //Esquema
      //music/pl/track-Eliminar
      //Colocar cuando aparezca en testfully
      musicPlTrackEliminar:{
        type: "object",
        properties:{

          Response:{
            type: "object",
            properties:{

              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          MusicCollectionDTO:{
            type: "object",
            properties:{

              PlayListID:{
                type: "number"
              },
              TrackID:{
                type: "number"
              },
              Orden:{
                type: "number"
              }
            }
          }
        }
      },
      //Body
      //music/pl/track-Eliminar
      musicPlTrackBodyEliminar:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "JLbuNnzv6nY8gvnOEQNaEXVECuTC2D5YOlfSUiO8X1s"
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          CollectionTrackDTO:{
            type: "object",
            properties:{

              PlayListID:{
                type: "number",
                example: "2146"
              },
              TrackID:{
                type: "number",
                example: "2"
              }            
            }
          }
        }
      },
      //Esquema - Obtiene los Playlist de usuario por profile ID
      //music/myplaylist
      musicMyplaylist:{
        type: "object",
        properties:{

          Response:{
            type: "object",
            properties:{

              Msg:{
                type: "string",
              },
              Code:{
                type: "number"
              }
            }
          },
          MusicCollectionDTO:{
            type: "object",
            properties:{

              Title: {
                type: "string",
              },
              Description: {
                type: "string",
              },
              PortadaURL: {
                type: "string",
              },
              ReleaseDate: {
                type: "string",
              },
              PosterType: {
                type: "number",
              },
              ContentType: {
                type: "string",
              },
              ParentSection: {
                type: "null",
              },
              MusicCollectionID: {
                type: "number",
              },
              Order: {
                type: "number",
              },
              TotalItems: {
                type: "number",
              },
              Length: {
                type: "number",
              },
              OwnerID: {
                type: "number",
              },
              IsPublic: {
                type: "boolean",
              },
              Playlist:{
                type: "object",
                properties:{

                  RegID: {
                    type: "number",
                  },
                  Title: {
                    type: "string",
                  },
                  Description: {
                    type: "string",
                  },
                  ArtistID: {
                    type: "number",
                  },
                  OwnerID: {
                    type: "number",
                  },
                  PortadaURL: {
                    type: "string",
                  },
                  ReleaseDate: {
                    type: "string",
                  },
                  ContentType: {
                    type: "string",
                  },
                  IsPublic: {
                    type: "boolean"
                  }
                }

              }
            }
          }
        }
      },
      //Body
      //music/myplaylist
      musicMyplaylistBody:{
        type: "object",
        properties:{
          DeviceID:{
            type: "string",
            example: "v9aK1dAIg2fqaapqLsiXSE9n9ngKkvIdwkbrW5-pgV0",
          },
          ProfileID:{
            type: "number",
            example: "1"
          }
        }
      },
      //Esquema - Obtiene el link de reproducción del track
      musicTracklink:{
        type: "object",
        properties:{

          SuscriberStatus:{
            type: "object",
            properties:{

              Code:{
                type: "number",
              },
              Msg:{
                type: "string"
              }
            }   
          },
          Url:{
            type: "string"
          }
        }
      },
      //Body
      //music/tracklink Obtener
      musicTracklinkBody:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "v9aK1dAIg2fqaapqLsiXSE9n9ngKkvIdwkbrW5-pgV0",
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          TrackID:{
            type: "number",
            example: "21"
          }
        }
      },
      //Esquema
      //Music/feedback - Para dar Feedback de un elemento 
      musicFeedback:{
        type: "object",
        properties:{

          Msg: {
            type: "string"
          },
          Code: {
            type: "number"
          }
        }
      },
      //Body
      //Music/feedback - Para dar Feedback de un elemento
      musicFeedbackBody:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "v9aK1dAIg2fqaapqLsiXSE9n9ngKkvIdwkbrW5-pgV0"
          },
          ProfileID:{
            type: "number",
            example: "1"
          },
          IsLiked:{
            type: "boolean",
            example: false
          },
          TrackID:{
            type: "number",
            example: "21"
          }
        }
      },

      //SUBSCRIPTION

      //Esquema
      //Status
      subscriptionStatus:{
        type: "object",
        properties:{

          CurrentSuscriptionPeriod:{
            type: "null"
          },
          SuscriberStatus:{
            type: "object",
            properties:{

              Code:{
                type: "number",
              },
              Msg:{
                type: "string"
              }
            }
          },
          SubscriptionPkg:{
            type: "object",
            properties:{

              RegID:{
                type: "number"
              },
              PackageCode:{
                type: "string"
              },
              PackageName:{
                type: "string"
              },
              Notes:{
                type: "null"
              },
              Price:{
                type: "number"
              },
              Currency:{
                type: "null"
              },
              Poster:{
                type: "null"
              },
              TrialDays:{
                type: "null"
              },
              MaxDevices:{
                type: "null"
              },
              MaxConcurrentViewers:{
                type: "null"
              }
            }
          }
        }
      },
      //Body
      //Status
      subscriptionStatusBody:{
        type: "object",
        properties:{

          DeviceID:{
            type: "string",
            example: "Wf7cvGxkxsi7adNdnHw4IweiFBD1oQpuA8gjTavhlc"
          }   
        }
      },
      //Esquema
      //Package
      package:{
        type: "object",
        properties:{

          RegID:{
            type: "number"
          },
          PackageCode:{
            type: "string"
          },
          PackageName:{
            type: "string"
          },
          Notes:{
            types: "string"
          },
          Price:{
            type: "number"
          },
          Currency:{
            type: "string"
          },
          Poster:{
            type: "string"
          },
          TrialDays:{
            type: "number"
          },
          MaxDevices:{
            type: "number"
          },
          MaxConcurrentViewers:{
            type: "number"
          }
        }
      },
      //Body
      //Package
      packageBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "FbYDCn3Qr0uWq6ZferRxWTgspxzmEJfPHTUBfn8OJFE"
          }
        }
      },
      //Esquema
      //GetDemo
      getDemo:{
        type: "object",
        properties:{

          Msg:{
            type: "string"
          },
          Code:{
            type: "number"
          }
        }
      },
      //Body
      //GetDemo
      getDemoBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "h3lZVO-mkP2NfTq5p8LObLzhPg0CMp9rdQwqFVpk0TA="
          },
        }
      },
      //Esquema
      //Validar Cupón
      validarCupon:{
        type: "object",
        properties:{

          Coupon:{
            type: "object",
            properties:{

              RegID:{
                type: "number"
              },
              ResellerID:{
                type: "string"
              },
              PromoCode:{
                type: "string"
              },
              PriceDiscountPct:{
                type: "number"
              },
              Countrylso2:{
                type: "string"
              },
              SubRegID:{
                type: "number"
              },
              ExpDate:{
                type: "string"
              },
              PromoCodeResponse:{
                type: "number"
              }
            }
          },
          Response:{
            type: "object",
            properties:{

              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          }
        }     
      },
      //Body
      //Validar Cupón
      validarCuponBody:{
        type: "object",
        properties:{

          PromoCode:{
            type: "string",
            example: "PromoTest2023OK" 
          },
          SubRegID:{
            type: "number",
            example: "10"
          }
        }     
      },
      //Esquema
      //Agregar suscripción
      addSuscripcion:{
        type: "object",
        properties:{

          Msg:{
            type: "string"
          },
          Code:{
            type: "number"
          }
        }
      },
      //Body
      //Agregar suscripción
      addSuscripcionBody:{
        type: "object",
        properties:{

          SuscriberID:{
            type: "string",
            example: "h3lZVO-mkP2NfTq5p8LObLzhPg0CMp9rdQwqFVpk0TA="
          },
          SubscriptionInfo:{
            type: "object",
            properties:{

              SubID:{
                type: "number",
                example: "10"
              },
              AmountDebt:{
                type: "number",
                example: "58.65"
              },
              DiscountCode:{
                type: "string",
                example: "PromoTest2023OK"
              },

            }
          },
          PaymentCard:{
            type: "object",
            properties:{

              card_number:{
                type: "number",
                example: '"4111111111111111"'
              },
              holder_name:{
                type: "string",
                example: "Sary Cazares"
              },
              expiration_year:{
                type: "number",
                example: '"24"'
              },
              expiration_month:{
                type: "number",
                example: "08"
              },
              cvv2:{
                type: "number",
                example: '"123"'
              }
            }
          }
        }
      },

      //CREATORS

      //Esquema creators/list/artist
      listaDeArtistas:{
        type: "object",
        properties:{

          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            },
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "string"
              },
              Description:{
                type: "string"
              },
              PortadaURL:{
                type: "string"
              },
              Active:{
                type: "boolean"
              },
              OwnerID:{
                type: "number"
              },
              ArtistID:{
                type: "number"
              }
            }
          }
        }
      },
      // Body creators/list/artist
      listaDeArtistasBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          }
        }
      },
      //Esquema artist - Edit
      arsistEdit:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "string"
              },
              Description:{
                type: "string"
              },
              PortadaURL:{
                type: "string"
              },
              Active:{
                type: "boolean"
              },
              OwnerID:{
                type: "number"
              },
              ArtistID:{
                type: "number"
              }
            }
          }
        }
      },
      //Body artist - Edit
      artistEditBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "string",
                example: "Armando Sanchez"
              },
              Description:{
                type: "string",
                example: "Cantautor con una pasión extrema por compartir el mensaje de Jesús a través de la música y la palabra de Dios. Nació en San Juan, Puerto Rico el 18 de octubre de 1987 en un hogar cristiano. A la edad de 15 años, comenzó a participar con diferentes ministerios que lo llevaban a jugar con diferentes adoradores a esa temprana edad. A esta misma edad comenzó como adorador en AMEC Casa de Alabanza bajo la dirección de los pastores Vanyo y Mizraim Esquilín. Fue aquí donde eventualmente conoció a su amigo y primer productor Yamil Martínez, quien se le acercó años más tarde para crear un proyecto musical. Armando comenzó su carrera como compositor como resultado de una experiencia que marcó su vida a los 19 años de edad."
              },
              PortadaURL:{
                type: "string",
                example: "https://mtracks.azureedge.net/public/images/artists/cover/512/915.jpg"
              },
              ArtistID:{
                type: "number",
                example: "24"
              },
              Active:{
                type: "boolean",
                example: "true"
              }
            }
          }
        }
      },
      //Esquema creators/artist - Create
      artistCreate:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "null",
              },
              Description:{
                type: "null"
              },
              PortadaURL:{
                type: "null"
              },
              Active:{
                type: "boolean"
              },
              OwnerID:{
                type: "number"
              }
            }
          }
        }
      },
      //Body reators/artist - Create
      artistCreateBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "string",
                example: "Marcelas Gandara"
              },
              Description:{
                type: "string",
                example: "Marcela Gándara es una cantante y compositora mexicana de música cristiana. Hasta la actualidad, ha producido seis álbumes, entre los cuales se encuentran, Más que un anhelo, ¡Digno es el Señor!, Marcela Gándara en vivo desde Panamá, El mismo cielo, Live y Cerca estás."
              },
              PortadaURL:{
                type: "string",
                example: "https://i.scdn.co/image/ab6761670000ecd41289c047f12ab28f2e713e54"
              },
              Active:{
                type: "boolean",
                example: "true"
              }
            }
          }
        }
      },
      //Esquema creators/album - Create
      albumCreate:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Album:{
            type: "object",
            properties:{
              Title:{
                type: "null"
              },
              Description:{
                type: "null"
              },
              Length:{
                type: "null"
              },
              PortadaURL:{
                type: "null"
              },
              ReleaseDate:{
                type: "null"
              },
              TotalItems:{
                type: "boolean"
              },
              Active:{
                type: "null"
              },
              Artist:{
                type: "null"
              },
              AlbumID:{
                type: "null"
              }
            }
          }
        }
      },
      //Body creators/album - Create
      albumCreateBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Album:{
            type: "object",
            properties:{
              Title:{
                type: "string",
                example: "MiRefugio"
              },
              Description:{
                type: "string",
                example: ""
              },
              Length:{
                type: "number",
                example: "3281"
              },
              PortadaURL:{
                type: "string",
                example: "https://i.scdn.co/image/ab67616d00001e027d3622529b03dab74f93e2d9"
              },
              ReleaseDate:{
                type: "string",
                example: "2012-08-09T00:00:00"
              },
              TotalItems:{
                type: "number",
                example: "13"
              },
              Artists:{
                type: "array",
                items:{
                  type: "object",
                  properties:{
                    ArtistID:{
                      type: "array",
                      example: "8"
                    }
                  }
                }
              },
              Active:{
                type: "boolean",
                example: "true"
              }
            }
          }
        }
      },
      //Esquema creators/album - Edit
      albumEdit:{
        Response:{
          type: "object",
          properties:{
            Msg:{
              type: "string"
            },
            Code:{
              type: "number"
            }
          }
        },
        Album:{
          type: "object",
          properties:{
            Title:{
              type: "null"
            },
            Description:{
              type: "null"
            },
            Length:{
              type: "null"
            },
            PortadaURL:{
              type: "null"
            },
            ReleaseDate:{
              type: "null"
            },
            TotalItems:{
              type: "boolean"
            },
            Active:{
              type: "boolean"
            },
            Artists:{
              type: "array",
              properties:{
                ArtistID:{
                  type: "number"
                }
              }
            },
            AlbumID:{
              type: "number"
            }
          }
        }
      },
      //Body creators/album Edit 
      albumEditBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Album:{
            type: "object",
            properties:{
              AlbumID:{
                type: "number",
                example: "9"
              },
              Title:{
                type: "string",
                example: "MiRefugio"
              },
              Description:{
                type: "string",
                example: ""
              },
              Length:{
                type: "number",
                example: "3281"
              },
              PortadaURL:{
                type: "string",
                example: "https://i.scdn.co/image/ab67616d00001e027d3622529b03dab74f93e2d9"
              },
              ReleaseDate:{
                type: "string",
                example: "2012-08-09T00:00:00"
              },
              TotalItems:{
                type: "number",
                example: "13"
              },
              Artist: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    ArtistID: {
                      type: "array",
                      items: {
                        type: "number",
                        example: [8, 9]
                      }
                    }
                  }
                }
              }       
              },
              Active:{
                type: "boolean",
                example: "true"
              }
          }
          }
      },
      //Esquema creators/list/album 
      albumList:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Albums:{
            type: "object",
            properties:{
              Title:{
                type: "string"
              },
              Description:{
                type: "string"
              },
              Length:{
                type: "number"
              },
              PortadaURL:{
                type: "string"
              },
              ReleaseDate:{
                type: "string"
              },
              TotalItems:{
                type: "number"
              },
              Active:{
                type: "boolean"
              },
              Artists:{
                type: "array",
                items:{
                  type: "object",
                  properties:{
                    ArtistID:{
                      type: "array",
                      items:{
                        type: "number"
                      }
                    }
                  }
                }
              },
              AlbumID:{
                type: "number"
              }
            }
          }
        }
      },
      //Body creators/list/album
      albumListBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "object",
            example: "UmVuUGxheTIwMjMk"
          }
        }
      },
      //Esquema creators/artist - Delete
      artistDelete:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "null"
              },
              Description:{
                type: "null"
              },
              PortadaURL:{
                type: "null"
              },
              Active:{
                type: "boolean"
              },
              OwnerID:{
                type: "number"
              }
            }
          },         
        }
      },
      //Body creators/artist - Delete
      artistDeleteBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Artist:{
            type: "object",
            properties:{
              ArtistID:{
                type: "number",
                example: "29"
              }
            }
          }
        }
      },
      //Esquema creators/album - Delete
      albumDelete:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Artist:{
            type: "object",
            properties:{
              Title:{
                type: "null"
              },
              Description:{
                type: "null"
              },
              PortadaURL:{
                type: "null"
              },
              Active:{
                type: "boolean"
              },
              OwnerID:{
                type: "number"
              }
            }
          },
          
        }
      },
      //Body creators/album - Delete
      albumDeleteBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Album:{
            type: "object",
            properties:{
              AlbumID:{
                type: "number",
                example: "10"
              }
            }
          }
        }
      },
      //Esquema creators/track
      trackCreate:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Track:{
            type: "object",
            properties:{
              TrackID:{
                type: "number"
              },
              Title:{
                type: "null"
              },
              Artists:{
                type: "null"
              },
              Length:{
                type: "null"
              },
              StreamURL:{
                type: "null"
              },
              TrackNumber:{
                type: "null"
              },
              Active:{
                type: "boolean"
              },
              IsVideo:{
                type: "null"
              },
              AlbumID:{
                type: "null"
              }
            }
          },         
        }
      },
      //Body creators/track
      trackCreateBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Track:{
            type: "object",
            properties:{
              Title:{
                type: "string",
                example: "Salmo 150"
              },
              Length:{
                type: "number",
                example: "217"
              },
              StreamURL:{
                type: "string",
                example: "https://rsq8.renplay.com/tracks/06-07-2023/t1a9.aac/playlist.m3u8"
              },
              AlbumID:{
                type: "number",
                example: "9"
              },
              TrackNumber:{
                type: "number",
                example: "1"
              },
              IsVideo:{
                type: "boolean",
                example: "false"
              },
              Artists:{
                type: "array",
                items:{
                  type: "object",
                  properties:{
                    ArtistID:{
                      type: "array",
                      example: "8"
                    }
                  }
                }
              },
              Active:{
                type: "boolean",
                example: "true"
              }
            }
          }
        }
      },
      //Esquema creators/track - Edit
      trackEdit:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Track:{
            type: "object",
            properties:{
              TrackID:{
                type: "number"
              },
              Title:{
                type: "string"
              },
              Artists:{
                type: "array",
                items:{
                  type: "object",
                  properties:{
                    ArtistID:{
                      type: "array",
                      items:{
                        type: "number"
                      }    
                    }
                  }
                }
              },
              Length:{
                type: "number"
              },
              StreamURL:{
                type: "string"
              },
              TrackNumber:{
                type: "number"
              },
              Active:{
                type: "boolean"
              },
              IsVideo:{
                type: "boolean"
              },
              AlbumID:{
                type: "number"
              }
            }
          }
        }
      },
      //Body creators/track - Edit
      trackEditBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Track:{
            type: "object",
            properties:{
              Title:{
                type: "string",
                example: "Siempre Me Sostiene | Armando Sánchez & Gateway Worship Español"
              },
              Length:{
                type: "number",
                example: "238"
              },
              StreamURL:{
                type: "string",
                example: "https://sina2.guiah.tv/leon/clips/SiempreMeSostieneGw_720p.mp4/playlist.m3u8"
              },
              AlbumID:{
                type: "number",
                example: "4"
              },
              TrackNumber:{
                type: "number",
                example: "2"
              },
              IsVideo:{
                type: "boolean",
                example: "true"
              },
              Artists: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    ArtistID: {
                      type: "array",
                      items: {
                        type: "number"
                      }
                    }
                  }
                },
                example: [
                  {
                    "ArtistID": 19
                  },
                  {
                    "ArtistID": 24
                  },
                ]
              },        
              Active:{
                type: "boolean",
                example: "true"
              },
              TrackID:{
                type: "number",
                example: "32"
              }
            }
          }
        }
      },
      //Esquena creators/track - Delete
      trackDelete:{
        type: "object",
        properties:{
          Response:{
            type: "object",
            properties:{
              Msg:{
                type: "string"
              },
              Code:{
                type: "number"
              }
            }
          },
          Track:{
            type: "object",
            properties:{
              TrackID:{
                type: "number"
              },
              Title:{
                type: "null"
              },
              Artists:{
                type: "null"
              },
              Length:{
                type: "null"
              },
              StreamURL:{
                type: "null"
              },
              TrackNumber:{
                type: "null"
              },
              Active:{
                type: "boolean"
              },
              IsVideo:{
                type: "null"
              },
              AlbumID:{
                type: "null"
              }
            }
          },         
        }
      },
      //Body creators/track - Delete
      trackDeleteBody:{
        type: "object",
        properties:{
          CreatorID:{
            type: "string",
            example: "UmVuUGxheTIwMjMk"
          },
          Track:{
            type: "object",
            properties:{
              TrackID:{
                type: "number",
                example: "36"
              }
            }
          }
        }
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
